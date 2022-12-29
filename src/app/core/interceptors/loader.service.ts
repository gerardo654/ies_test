import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isLoading = new BehaviorSubject( false );

  show(): any {
    this.isLoading.next(true);
  }

  hide(): any {
    this.isLoading.next(false);
  }
}
