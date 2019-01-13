import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../interfaces/user-interface';
import { Router } from '@angular/router';
import { CatalogService } from '../../../services/catalog.service';
import { ICatalog } from '../../../interfaces/catalog-interface';
import { MatDrawerContainer, MatMenuTrigger } from '@angular/material';
import { config } from '../../../app.config';
import { SharedService } from '../../../services/shared.service';
import { Observable } from 'rxjs';

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
  @ViewChild('settingsMenuTrigger') settingsMenuTrigger: MatMenuTrigger;
  @ViewChild('settingsSideMenuTrigger') settingsSideMenuTrigger: MatMenuTrigger;
  @ViewChild('sidenav') sidenav: MatDrawerContainer;

  category: any;
  category_id: string;
  hierarchyCategory = [];

  constructor(
    private sharedService: SharedService,
    private userService: UserService,
    private router: Router,
    private catalogService: CatalogService,
    private cd: ChangeDetectorRef,
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
        }
      });

    // this.userService.getUserLocal()
    //   .subscribe((user) => {
    //     this.user = user;
    //     console.log('user');
    //   });

    // initial login user, token will be taken from localStorage
    // this.userService.userLocalLogin(null);

    // get main menu items
    this.catalogService.getMainMenu()
      .subscribe(menuItems => {
          this.mainMenuCommonItems = menuItems.data.common;
          this.mainMenuSystemItems = menuItems.data.system;
        },
        err => {
          console.log(err.error);
        });
  }

  userLogout() {
    this.userService.userLogout()
      .subscribe(message => {
        this.userService.logging();
        console.log(message);
        this.router.navigate(['/user', 'login']);

      },
    err => {
      console.log(err.error);
    });
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
