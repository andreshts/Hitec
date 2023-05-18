import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client-list/client-list.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cliente/lista-clientes',
        title: 'Cliente',
        component: ClientComponent,
      },
      {
        path: 'cliente/lista-equipos',
        title: 'Equipos',
        component: EquipmentListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class ClientRoutingModule {}
