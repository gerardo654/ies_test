import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {login, ResponseAPI} from "../../core/interfaces/interface";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url: string = environment.url;
  constructor(private http: HttpClient) { }

  login( data: login ): Observable<ResponseAPI> {
    return this.http.post<ResponseAPI>(this.url + 'login', data).pipe(
      map(resp => {
        this.guardarToken(resp['mensaje']);
        return resp;
      })
    );
  }

  guardarToken( data: string ) {
    localStorage.setItem('token', data);
  }
}
