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

}
