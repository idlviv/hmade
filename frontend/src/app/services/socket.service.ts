import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private host = 'http://localhost:8081';
  private socket: any;

  constructor() { }

  initialConnection() {
    this.socket = io(this.host);
    this.socket.on('connect', () => this.connected());
    this.socket.on('disconnect', () => this.disconnected());
    this.socket.on('error', (error: string) => {
      console.log(`ERROR: "${error}" (${this.host})`);
    });
  }

  connect() {
    this.socket.connect();
  }
  disconnect() {
    this.socket.disconnect();
  }

  connected() {
    console.log('connected');
  }

  disconnected() {
    console.log('disconnected');
  }

  // emitters
  guestName(guestName) {
    this.socket.emit('guestName', guestName);
  }

  joinToManager(manager_id) {
    this.socket.emit('joinToManager', manager_id);
  }

  // listeners
  // onMessage(): Observable<any> {
  //   return this.socket
  //     .fromEvent<any>('message')
  //     .pipe(
  //       map(data => {
  //         console.log('msg from server', data);
  //         return data;
  //       })
  //     );
  // }

  // onGetGuestName(): Observable<any> {
  //   return this.socket
  //     .fromEvent<any>('getGuestName')
  //     .pipe(
  //       map(data => {
  //         console.log('getGuestName', data);
  //         return data;
  //       })
  //     );
  // }

  // onActiveManagers(): Observable<any> {
  //   return this.socket
  //     .fromEvent<any>('activeManagers')
  //     .pipe(
  //       map(data => {
  //         console.log('activeManagers', data);
  //         return data;
  //       })
  //     );
  // }

  // onDisconnect() {
  //   return this.socket
  //     .fromEvent<any>('disconnect')
  //     .pipe(
  //       map(data => {
  //         console.log('disconnect', data);
  //         this.socket.disconnect();
  //         return data;
  //       })
  //     );
  // }

  //   onJoinToManager() {
  //   return this.socket
  //     .fromEvent<any>('joinToManager')
  //     .pipe(
  //       map(data => {
  //         console.log('joinToManager', data);
  //         return data;
  //       })
  //     );

}
