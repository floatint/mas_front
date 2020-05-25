import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsModule } from '../components/components.module';
import { OrderPageComponent } from './order/order.component';
import { SignInPageComponent } from './sign-in/sign-in.component';
import { SignUpPageComponent } from './sign-up/sign-up.component';
import { DatePageComponent } from './date/date.component';

@NgModule({
    declarations: [
        OrderPageComponent,
        SignInPageComponent,
        SignUpPageComponent,
        DatePageComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatDividerModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        ComponentsModule
    ],
    exports: [
        OrderPageComponent,
        SignInPageComponent,
        SignUpPageComponent
    ]
})
export class PagesModule {}