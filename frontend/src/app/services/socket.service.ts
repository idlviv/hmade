import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { config } from '../app.config';
import { IChatMsg } from '../interfaces/interface';

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

  emit(eventName: string, msg: IChatMsg): Observable<boolean> {
    return new Observable<boolean>(observer => {
      // set timeout for message delivery
      const timeout = 4000;
      const timer = setTimeout(function () {
        observer.error(new Error(
          `not delivered, timeout error - eventName: ${eventName}, message: ${msg.message}`,
        ));
      }, timeout);
      console.log('emitter', eventName);
      this.socket.emit(eventName, msg, function (success: boolean) {
        // if callback from server received, then cancel timeout error
        clearTimeout(timer);
        if (success) {
          // server accepted message
          observer.next(success);
          observer.complete();
        } else {
          // server rejected message
          observer.error(
            new Error(
              `rejected from server - eventName: ${eventName}, message: ${msg.message}`,
          ));
        }
      });
    });
  }

  on(eventName: string): Observable<IChatMsg> {
    return new Observable<IChatMsg>(observer => {
      // if event already exist
      this.socket.off(eventName);
      this.socket.on(eventName, (msg: IChatMsg, callback: any) => {
        // send confirmation to server
        if (callback) {
          callback(true);
        }
        // pass message
        observer.next(msg);
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
