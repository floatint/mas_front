import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';
//user
import { ComponentsModule } from "./components/components.module";
import { LayoutsModule } from './layouts/layouts.module';
import { PagesModule } from './pages/pages.module';
import { AppConstants } from './app.constants';
import { AuthService } from './services/auth/auth.service';
import { DialogsService } from './services/ui/dialogs.service';
import { AnalysesService } from './services/analyses/analyses.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ComponentsModule,
    LayoutsModule,
    PagesModule,
  ],
  providers: [
    AppConstants,
    AuthService,
    DialogsService,
    AnalysesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
