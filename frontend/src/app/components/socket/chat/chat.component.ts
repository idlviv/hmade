import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { IChatMessage } from '../../../interfaces/interface';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  msgs: IChatMessage[] = [];
  @Input() message: string;
  @Input() room: string;
  activeManagers = [];

  chatVisible = true;

  getGuestNameForm: FormGroup;

  constructor(
    private chatService: ChatService,
  ) { }

  ngOnInit() {
    this.getGuestNameForm = new FormGroup({
      getGuestName: new FormControl('', [
        Validators.required,
      ]),
    });

    this.chatService.onMessage()
      .subscribe(msg => {
        console.log(msg);
        // this.msgs.push(msg);
      });

    this.chatService.onGetGuestName()
      .subscribe(msg => {
        console.log(msg);
        // this.msgs.push(msg);
      });
  }

  guestName(name) {
    this.chatService.guestName(name);
  }
  //   this.chatService.onDisconnect()
  //     .subscribe(msg => {
  //       this.msgs = [];
  //       this.chatService.connect();
  //     });

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

  // joinToManager(manager_id) {
  //   this.chatService.joinToManager(manager_id);
  // }

  // onSendMessage() {
  //   this.chatService.sendMessage({ message: this.message });
  //   this.message = '';
  // }

}
