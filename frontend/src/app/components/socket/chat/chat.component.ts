import { Component, OnInit, Input } from '@angular/core';
import { IChatMsg } from '../../../interfaces/interface';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SocketService } from 'src/app/services/socket.service';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  // msgs: IChatMessage[] = [];
  message: string;
  room: string;
  tmp: any;

  activeManagers = [];
  msgs = [];

  showDialog = false;
  joinToManagerRoom: any;

  getGuestNameForm: FormGroup;

  // 1
  socketConnected = false;
  // 2
  gotActiveManagers = false;
  // 3

  firstConnection = true;

  constructor(
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    this.getGuestNameForm = new FormGroup({
      getGuestName: new FormControl('', [
        Validators.required,
      ]),
    });

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

    this.socketService.on('joinToManager')
      .subscribe(data => {
        console.log('joinToManager', data);
        this.room = data.payload;
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

  // guestName(name: string) {
  //   this.socketService.emit('guestName', { message: 'guest name', payload: name });
  // }

  joinToManager(manager_id: string) {
    console.log('emit');
    this.emit('joinToManager', { message: 'join to manager with id', payload: manager_id });
  }

  sendMessage() {
    this.emit('message', { message: this.message, payload: null, room: this.room });
    this.message = '';
  }

  disconnect() {
    this.socketService.disconnect();
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
