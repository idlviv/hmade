import { Component, OnInit, Injector } from '@angular/core';
// import { UserService } from '../../../services/user.service';
// import { IUser } from '../../../interfaces/user-interface';
// import { config } from '../../../app.config';
// import { MatDialog, MatSnackBar } from '@angular/material';
// import { Router } from '@angular/router';
// import { UserDialogComponent } from '../user-dialog/user-dialog.component';
// import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
// import { of } from 'rxjs';
// import { mergeMap } from 'rxjs/operators';
import { ProfileComponent } from 'ng-user-man';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent extends ProfileComponent implements OnInit {

  // config = config;
  // user: IUser;
  // processing: string;
  // changeAvatarForm: FormGroup;
  // editAvatar = false;
  // previewAvatarUrl;
  // processingChangeAvatar = false;
  // verificationSent = false;

  constructor(
    protected injector: Injector,
    // private userService: UserService,
    // private matSnackBar: MatSnackBar,
    // private router: Router,
    // public dialog: MatDialog,
  ) {
    super(injector);
  }

  ngOnInit() {
    super.ngOnInit();
    // this.getProfile();

    // this.changeAvatarForm = new FormGroup({
    //   file : new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(4),
    //   ]),
    // });
  }

  // allowTo(permitedRole: string): boolean {
  //   return this.userService.allowTo(permitedRole);
  // }

  // restrictTo(restrictedRoles: string[]): boolean {
  //   return this.userService.restrictTo(restrictedRoles);
  // }

  // onVerificationSend() {
  //   this.verificationSent = true;
  //   this.processing = 'verification';
  //   this.userService.userEmailVerification()
  //     .subscribe((result) => {
  //       this.processing = '';
  //       this.matSnackBar.open(result, '',
  //         {duration: 3000});
  //     },
  //       (err) => {
  //         this.processing = '';
  //         this.matSnackBar.open(err.error || 'Помилка', '',
  //           {duration: 3000, panelClass: 'snack-bar-danger'});
  //       }

  //     );
  // }

  // onSubmitChangeAvatarForm() {
  //   this.processingChangeAvatar = true;
  //   this.userService.userEditAvatar(this.changeAvatarForm.get('file').value)
  //     .subscribe(result => {
  //       this.matSnackBar.open(result, '',
  //           {duration: 3000});
  //       this.getProfile();
  //       this.previewAvatarUrl = null;
  //       this.processingChangeAvatar = false;
  //       this.editAvatar = false;
  //     },
  //       err =>
  //         this.matSnackBar.open(err.error.message || 'Помилка', '',
  //           {duration: 3000, panelClass: 'snack-bar-danger'})
  //     );
  // }

  // changeAvatar(event) {
  //   this.editAvatar = true;
  //   const checkFile = this.userService.checkFile(event.target);

  //   if (!checkFile.success) {
  //     this.cancelChangeAvatar();
  //     this.matSnackBar.open(checkFile.message || 'Помилка', '',
  //       {duration: 3000, panelClass: 'snack-bar-danger'});
  //   } else {
  //     this.changeAvatarForm.get('file').setValue(event.target.files[0]);

  //     const reader = new FileReader();

  //     reader.addEventListener('load', (readerEvent: any) => {
  //       // .jpg, .jpe, .jpeg, .bmp, .webp, .png
  //       this.previewAvatarUrl = readerEvent.target.result;
  //     });

  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }

  // cancelChangeAvatar() {
  //   this.changeAvatarForm.get('file').setValue(null);
  //   this.editAvatar = false;
  //   this.previewAvatarUrl = null;
  // }

  // getProfile(): void {
  //   this.userService.userGetProfile()
  //     .subscribe(
  //       user => {
  //         this.user = user;
  //       },
  //       err => {
  //         this.matSnackBar.open(err.error, '',
  //           {duration: 3000, panelClass: 'snack-bar-danger'});
  //         this.router.navigate(['/user', 'login']);
  //       }
  //     );
  // }

  // openDialog(object): void {

  //   const dialogRef = this.dialog.open(UserDialogComponent, {
  //     width: '400px',
  //     data: object,
  //   });

  //   dialogRef.afterClosed().pipe(
  //     mergeMap(result => {
  //       if (result) {
  //         return this.userService.userEdit(result);
  //       } else {
  //         return of(null);
  //       }
  //     })
  //   )
  //     .subscribe(result => {
  //         this.processing = null;
  //         if (!result) {
  //           // didn't get data from dialog
  //           return;
  //         } else {
  //           this.matSnackBar.open(result, '',
  //             {duration: 3000});
  //           this.getProfile();
  //         }
  //       },
  //       err => {
  //         this.processing = null;
  //         this.matSnackBar.open(err.error.message || 'Помилка', '',
  //           {duration: 3000, panelClass: 'snack-bar-danger'});
  //       }
  //     );
  // }

  // makePasswordObject() {
  //   this.processing = 'password';
  //   return {
  //     payload: [{
  //       name: 'password',
  //       label: 'Новий пароль',
  //       type: 'password',
  //       icon: 'lock_outline',
  //       validators: [
  //         {
  //           name: 'length',
  //           message: 'Довжина повинна бути від 6 до 15 символів'
  //         },
  //         {
  //           name: 'pattern',
  //           message : 'Використовуйте тільки латинські символи та цифри'
  //         },
  //       ],
  //     },
  //     {
  //       name: 'passwordConfirm',
  //       label: 'Підтвердіть пароль',
  //       type: 'password',
  //       icon: '',
  //       validators: [
  //         {
  //           name: 'require',
  //           message : 'Це поле не може бути пустим'
  //         },
  //         {
  //           name: 'match',
  //           message : 'Пароль не збігається'
  //         },
  //       ]
  //     },
  //     {
  //       name: 'passwordCurrent',
  //       label: 'Діючий пароль',
  //       type: 'password',
  //       icon: '',
  //       validators: [
  //         {
  //           name: 'require',
  //           message : 'Це поле не може бути пустим'
  //         }
  //       ],
  //     }],

  //     initForm: function(): FormGroup {
  //       return new FormGroup({
  //         password: new FormControl('', [
  //           Validators.required,
  //           Validators.minLength(6),
  //           Validators.maxLength(15),
  //           Validators.pattern('[a-zA-Z0-9]+'),
  //         ]),
  //         passwordConfirm: new FormControl('', [
  //           Validators.required,
  //         ]),
  //         passwordCurrent: new FormControl('', [
  //           Validators.required,
  //         ]),
  //       },
  //         function matchPassword(abstractControl: AbstractControl) {
  //         const password = abstractControl.get('password').value;
  //         const passwordConfirm = abstractControl.get('passwordConfirm').value;
  //           if (password === passwordConfirm) {
  //           abstractControl.get('passwordConfirm').setErrors(null);
  //           return null;
  //         } else {
  //           abstractControl.get('passwordConfirm').setErrors({mismatch: true});
  //           return null;
  //         }
  //       });
  //     }
  //   };
  // }

  // // makeEmailObject() {
  // //   this.processing = 'email';
  // //   const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  // //   return {
  // //     payload: [{
  // //       name: 'email',
  // //       label: 'Email',
  // //       type: 'email',
  // //       icon: 'mail_outline',
  // //       oldValue: this.user.email,
  // //       validators: [
  // //         {
  // //           name: 'length',
  // //           message: 'Довжина повинна бути від 5 до 30 символів'
  // //         },
  // //         {
  // //           name: 'pattern',
  // //           message: 'Введіть правільну адресу'
  // //         }
  // //       ],
  // //       },
  // //       {
  // //       name: 'passwordCurrent',
  // //       label: 'Введіть пароль',
  // //       type: 'password',
  // //       icon: '',
  // //       validators: [
  // //         {
  // //           name: 'require',
  // //           message : 'Це поле не може бути пустим'
  // //         }
  // //       ],
  // //     }],
  // //     initForm: function () {
  // //       return new FormGroup({
  // //         email: new FormControl('', [
  // //           Validators.required,
  // //           Validators.minLength(5),
  // //           Validators.maxLength(30),
  // //           Validators.pattern(emailPattern),
  // //         ]),
  // //         passwordCurrent: new FormControl('', [
  // //           Validators.required,
  // //         ]),
  // //       });
  // //     },
  // //   };
  // // }

  // makeNameObject() {
  //   this.processing = 'name';
  //   return {
  //     payload: [{
  //       name: 'name',
  //       label: 'Ім\'я',
  //       type: '',
  //       icon: 'perm_identity',
  //       oldValue: this.user.name,
  //       validators: [
  //         {
  //           name: 'length',
  //           message: 'Довжина повинна бути від 2 до 20 символів'
  //         },
  //         {
  //           name: 'pattern',
  //           message: 'Використовуйте букви і цифри'
  //         }
  //       ],
  //     },
  //       {
  //         name: 'passwordCurrent',
  //         label: 'Введіть пароль',
  //         type: 'password',
  //         icon: '',
  //         validators: [
  //           {
  //             name: 'require',
  //             message : 'Це поле не може бути пустим'
  //           }
  //         ],
  //       }],
  //     initForm: function () {
  //       return new FormGroup({
  //         name: new FormControl('', [
  //           Validators.minLength(2),
  //           Validators.maxLength(20),
  //           Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
  //         ]),
  //         passwordCurrent: new FormControl('', [
  //           Validators.required,
  //         ]),
  //       });
  //     },
  //   };
  // }

  // makeSurnameObject() {
  //   this.processing = 'surname';
  //   return {
  //     payload: [{
  //       name: 'surname',
  //       label: 'Прізвище',
  //       type: '',
  //       icon: 'perm_identity',
  //       oldValue: this.user.surname,
  //       validators: [
  //         {
  //           name: 'length',
  //           message: 'Довжина повинна бути від 2 до 20 символів'
  //         },
  //         {
  //           name: 'pattern',
  //           message: 'Використовуйте букви і цифри'
  //         }
  //       ],
  //     },
  //       {
  //         name: 'passwordCurrent',
  //         label: 'Введіть пароль',
  //         type: 'password',
  //         icon: '',
  //         validators: [
  //           {
  //             name: 'require',
  //             message : 'Це поле не може бути пустим'
  //           }
  //         ],
  //       }],
  //     initForm: function () {
  //       return new FormGroup({
  //         surname: new FormControl('', [
  //           Validators.minLength(2),
  //           Validators.maxLength(20),
  //           Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
  //         ]),
  //         passwordCurrent: new FormControl('', [
  //           Validators.required,
  //         ]),
  //       });
  //     },
  //   };
  // }
}
