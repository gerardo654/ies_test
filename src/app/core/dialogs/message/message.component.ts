import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogMessage} from "../../interfaces/interface";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<MessageComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogMessage) { }

  ngOnInit(): void {
  }

}
