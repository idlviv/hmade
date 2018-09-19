import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../interfaces/user-interface';
import { Router } from '@angular/router';
import { CatalogService } from '../../../services/catalog.service';
import { ICatalog } from '../../../interfaces/catalog-interface';
import { MatDrawerContainer, MatMenuTrigger } from '@angular/material';
import { config } from '../../../app.config';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

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
  ) { }

  ngOnInit() {

    this.sharedService.getSharingEvent()
      .subscribe(event => {
        if (event[0] === 'closeSidenav') {
          this.sidenav.close();
        }
      });

    // initial subscribe on user
    this.userService.getUserLocal()
      .subscribe(user => this.user = user);


    // initial login user, token will be taken from localStorage
    this.userService.userLocalLogin(null);

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

  userLocalLogout() {
    this.userService.userLocalLogout();
    this.router.navigate(['/user', 'login']);
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

}
