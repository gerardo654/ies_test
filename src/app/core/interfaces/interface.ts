import {Validators} from "@angular/forms";

export interface DialogMessage {
  type: string;
  message: string;
}

export interface ResponseAPI {
  exito: Boolean;
  mensaje: string;
}


export interface TypesDatesCalculate {
  name: string;
  id: string;
}

export interface Estates {
  name: string;
  id: number;
}

export interface login {
  username: string;
  password: string;
}

export interface formSend {
  nombres: string;
  apellidos: string;
  fumas: boolean;
  actualmentePracticasLectura: boolean
  librosLeidosUltimosTresMeses: [],
  estadoCivil: number;
}
