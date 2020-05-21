import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './default/default.component';
import { ComponentsModule } from '../components/components.module';
import { BlankLayoutComponent } from './blank/blank.component';

@NgModule({
    declarations: [
        DefaultLayoutComponent,
        BlankLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ComponentsModule
    ],
    exports: [
        DefaultLayoutComponent,
        BlankLayoutComponent
    ]
})

export class LayoutsModule {}