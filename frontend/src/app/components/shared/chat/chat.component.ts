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

  constructor(
    private chatService: ChatService,
  ) { }

  ngOnInit() {

    this.chatService.getMessage()
      .subscribe(msg => {
        this.msgs.push(msg);
      }
    );
  }

  onSendMessage() {
    this.chatService.sendMessage({message: this.message});
    this.message = '';
  }

}
