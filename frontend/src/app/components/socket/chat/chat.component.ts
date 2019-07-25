import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { IChatMsg } from '../../../interfaces/interface';
import { FormControl, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { SocketService } from 'src/app/services/socket.service';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild(FormGroupDirective) messageFormDirective: FormGroupDirective;

  @Output() hideChat = new EventEmitter<boolean>();
  @Output() disconnectChat = new EventEmitter<boolean>();

  message: string;
  room: string;
  tmp: any;

  activeManagers = [];
  msgs = [
    {
      message: '1 - Lorem Ipsum является текст-заполнителum является текст-заполнител ь обычно',
    },
    {
      message: '2 - Lorem Ipsum является текст-заполнитель обычно',
    },
    {
      message: '3 - Lorem Ipsum является текст-заполнитель обычно',
    },
    {
      message: '4 - Lorem Ipsum является текст-заполнитель обычно',
    },
    {
      message: '5 - Lorem Ipsum является текст-заполнитель обычно',
    },
    {
      message: '6 - Lorem Ipsum является текст-заполнитель обычно',
    },
  ];

  showDialog = false;
  joinToManagerRoom: any;

  messageForm: FormGroup;

  // 1
  socketConnected = false;
  // 2
  gotActiveManagers = false;
  // 3
  requestOnJoin = false;

  firstConnection = true;

  constructor(
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    this.messageForm = new FormGroup({
      message: new FormControl('', [
        Validators.required,
      ]),
    });

    console.log('onInit');

    this.connect();
  }

  connect() {
    if (this.firstConnection) {

      this.socketService.initialConnection()
        .subscribe(
          result => {
            this.setListeners();
            this.firstConnection = false;
            this.socketConnected = result;
            console.log('connection result', result);
          },
          err => {
            this.firstConnection = false;
            console.log('error socket connection', err);
            // this.socketService.reconnect();
          },
        );
    } else {
      this.socketService.connect();
    }
  }

  setListeners() {
    this.socketService.on('message')
      .subscribe(msg => {
        console.log('msg', msg);
        this.msgs.push(msg);
      });

    this.socketService.on('activeManagers')
      .subscribe(msg => {
        this.activeManagers = msg.payload;
        this.gotActiveManagers = true;
      });

    this.socketService.on('joinToManagerAccept')
      .subscribe(msg => {
        console.log('joinToManagerAccept', msg);
        this.room = msg.room;
        this.msgs.push(msg);
      });

    this.socketService.on('joinToManagerRequest')
      .subscribe(msg => {
        console.log('joinToManagerRequest', msg);
        this.room = msg.room;
        this.requestOnJoin = true;
      });

  
    // this.socketService.on('message')
    // .subscribe(data => {
    //   this.msgs.push(data);
    // });

    // this.socketService.on('getGuestName')
    // .subscribe(data => {
    //   console.log(data);
    // });

    // this.socketService.on('activeManagers')
    // .subscribe(data => {
    //   this.activeManagers = data;
    // });

    // this.socketService.on('disconnect')
    // .subscribe(data => {
    //   this.msgs = [];
    //   this.socketService.disconnect();
    // });

    // this.socketService.on('joinToManager')
    // .subscribe(data => {
    //   this.joinToManagerRoom = data;
    // });
  }

  emit(eventName: string, msg: IChatMsg) {
    this.socketService.emit(eventName, msg).subscribe(
      (result) => {
        console.log('message delivery confirmation ', result);
      },
      (err) => {
        console.log('message delivery error ', err);
      }
    );
  }

  joinToManagerRequest(manager_id: string) {
    this.emit('joinToManagerRequest', { message: 'request to join to manager with id', payload: manager_id });
  }

  joinToManagerAccept() {
    this.emit('joinToManagerAccept', { message: 'Accept request to join to room', room: this.room });
    this.requestOnJoin = false;

  }

  sendMessage() {
    this.message = this.messageForm.get('message').value;
    this.emit('message', { message: this.message, payload: null, room: this.room });
    this.messageFormDirective.resetForm();
  }

  disconnect() {
    this.msgs = [];
    this.socketService.disconnect();
    this.disconnectChat.emit();
  }

  hide() {
    this.hideChat.emit();
  }

  //   this.chatService.onJoinToManager()
  //     .subscribe(requestFromUser => {
  //       console.log('requestFromUser', requestFromUser);
  //     });

  //   this.chatService.onConnect()
  //     .subscribe(msg => {
  //       this.msgs = [];
  //     });

  //   this.chatService.getMessage()
  //     .subscribe(msg => {
  //       console.log(msg);
  //       this.msgs.push(msg);
  //     }
  //     );

  //   this.chatService.changeStatus()
  //     .subscribe(activeManagers => {
  //       this.activeManagers = activeManagers;
  //     }
  //     );
  // }

  // onWhatIsYourName() {
  //   console.log('onWhatIsYourName');
  // }


  // chatVisibleSwitch() {
  //   this.chatVisible = !this.chatVisible;
  // }
  // connect() {
  //   this.chatService.connect();
  // }



  // onSendMessage() {
  //   this.chatService.sendMessage({ message: this.message });
  //   this.message = '';
  // }

}
