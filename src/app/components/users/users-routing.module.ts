import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersListComponent } from "./users-list/users-list.component";
import { TimeControlComponent } from "./time-control/time-control.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'usuarios/lista-usuarios',
        title: 'Usuarios',
        component: UsersListComponent,
      },
      {
        path: 'usuarios/control-horario',
        title: 'Horario',
        component: TimeControlComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class UsersRoutingModule{

}
