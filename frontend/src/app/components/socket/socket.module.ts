import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketComponent } from './socket.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    SocketComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    SocketComponent
  ]
})
export class SocketModule { }
