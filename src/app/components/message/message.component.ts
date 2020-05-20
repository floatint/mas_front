import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  public title: string;
  public text: string;

  constructor(private dialogRef: MatDialogRef<MessageComponent>,
              @Inject(MAT_DIALOG_DATA) public data) 
  {
    this.text = data.text;
    this.title = data.title;             
  }

  ngOnInit() {
  }

  onOk() {
    this.dialogRef.close('Ok');
  }

}
