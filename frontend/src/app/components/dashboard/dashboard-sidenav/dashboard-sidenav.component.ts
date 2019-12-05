import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService, ICatalog } from 'ng-user-man';

@Component({
  selector: 'app-dashboard-sidenav',
  templateUrl: './dashboard-sidenav.component.html',
  styleUrls: ['./dashboard-sidenav.component.scss']
})
export class DashboardSidenavComponent implements OnInit {
  dashboardSidenavItems: ICatalog[];

  constructor(
    private router: Router,
    private catalogService: CatalogService,
  ) { }

  ngOnInit() {
    this.catalogService.getChildren('dashboard')
      .subscribe((menuItems: ICatalog[]) => {
        this.dashboardSidenavItems = menuItems;
      });
  }

  onRouting(link) {
    this.router.navigate(['/dashboard', link]);
  }

}
