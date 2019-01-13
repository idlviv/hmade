import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NavigationStart, Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showHeader = false;

  constructor(
    private userService: UserService
   ) { }

  ngOnInit() {
    this.userService.logging();
  }
}
