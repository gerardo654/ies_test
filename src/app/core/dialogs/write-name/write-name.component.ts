import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-write-name',
  templateUrl: './write-name.component.html',
  styleUrls: ['./write-name.component.css']
})
export class WriteNameComponent implements OnInit {
  name: string = '';
  constructor(
    public dialogRef: MatDialogRef<WriteNameComponent>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
