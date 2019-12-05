import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { McService } from 'src/app/services/mc.service';
import { IMc } from 'src/app/interfaces/interface';
import { config } from 'src/app/app.config';
import { NgUserManService, UserService } from 'ng-user-man';
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
  mc_id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mcService: McService,
    private ngUserManService: NgUserManService,
    private userService: UserService,
    private socialService: SocialService,
  ) { }

  ngOnInit() {

    this.route.params.pipe(
      mergeMap(
        (params) => {
          this.mc_id = params._id;
          return this.mcService.getMcByIdAndIncViews(params._id);
        })
    )
      .subscribe((result) => {
        console.log('mc', result);
        this.mc = result;
      },
        (err) => console.log('err', err)
      );

    this.ngUserManService.getEventToReloadComments()
      .subscribe(event => this.getMcById());
  }

  getMcById() {
    this.mcService.getMcById(this.mc_id)
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
              this.mc = result;
            }
          },
          (err) => console.log('err', err)
        );

    }
  }

}
