import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, SimpleChange, EventEmitter } from '@angular/core';
import { config } from '../../../app.config';
import { IUser } from 'src/app/interfaces/user-interface';
import { NgUserManService } from 'ng-user-man';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { IConfirmPopupData } from 'src/app/interfaces/interface';
import { ConfirmPopupComponent } from '../../shared/confirm-popup/confirm-popup.component';
import { McService } from 'src/app/services/mc.service';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-mcs-item-brief',
  templateUrl: './mcs-item-brief.component.html',
  styleUrls: ['./mcs-item-brief.component.scss']
})
export class McsItemBriefComponent implements OnInit, OnChanges {

  user: IUser;
  config = config;

  @Input() mc;
  @Input() parentCategory_id;
  @Output() refreshMcs = new EventEmitter<boolean>();

  constructor(
    private ngUserManService: NgUserManService,
    private mcService: McService,
    private router: Router,
    public dialog: MatDialog,
    private matSnackBar: MatSnackBar,
    public media: MediaObserver,
  ) { }

  ngOnInit() {
  }

  allowTo(permitedRole): boolean {
    return this.ngUserManService.allowTo(permitedRole);
  }

  ngOnChanges(changes: SimpleChanges) {
    const productChange: SimpleChange = changes.mc;
    if (productChange) {
    }
  }

  goToMcsItemDetail(_id) {
    console.log(`goToMcsItemDetail ${_id}`);
    this.router.navigate(['/mcs', 'show', _id]);
  }

  editMcsItem(_id) {
    console.log(`editMcsItem ${_id}`);
    this.router.navigate(['/dashboard', 'mc', 'edit', _id]);
  }

  deleteMcsItem(_id: string, nmae: string): void {
    console.log(`deleteMcsItem ${_id}`);
    const confirmObject = <IConfirmPopupData>{
      message: `Дійсно видалити майстерклас: ${name} ?`,
      payload: {_id}
    };

    const dialogRef = this.dialog.open(ConfirmPopupComponent, {
      data: confirmObject,
      // panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed()
      .pipe(
        mergeMap(result => {
          if (result && result.choise) {
            return this.mcService.deleteMc(result.payload._id);
          }
          return of(null);
        })
      )
      .subscribe(result => {
        if (result) {
          this.refreshMcs.emit();
          this.matSnackBar.open(result, '',
            {duration: 3000, panelClass: 'snack-bar-danger'})
        }
      },
        err => this.matSnackBar.open(err.error.message || 'Сталася помилка', '',
          {duration: 3000, panelClass: 'snack-bar-danger'})
      );
  }

}
