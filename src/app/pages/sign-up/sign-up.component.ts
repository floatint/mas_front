import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppConstants } from '../../app.constants';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../entities/user';
import { DialogsService } from '../../services/ui/dialogs.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpPageComponent implements OnInit {

  public emailPattern: string = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$';
  signUpError: string;
  form: FormGroup;
  private formSubmitAttempt: boolean = false;

  constructor(private fb: FormBuilder,
              private appConsts: AppConstants,
              private authService: AuthService,
              private dialogs: DialogsService,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    //TODO: setup form 
    this.form = this.fb.group({
      userEmail: [
        '', 
        [Validators.required,
        Validators.pattern(this.emailPattern)]
      ],
      userPass: ['', Validators.required],
      userName: ['', Validators.required]
    });
  }

  //check input field
  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
 }

  onSignUp() {
    //if form valid
    if (this.form.valid) {
      //sign up
      this.authService.signUp(this.form.get('userName').value,
                              this.form.get('userEmail').value, 
                              this.form.get('userPass').value)
          .subscribe((data: User) => {
            //store data
            let email = this.form.get('userEmail').value;
            let pass = this.form.get('userPass').value;
            window.localStorage.setItem(this.appConsts.USER_TOKEN, window.btoa(email + ':' + pass));
            window.localStorage.setItem(this.appConsts.USER_MODEL, data.toString());
            //next page
            if (window.localStorage.getItem(this.appConsts.ORDER_ANALYSIS_ID) != null)
              this.router.navigate(['/date']);
            else
              this.router.navigate(['/order']);
          },
          err => {
            switch (err.status) {
              case 400:
                this.dialogs.showMessage(null, "Пользователь с таким email уже существует");
                break;
              case 0:
                this.dialogs.showMessage(null, "Сервер приложений недоступен");
                break;
              default:
                this.dialogs.showMessage(null, "Внутренняя ошибка сервера. Код " + err.status);
            }
          });
    } else {
      this.formSubmitAttempt = true;
      this.dialogs.showMessage(null, "Введите данные");
    }
  }

  //go to prev page
  onBack() {
    this.location.back();    
  }

}
