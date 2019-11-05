import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { DialogComponent } from 'ng-user-man';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent extends DialogComponent implements OnInit {
  // userEditForm: FormGroup;

  constructor(

    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super(
      dialogRef,
      data
      );
   }

  ngOnInit() {
    super.ngOnInit();
    // this.userEditForm = this.data.initForm();
  }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  // onSubmit() {
  //   this.dialogRef.close({
  //     // request: [
  //     //   {
  //     //     [this.data.payload[0].name]: this.userEditForm.get(this.data.payload[0].name).value
  //     //   }
  //     // ],
  //     name: this.data.payload[0].name,
  //     value: this.userEditForm.get(this.data.payload[0].name).value,
  //     password: this.data.payload[0].name === 'password' ?
  //       this.userEditForm.get(this.data.payload[2].name).value :
  //       this.userEditForm.get(this.data.payload[1].name).value
  //   });
  // }
}
