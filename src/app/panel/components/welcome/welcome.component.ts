import { Component, OnInit } from '@angular/core';
import {UsefulService} from "../../../core/services/useful.service";
import {WriteNameComponent} from "../../../core/dialogs/write-name/write-name.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  nombre = '';
  constructor(private serviceWrite: UsefulService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onOpenDialog() {
    const dialogWrite = this.dialog.open(WriteNameComponent, {});
    dialogWrite.afterClosed().subscribe(result => {
      this.nombre = result;
    });
  }
}
