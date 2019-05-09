import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IChatMessage } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(private socket: Socket) { }

  sendMessage(msg: IChatMessage) {
    console.log('msg', msg);
    this.socket.emit('messageToServer', msg);
  }

  getMessage(): Observable<IChatMessage> {
    return this.socket
      .fromEvent<IChatMessage>('messageFromServer');

      // .pipe(
      //   map(data => {
      //     console.log(data);
      //     return data;
      //   })
      // );
  }
}
