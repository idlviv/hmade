import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IConfirmPopupData, IConfirmPopupChoise } from '../../../interfaces/interface';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent implements OnInit {
  confirmPopupChoise: IConfirmPopupChoise;

  constructor(
    public dialogRef: MatDialogRef<ConfirmPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IConfirmPopupData
  ) { }

  ngOnInit() {


  }
  onClose(choise: boolean, payload: object) {
    this.confirmPopupChoise = {choise, payload};
    this.dialogRef.close(this.confirmPopupChoise);
  }
}
