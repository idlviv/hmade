import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { loadDirective } from '@angular/core/src/render3/instructions';
import { config } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private host = config.host;
  private socket: any;

  constructor() { }

  initialConnection(): Observable<any> {
    this.socket = io(this.host);
    return new Observable<any>((observer) => {
      this.socket.on('connect', () => observer.next(true));
      this.socket.on('disconnect', () => observer.next(false));
      this.socket.on('error', (err: string) => observer.error(err));
      this.socket.on('connect_error', (err: any) => observer.error(err.message));
    });
  }

  connect() {
    this.socket.connect();
  }
  disconnect() {
    this.socket.disconnect();
  }

  // emitter
  emit(eventName: string, message: any): Observable<boolean> {
    return new Observable<boolean>(observer => {
      this.socket.emit(eventName, message, function (success: boolean) {
        if (success) {
          observer.next(success);
        } else {
          observer.error(success);
        }
        observer.complete();
      });
    });
  }

  // listener
  on(eventName: string): Observable<any> {
    return new Observable<any>(observer => {
      // if event already exist
      this.socket.off(eventName);
      this.socket.on(eventName, (message: any) => {
        observer.next(message);
      });
    });
  }

  // guestName(guestName) {
  //   this.socket.emit('guestName', guestName);
  // }

  // joinToManager(manager_id) {
  //   this.socket.emit('joinToManager', manager_id);
  // }

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
