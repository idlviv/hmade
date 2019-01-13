import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-redirection-with-token',
  templateUrl: './redirection-with-token.component.html',
  styleUrls: ['./redirection-with-token.component.scss']
})
export class RedirectionWithTokenComponent implements OnInit {

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
          // const token = params.token;
          this.userService.logging();
          this.router.navigate(['/user', 'profile']);
        },
      (err) => console.log('err', err)
      );
  }

}
