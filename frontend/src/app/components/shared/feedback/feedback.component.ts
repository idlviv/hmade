import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IFeedback } from '../../../interfaces/interface';
import { Location } from '@angular/common';
import { NgUserManService } from 'ng-user-man';
import { MatSnackBar } from '@angular/material';
import { config } from '../../../app.config';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: IFeedback;
  @ViewChild('fForm', { static: false }) fFormDirective: FormGroupDirective;
  processing = false;
  config = config;

  constructor(
    private location: Location,
    private ngUserManService: NgUserManService,
    private matSnackBar: MatSnackBar,

  ) { }

  ngOnInit() {
    this.feedbackForm = new FormGroup({
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(500),
      ]),
      name: new FormControl('', [
        Validators.required,
      ]),
      contacts: new FormControl('', [
        Validators.required,
      ]),
      recaptcha: new FormControl('', [
        Validators.required
      ])
    });
  }

  onFeedbackFormSubmit() {
    this.processing = true;
    this.feedback = this.feedbackForm.value;
    this.ngUserManService.sendFeedbackMessage(this.feedback, this.feedbackForm.get('recaptcha').value)
      .subscribe(
        res => {
          // console.log('feedback ', res);
          this.matSnackBar.open('Повідомлення надіслано. Ми зв\'яжемось з вами найближчим часом', '',
            {duration: 5000});
          this.processing = false;
          this.resetForm();
          this.location.back();

        },
        err => {
          this.processing = false;
          this.matSnackBar.open('Сталася помилка. Повідомлення не надіслано. Спробуйте пізнше', '',
            {duration: 3000, panelClass: 'warn'});
          // console.log('feedback err ', err);
        }
        );
  }

  resetForm() {
    if (this.fFormDirective) {
      this.fFormDirective.resetForm();
    }
  }

}
