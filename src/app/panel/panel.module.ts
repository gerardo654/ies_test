import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PrincipalComponent } from './components/principal/principal.component';
import { NavComponent } from './components/nav/nav.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ConvertionsComponent } from './components/convertions/convertions.component';
import { CalculateComponent } from './components/calculate/calculate.component';
import { FormComponent } from './components/form/form.component';

// import module shared
import {SharedModule} from "../core/shared/shared.module";


@NgModule({
  declarations: [
    PrincipalComponent,
    NavComponent,
    WelcomeComponent,
    ConvertionsComponent,
    CalculateComponent,
    CalculateComponent,
    FormComponent
  ],
    imports: [
        CommonModule,
        PanelRoutingModule,
        SharedModule
    ]
})
export class PanelModule { }
