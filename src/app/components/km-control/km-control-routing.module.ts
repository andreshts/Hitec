import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KmControlComponent } from './km-control.component';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'control/control-kilometraje', title: 'Control Km', component: KmControlComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class KmControlRoutingModule { }
