import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IChatMessage } from '../interfaces/interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  joined = false;
  room: string;

  constructor(private socket: Socket) { }

  // emitters
  guestName(guestName) {
    this.socket.emit('guestName', guestName);
  }

  // listeners
  onMessage(): Observable<any> {
    return this.socket
      .fromEvent<any>('message')
      .pipe(
        map(data => {
          console.log('msg from server', data);
          return data;
        })
      );
  }

  onGetGuestName(): Observable<any> {
    return this.socket
      .fromEvent<any>('getGuestName')
      .pipe(
        map(data => {
          console.log('getGuestName', data);
          return data;
        })
      );
  }



  // connect() {
  //   this.socket.connect();
  //   console.log('connected from front');
  // }

  // onConnect() {
  //   return this.socket
  //     .fromEvent<IChatMessage>('connect')
  //     .pipe(
  //       map(data => {
  //         console.log('connect', data);
  //         return data;
  //       })
  //     );
  // }

  // onDisconnect() {
  //   return this.socket
  //     .fromEvent<IChatMessage>('disconnect')
  //     .pipe(
  //       map(data => {
  //         console.log('disconnect', data);
  //         return data;
  //       })
  //     );
  //   // this.socket.disconnect();
  // }

  // sendMessage(msg: IChatMessage) {
  //   console.log('msg to server', msg);
  //   // if (!this.joined) {
  //   //   this.join();
  //   // }
  //   this.socket.emit('messageToServer', msg);
  // }

  // joinToManager(manager_id) {
  //   this.socket.emit('joinToManager', manager_id);
  // }

  // onJoinToManager() {
  //   return this.socket
  //     .fromEvent<IChatMessage>('joinToManager')
  //     .pipe(
  //       map(requestFromUser => {
  //         console.log('requestFromUser', requestFromUser);
  //         return requestFromUser;
  //       })
  //     );
  // }
  
  // getMessage(): Observable<IChatMessage> {
  //   return this.socket
  //     .fromEvent<IChatMessage>('messageFromServer')
  //     .pipe(
  //       map(data => {
  //         console.log('msg from server', data);
  //         return data;
  //       })
  //     );
  // }

  // changeStatus(): Observable<[object]> {
  //   return this.socket
  //     .fromEvent<[object]>('changeStatus')
  //     .pipe(
  //       map(data => {
  //         console.log('changeStatus', data);
  //         return data;
  //       })
  //     );
  // }
}
