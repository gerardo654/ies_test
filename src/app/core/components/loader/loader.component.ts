import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {LoaderService} from "../../interceptors/loader.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  mostrarrpgres: BehaviorSubject<boolean> = this.loaderService.isLoading;
  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
