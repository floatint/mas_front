import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutsModule } from './layouts/layouts.module';
import { DefaultLayoutComponent } from './layouts/default/default.component';
import { BlankLayoutComponent } from './layouts/blank/blank.component';
import { PagesModule } from './pages/pages.module';
import { OrderPageComponent } from './pages/order/order.component';
import { SignInPageComponent } from './pages/sign-in/sign-in.component';
import { SignUpPageComponent } from './pages/sign-up/sign-up.component';
import { DatePageComponent } from './pages/date/date.component';


const routes: Routes = [{
  path: '',
  component: DefaultLayoutComponent,
  children: [
    {path: '', redirectTo: 'order', pathMatch: 'full'},
    {path: 'order', component : OrderPageComponent},
    {path: 'date', component: DatePageComponent}
  ]
}, {
  path: '',
  component: BlankLayoutComponent,
  children: [
    {path: 'sign-in', component: SignInPageComponent},
    {path: 'sign-up', component: SignUpPageComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
