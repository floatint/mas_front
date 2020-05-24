import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth/auth.service";
import { User } from 'src/app/entities/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isSignedIn: boolean;
  public userModel: User;

  constructor(private authService: AuthService,
              private router: Router) { 
    this.isSignedIn = this.authService.isSignedIn;
    this.userModel = this.authService.userModel;
  }

  ngOnInit() {
  }

  onSignOut() {
    this.authService.signOut();
    this.router.navigate(['']); //default page
  }

}
