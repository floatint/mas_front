import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AppConstants } from '../../app.constants';
import { AuthService } from '../../services/auth/auth.service';
import { DialogsService } from '../../services/ui/dialogs.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInPageComponent implements OnInit {

  public emailPattern: string = '^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$';
  signInError: string;
  emailError: string;
  passError: string;
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
      userPass: ['', Validators.required]
    });
  }

  //check input field
  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
 }

  onSignIn() {
    //if form valid
    if (this.form.valid) {
      //sign in
      this.authService.signIn(this.form.get('userEmail').value, this.form.get('userPass').value);
      //if fail
      if (!this.authService.isLoggedIn) {
        this.dialogs.showMessage(null, 'Неверный email или пароль');
      } else { //success
        if (window.localStorage.getItem(this.appConsts.ORDER_ANALYSIS_ID) != null) {
          this.router.navigate(['/date']);
        } else {
          this.router.navigate(['/order']);
        }
      }
    } else {
      this.formSubmitAttempt = true;
      this.dialogs.showMessage(null, "Введите данные");
    }
  }

  //go to prev page
  onBack() {
    //if  order click -> sign-in
    window.localStorage.removeItem(this.appConsts.ORDER_ANALYSIS_ID);
    this.location.back();    
  }

}
