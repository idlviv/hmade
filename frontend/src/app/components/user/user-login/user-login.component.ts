import { Component, OnInit, Injector } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { SharedService } from 'ng-user-man';
declare const gapi: any;
import { LoginComponent } from 'ng-user-man';
import { NgUserManService } from 'ng-user-man';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent extends LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    protected sharedService: SharedService,
    protected matSnackBar: MatSnackBar,
    protected router: Router,
    protected injector: Injector,
    protected ngUserManService: NgUserManService,
  ) {
    super(
      matSnackBar,
      ngUserManService,
      sharedService,
      injector,
      router
      );
   }

  ngOnInit() {
    super.ngOnInit();
  }
}
