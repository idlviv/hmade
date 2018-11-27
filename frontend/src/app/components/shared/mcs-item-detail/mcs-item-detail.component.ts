import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { McService } from 'src/app/services/mc.service';
import { IMc } from 'src/app/interfaces/interface';
import { config } from 'src/app/app.config';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/user-interface';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-mcs-item-detail',
  templateUrl: './mcs-item-detail.component.html',
  styleUrls: ['./mcs-item-detail.component.scss']
})
export class McsItemDetailComponent implements OnInit {
  config = config;
  mc: IMc;
  user: IUser;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mcService: McService,
    private userService: UserService,
    private socialService: SocialService,
  ) { }

  ngOnInit() {

    this.userService.getUserLocal()
      .subscribe(
        (user) => {
          this.user = user;
        },
        (err) => console.log('err', err)
      );

    this.route.params.pipe(
      mergeMap(
        (params) => {
          return this.mcService.getMcByIdAndIncViews(params._id);
        })
      )
      .subscribe((result) => {
        this.mc = result;
      },
      (err) => console.log('err', err)
      );
  }

  allowTo(permitedRole): boolean {
    return this.userService.allowTo(permitedRole);
  }

  goToMcs() {
    this.router.navigate(['/mcs', 'ch']);
  }

  onLike(action: boolean, permission: boolean): void {
    if (!permission) {
      return;
    } else {
      // action is true for like, is false for dislike
    const parent_id = this.mc._id;
    const parentCategory = 'mc';
    this.socialService.likesSet(parent_id, parentCategory, action)
      .pipe(
        mergeMap(
          (result) => {
            console.log('result', result);
              if (result) {
                return this.mcService.getMcById(parent_id);
              } else {
                return of(null);
              }
            }
        )
        )
      .subscribe(
        (result) => {
          if (result) {
            console.log('result2', result);
            this.mc = result;
          }
        },
        (err) => console.log('err', err)
      );

    }
  }

}
