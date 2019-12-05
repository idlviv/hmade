import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { IUser } from '../../../interfaces/user-interface';
import { Router } from '@angular/router';
import { MatDrawerContainer, MatMenuTrigger } from '@angular/material';
import { config } from '../../../app.config';
import { Observable } from 'rxjs';
import { SocialService } from 'src/app/services/social.service';
import { NgUserManService, UserService, CatalogService, ITopMenu, ICatalog } from 'ng-user-man';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterViewInit {

  config = config;
  user: IUser;
  mainMenuCommonItems: ICatalog[];
  mainMenuSystemItems: ICatalog[];
  @ViewChild('settingsMenuTrigger', { static: false }) settingsMenuTrigger: MatMenuTrigger;
  @ViewChild('settingsSideMenuTrigger', { static: false }) settingsSideMenuTrigger: MatMenuTrigger;
  @ViewChild('sidenav', { static: false }) sidenav: MatDrawerContainer;

  category: any;
  category_id: string;
  hierarchyCategory = [];
  unreadedCommentsLength: number;
  error: any;

  constructor(
    private ngUserManService: NgUserManService,
    private userService: UserService,
    private router: Router,
    private catalogService: CatalogService,
    private cd: ChangeDetectorRef,
    private socialService: SocialService,
  ) { }


  ngAfterViewInit() {
    // Solve error ExpressionChangedAfterItHasBeenCheckedError
    // After redirection from auth2 signin (server) view changes (*ngIf)
    // was user=null becomes user which logged
    this.cd.detectChanges();
  }

  ngOnInit() {
    this.ngUserManService.getSharingEvent()
      .subscribe(event => {
        if (event[0] === 'closeSidenav') {
          this.sidenav.close();
          // } else if (event[0] === 'userChangeStatusEmitter') {
          //   this.getUnreadedCommentsLength();
        }
      });

    this.ngUserManService.getEventToReloadComments()
      .subscribe(event => this.getUnreadedCommentsLength());

    this.getUnreadedCommentsLength();

    // get main menu items
    this.catalogService.getTopMenu()
      .subscribe((menuItems: ITopMenu) => {
        this.mainMenuCommonItems = menuItems.common;
        this.mainMenuSystemItems = menuItems.system;
      },
        (err: HttpErrorResponse) => {
          console.log('err', err.error.message);
        });
  }

  getUnreadedCommentsLength() {
    if (this.allowTo('user')) {
      this.socialService.getUnreadedCommentsLength()
        .subscribe(
          result => this.unreadedCommentsLength = result,
          err => console.log('err', err)
        );
    }
  }

  userLogout() {
    this.userService.userLogout()
      .subscribe(message => {
        this.ngUserManService.sharingEventToReloadComments();
        this.router.navigate(['/user', 'login']);
      },
        err => {
          console.log(err.error);
        });
  }

  markCommentsAsReaded() {
    if (!this.unreadedCommentsLength) {
      return;
    }
    this.userService.userEditUnsecure({ name: 'commentsReadedTill' })
      .subscribe(
        res => {
          this.ngUserManService.sharingEventToReloadComments();
        },
        err => console.log('err', err)
      );
  }

  showUnreadededComments() {
    console.log('showUnreadededComments');
    this.router.navigate(['/comments', 'unreaded-comments']);
  }

  onSettingsMenuMouseover() {
    this.settingsMenuTrigger.openMenu();
  }

  onSettingsMenuMouseleave() {
    this.settingsMenuTrigger.closeMenu();
  }

  onSettingsSideMenuMouseover() {
    this.settingsSideMenuTrigger.openMenu();
  }

  onSettingsSideMenuMouseleave() {
    this.settingsSideMenuTrigger.closeMenu();
  }

  allowTo(permitedRole: string): boolean {
    this.user = this.userService.userCookieExtractor();
    return this.userService.allowTo(permitedRole);
  }

  restrictTo(restrictedRoles: string[]): boolean {
    this.user = this.userService.userCookieExtractor();
    return this.userService.restrictTo(restrictedRoles);
  }

}
