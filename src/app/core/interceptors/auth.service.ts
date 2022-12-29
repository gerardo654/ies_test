import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {LoaderService} from "./loader.service";
import {HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse, HttpInterceptor} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {
  constructor(private router: Router,
              public loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();
    const request = req;

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigateByUrl('');
        }
        return throwError( err );
      }),
      finalize(() => {
        this.loaderService.hide();
      }),
    );
  }
}
