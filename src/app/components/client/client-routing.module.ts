import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client-list/client-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cliente/lista-clientes',
        title: 'Cliente',
        component: ClientComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class ClientRoutingModule {}
