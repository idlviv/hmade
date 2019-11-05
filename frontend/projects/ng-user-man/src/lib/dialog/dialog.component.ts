import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  userEditForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
    this.userEditForm = this.data.initForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.dialogRef.close({
      name: this.data.payload[0].name,
      value: this.userEditForm.get(this.data.payload[0].name).value,
      password: this.data.payload[0].name === 'password' ?
        this.userEditForm.get(this.data.payload[2].name).value :
        this.userEditForm.get(this.data.payload[1].name).value
    });
  }

}
