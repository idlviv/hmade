import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-redirected-from-oauth',
  templateUrl: './redirected-from-oauth.component.html',
  styleUrls: ['./redirected-from-oauth.component.scss']
})
export class RedirectedFromOauthComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private matSnackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params) => {
          const token = params.token;
          this.userService.userLocalLogin(token);
          this.matSnackBar.open('Logged in', '', {duration: 3000});
          this.router.navigate(['/user', 'profile']);
        },
      (err) => console.log('err', err)
      );
  }

}
