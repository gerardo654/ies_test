import { Component, OnInit } from '@angular/core';
import {TypesDatesCalculate} from "../../../core/interfaces/interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsefulService} from "../../../core/services/useful.service";

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  typesCalculate: TypesDatesCalculate[] = [
    { name: 'Día', id : 'D' },
    { name: 'Mes', id : 'M' },
    { name: 'Año', id : 'A' }
  ];
  formCalculate: FormGroup;
  dateResult: Date | undefined;
  constructor(private fb: FormBuilder,
              private messageAlert: UsefulService) {
    this.formCalculate = this.fb.group({
      date: [null, Validators.required],
      unity: [null, Validators.required],
      value: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }
  calculate() {
    if ( this.formCalculate.invalid ) {
      this.messageAlert.onOpendialogMessage(
        {
          message: 'Llene todos los campos.',
          type: 'error'
        }
      )
      return;
    }
    let oDate  = new Date(this.formCalculate.value.date);
    const valueSum = this.formCalculate.value.value;
    switch(this.formCalculate.value.unity) {
      case 'A': {
        this.dateResult = new Date(oDate.setFullYear(oDate.getFullYear() + valueSum ));
        break;
      }
      case 'M': {
        this.dateResult = new Date(oDate.setMonth( oDate.getMonth() + valueSum ));
        break;
      }
      case 'D': {
        const dateChange = oDate.setDate(oDate.getDate() + valueSum )
        this.dateResult = new Date(dateChange);
        break;
      }
    }
  }

}
