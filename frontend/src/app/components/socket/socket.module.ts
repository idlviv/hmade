import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketComponent } from './socket.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SocketComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SocketComponent
  ]
})
export class SocketModule { }
