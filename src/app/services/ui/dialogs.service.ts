import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MessageComponent } from '../../components/message/message.component';

@Injectable({
    providedIn: 'root'
})
export class DialogsService {

    constructor(private dialog: MatDialog){}

    public showMessage(title: string, msg: string) {
        let msgRef = this.dialog.open(MessageComponent, {
            data: {title: title, text: msg}
        });
    }
}