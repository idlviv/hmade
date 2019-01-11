import { Component, OnInit, Inject } from '@angular/core';
import { IImagePopUpData } from '../../../interfaces/interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { config } from '../../../app.config';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.scss']
})
export class ImagePopupComponent implements OnInit {
  config = config;
  cloudinaryOptions: string;

  constructor(
    public dialogRef: MatDialogRef<ImagePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IImagePopUpData
  ) { }

  ngOnInit() {
      if (!this.data.cloudinaryOptions) {
        this.data.cloudinaryOptions = '/c_fill,w_590,h_443,f_auto/';
      }

      if (!this.data.title) {
        this.data.title = '';
      }
  }

  onClose() {
    this.dialogRef.close();
  }

}
