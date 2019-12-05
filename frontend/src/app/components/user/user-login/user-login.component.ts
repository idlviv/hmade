import { Component, OnInit, Injector } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { LoginComponent } from 'ng-user-man';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent extends LoginComponent implements OnInit {

  constructor(
    protected injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
