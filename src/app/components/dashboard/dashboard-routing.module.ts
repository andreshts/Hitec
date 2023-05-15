import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboard/inicio', title: 'Inicio', component: SalesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class DashboardRoutingModule {}
