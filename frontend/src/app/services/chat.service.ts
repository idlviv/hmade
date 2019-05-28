import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IChatMessage } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  joined = false;
  room: string;

  constructor(private socket: Socket) { }

  sendMessage(msg: IChatMessage) {
    console.log('msg to server', msg);
    // if (!this.joined) {
    //   this.join();
    // }
    this.socket.emit('messageToServer', msg);
  }

  join(data = {room: 'common'}) {
    console.log('join to room', data.room);
    data.room = data.room || 'common';
    this.room = data.room;
    this.joined = true;
    this.socket.emit('join', data);
  }

  getMessage(): Observable<IChatMessage> {
    return this.socket
      .fromEvent<IChatMessage>('messageFromServer')

      .pipe(
        map(data => {
          console.log('msg from server', data);
          return data;
        })
      );
  }
}