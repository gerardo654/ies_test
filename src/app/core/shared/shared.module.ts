import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// intern modules
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

// components
import {LoaderComponent} from "../components/loader/loader.component";
import {MessageComponent} from "../dialogs/message/message.component";
import {WriteNameComponent} from "../dialogs/write-name/write-name.component";

// pipes
import {NamePipe} from "../pipes/name.pipe";

// services
import {LoaderService} from "../interceptors/loader.service";
import {AuthService} from "../interceptors/auth.service";

// Angular material
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    LoaderComponent,
    MessageComponent,
    WriteNameComponent,
    NamePipe
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    LoaderComponent,
    MessageComponent,
    WriteNameComponent,
    NamePipe,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatToolbarModule
  ],
  providers: [
    MatDatepickerModule,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService,
      multi: true
    }
  ],
})
export class SharedModule { }
