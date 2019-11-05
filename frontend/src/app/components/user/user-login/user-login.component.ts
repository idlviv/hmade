import { Component, OnInit, Injector } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { SharedService } from 'ng-user-man';
import { LoginComponent } from 'ng-user-man';
// import { NgUserManService } from 'ng-user-man';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent extends LoginComponent implements OnInit {

  constructor(
    // protected sharedService: SharedService,
    // protected matSnackBar: MatSnackBar,
    // protected router: Router,
    protected injector: Injector,
    // protected ngUserManService: NgUserManService,
  ) {
    super(
      // matSnackBar,
      // ngUserManService,
      // sharedService,
      injector,
      // router
    );
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
