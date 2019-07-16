import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.scss']
})
export class SocketComponent implements OnInit {
  showChat = true;
  initChat = true;

  constructor() { }

  ngOnInit() {
  }

  onStartChat() {
    this.showChat = true;
    this.initChat = true;
  }

  onDisconnectChat() {
    this.initChat = false;
    this.showChat = false;
  }

  onHideChat() {
    this.showChat = false;
  }
}
