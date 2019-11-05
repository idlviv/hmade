import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../interfaces/user-interface';
import { Router } from '@angular/router';
import { CatalogService } from '../../../services/catalog.service';
import { ICatalog } from '../../../interfaces/catalog-interface';
import { MatDrawerContainer, MatMenuTrigger } from '@angular/material';
import { config } from '../../../app.config';
import { SharedService } from 'ng-user-man';
import { Observable } from 'rxjs';
import { SocialService } from 'src/app/services/social.service';
import { NgUserManService } from 'ng-user-man';

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
    private sharedService: SharedService,
    private ngUserManService: NgUserManService,
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
    this.sharedService.getSharingEvent()
      .subscribe(event => {
        if (event[0] === 'closeSidenav') {
          this.sidenav.close();
        // } else if (event[0] === 'userChangeStatusEmitter') {
        //   this.getUnreadedCommentsLength();
        }
      });

    this.sharedService.getEventToReloadComments()
      .subscribe(event => this.getUnreadedCommentsLength());

    this.getUnreadedCommentsLength();

    // get main menu items
    this.catalogService.getMainMenu()
      .subscribe(menuItems => {
          this.mainMenuCommonItems = menuItems.data.common;
          this.mainMenuSystemItems = menuItems.data.system;
        },
        err => {
          this.error = err;
          console.log(err);
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
    this.ngUserManService.userLogout()
      .subscribe(message => {
        // this.ngUserManService.logging();
        this.sharedService.sharingEventToReloadComments();
        // this.sharedService.sharingEvent(['userChangeStatusEmitter']);
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
    this.ngUserManService.userEditUnsecure({name: 'commentsReadedTill'})
    .subscribe(
      res => {
        this.sharedService.sharingEventToReloadComments();
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
    this.user = this.ngUserManService.userCookieExtractor();
    return this.ngUserManService.allowTo(permitedRole);
  }

  restrictTo(restrictedRoles: string[]): boolean {
    this.user = this.ngUserManService.userCookieExtractor();
    return this.ngUserManService.restrictTo(restrictedRoles);
  }

}
