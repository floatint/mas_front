import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule, MatIconModule, MatMenuModule, MatListModule, MatButtonModule, MatCardModule, MatDialogModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeaderComponent } from './header/header.component';
import { MessageComponent } from './message/message.component';
import { AnalysisCardComponent } from './analysis-card/analysis-card.component';

@NgModule({
    declarations: [
        HeaderComponent,
        MessageComponent,
        AnalysisCardComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule,
        MatIconModule,
        MatMenuModule,
        MatListModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        FlexLayoutModule
    ],
    exports: [
        HeaderComponent,
        MessageComponent,
        AnalysisCardComponent
    ],
    entryComponents: [
        MessageComponent
    ]
})

export class ComponentsModule {};