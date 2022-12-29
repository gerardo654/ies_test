import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ConvertionsComponent } from './components/convertions/convertions.component';
import { CalculateComponent } from './components/calculate/calculate.component';
import { FormComponent } from './components/form/form.component';
import {CanInsideGuard} from "../core/guards/can-inside.guard";

const routes: Routes = [
  { path: '', component: PrincipalComponent, canActivate:[CanInsideGuard], children: [
      { path: 'welcome', component: WelcomeComponent,canActivate:[CanInsideGuard] },
      { path: 'convertions', component: ConvertionsComponent,canActivate:[CanInsideGuard]  },
      { path: 'calculate', component: CalculateComponent,canActivate:[CanInsideGuard]  },
      { path: 'form', component: FormComponent,canActivate:[CanInsideGuard]  },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
