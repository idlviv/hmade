import { Component, OnInit, Input } from '@angular/core';
import { IChatMessage } from '../../../interfaces/interface';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  // msgs: IChatMessage[] = [];
  // @Input() message: string;
  // @Input() room: string;
  activeManagers = [];
  msgs = [];
  chatVisible = true;
  joinToManagerRoom: any;

  getGuestNameForm: FormGroup;

  constructor(
    private socketService: SocketService,
  ) { }

  ngOnInit() {
    this.getGuestNameForm = new FormGroup({
      getGuestName: new FormControl('', [
        Validators.required,
      ]),
    });

    this.socketService.initialConnection();

    // this.chatService.onMessage()
    //   .subscribe(data => {
    //     console.log(data);
    //     this.msgs.push(data);
    //   });

    // this.chatService.onGetGuestName()
    //   .subscribe(data => {
    //     console.log(data);
    //     // this.msgs.push(msg);
    //   });

    // this.chatService.onActiveManagers()
    //   .subscribe(data => {
    //     console.log(data);
    //     this.activeManagers = data;
    //   });

    // this.chatService.onDisconnect()
    //   .subscribe(msg => {
    //     this.msgs = [];
    //     this.chatService.connect();
    //   });

    // this.chatService.onJoinToManager()
    //   .subscribe(data => {
    //     console.log(data);
    //     this.joinToManagerRoom = data;
    //   });
  }

  
  // guestName(name) {
  //   this.chatService.guestName(name);
  // }

  // joinToManager(manager_id) {
  //   this.chatService.joinToManager(manager_id);
  // }

  // connect() {
  //   this.chatService.connect();
  // }

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
