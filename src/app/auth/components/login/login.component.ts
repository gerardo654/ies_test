import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {UsefulService} from "../../../core/services/useful.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  formlogin: FormGroup;
  constructor(private fb: FormBuilder,
              private service: LoginService,
              private messageAlert: UsefulService,
              private router: Router) {
    this.formlogin = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }
  onLogin() {
    if (this.formlogin.invalid) {
      this.formlogin.markAllAsTouched();
      this.messageAlert.onOpendialogMessage(
        {
          message: 'Llene todos los datos.',
          type: 'error'
        }
      )
      return;
    }
    this.service.login( this.formlogin.value ).subscribe(
      data => {
        let type = 'error';
        if (data.exito) {
          type = 'success'
        }
        this.messageAlert.onOpendialogMessage(
          {
            message: data.mensaje,
            type: type
          }
        )
        if ( data.mensaje === 'El Usuario esta bloqueado' || data.exito) {
          this.router.navigateByUrl('principal/welcome');
        }
      }, error => {
        this.messageAlert.onOpendialogMessage(
          {
            message: error.error.mensaje,
            type: 'error'
          }
        )
      }
    );
  }

}
