import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatChipInputEvent} from '@angular/material/chips';
import {Estates} from "../../../core/interfaces/interface";
import {UsefulService} from "../../../core/services/useful.service";
import {SendFormService} from "../../services/send-form.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  isShowAddLybrarys = false;
  estates: Estates[] = [
    {name: 'Soltero', id: 12},
    {name: 'Casado', id: 13},
    {name: 'Viudo', id: 14}
  ];
  keywords = new Set(['IT']);
  constructor(private fb: FormBuilder,
              private messageAlert: UsefulService,
              private service: SendFormService) {
    this.form = this.fb.group({
      nombres: [null, [Validators.required, Validators.pattern('^([a-zñA-ZÑ0-9\\s]){0,15}[a-zñA-ZÑ0-9]$')]],
      apellidos: [null, [Validators.required, Validators.pattern('^([a-zñA-ZÑ0-9\\s]){0,15}[a-zñA-ZÑ0-9]$')]],
      fumas: [null, Validators.required],
      actualmentePracticasLectura: [false, Validators.required],
      librosLeidosUltimosTresMeses: [['IT']],
      estadoCivil: [null]
    });
  }

  ngOnInit(): void {
  }
  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      let aLibrarys: string[] = [];
      this.keywords.forEach( data => {
        aLibrarys.push(data);
      })
      this.form.get('librosLeidosUltimosTresMeses')?.setValue(aLibrarys);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
    let aLibrarys: string[] = [];
    this.keywords.forEach( data => {
      aLibrarys.push(data);
    })
    this.form.get('librosLeidosUltimosTresMeses')?.setValue(aLibrarys);
  }

  onChange(value: boolean) {
    if ( value ) {
      this.form.get('librosLeidosUltimosTresMeses')?.setValidators([Validators.required]);
      this.isShowAddLybrarys = true;
    } else {
      this.form.get('librosLeidosUltimosTresMeses')?.setValidators([]);
      this.isShowAddLybrarys = false;
    }
    this.form.get('librosLeidosUltimosTresMeses')?.updateValueAndValidity();
  }

  onSendForm() {
    console.log(this.form.value)
    if ( this.form.invalid ) {
      this.messageAlert.onOpendialogMessage(
        {
          message: 'Llene todos los campos.',
          type: 'error'
        }
      )
      return;
    }
    this.service.onSendServiceForm( this.form.value ).subscribe(
      data => {
        this.messageAlert.onOpendialogMessage(
          {
            message: 'Operación realizada con éxito.',
            type: 'success'
          }
        )
        this.form.reset();
      }, error => {
        this.messageAlert.onOpendialogMessage(
          {
            message: 'Error al intenbtar enviarlo.',
            type: 'error'
          }
        )
      }
    );
  }

}
