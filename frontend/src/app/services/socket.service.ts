import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
import { loadDirective } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private host = 'http://localhost:8081';
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

  reconnect() {
    this.connect();
  }

  connected() {
    console.log('connected');
  }

  disconnected() {
    console.log('disconnected');
  }

  // emitters
  emit(eventName: string, message: any) {
    return new Observable<any>(observer => {
      this.socket.emit(eventName, message, function (success: boolean) {
        if (success) {
          // Успех
          observer.next(success);
        } else {
          // Что-то пошло не так
          observer.error(success);
        }
        observer.complete();
      });
    });
  }

  on(eventName) {
    return new Observable<any>(observer => {
      this.socket.off(eventName); // Если такое событие уже существует
      this.socket.on(eventName, (data) => {
        observer.next(data);
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
