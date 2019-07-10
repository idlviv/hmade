import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.scss']
})
export class SocketComponent implements OnInit {
  showChat = false;

  constructor() { }

  ngOnInit() {
  }

  onStartChat() {
    this.showChat = true;
  }
}
