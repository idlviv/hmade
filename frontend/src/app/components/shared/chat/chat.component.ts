import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { IChatMessage } from '../../../interfaces/interface';

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

  constructor(
    private chatService: ChatService,
  ) { }

  ngOnInit() {
    this.chatService.connect();

    this.chatService.getMessage()
      .subscribe(msg => {
        console.log(msg);
        this.msgs.push(msg);
      }
    );

    this.chatService.changeStatus()
      .subscribe(activeManagers => {
        this.activeManagers = activeManagers;
      }
      );

  }

  onJoin() {
    this.chatService.join({ room: this.room });
    this.room = '';
  }

  onSendMessage() {
    this.chatService.sendMessage({message: this.message});
    this.message = '';
  }

}
