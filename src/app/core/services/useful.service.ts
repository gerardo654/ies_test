import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MessageComponent} from "../dialogs/message/message.component";
import {WriteNameComponent} from "../dialogs/write-name/write-name.component";
import {DialogMessage} from "../interfaces/interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsefulService {
  message: string = '';
  type: string = '';

  constructor(public dialog: MatDialog) {}
  // dialog message user
  onOpendialogMessage( data: DialogMessage ): void {
    this.message = data.message;
    this.type = data.type;
    this.openDialogMessage();
  }

  openDialogMessage(): void {
    const dialogRef = this.dialog.open(MessageComponent, {
      data: {message: this.message, type: this.type},
    });
  }
}
