import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AppConstants } from '../../app.constants';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-analysis-card',
  templateUrl: './analysis-card.component.html',
  styleUrls: ['./analysis-card.component.css']
})
export class AnalysisCardComponent implements OnInit {

  @Input() public analysisId: number;
  @Input() public name: string;
  @Input() public description: string;

  constructor(private appConsts: AppConstants,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onOrder() {
    //save analysis id into localStorage for next processing
    window.localStorage.setItem(this.appConsts.ORDER_ANALYSIS_ID, this.analysisId.toString());
    //if signed in
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/date']);
    } else {
      //sign in
      this.router.navigate(['/sign-in']);
    }
  }

}
