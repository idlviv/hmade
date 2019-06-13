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


  connect() {
    this.socket.connect();
    console.log('connected from front');
  }
  
  // emitters
  guestName(guestName) {
    this.socket.emit('guestName', guestName);
  }

  joinToManager(manager_id) {
    this.socket.emit('joinToManager', manager_id);
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

  onActiveManagers(): Observable<any> {
    return this.socket
      .fromEvent<any>('activeManagers')
      .pipe(
        map(data => {
          console.log('activeManagers', data);
          return data;
        })
      );
  }

  onDisconnect() {
    return this.socket
      .fromEvent<any>('disconnect')
      .pipe(
        map(data => {
          console.log('disconnect', data);
          this.socket.disconnect();
          return data;
        })
      );
  }

    onJoinToManager() {
    return this.socket
      .fromEvent<any>('joinToManager')
      .pipe(
        map(data => {
          console.log('joinToManager', data);
          return data;
        })
      );
  }



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



  // sendMessage(msg: IChatMessage) {
  //   console.log('msg to server', msg);
  //   // if (!this.joined) {
  //   //   this.join();
  //   // }
  //   this.socket.emit('messageToServer', msg);
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
