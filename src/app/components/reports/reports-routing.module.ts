import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaintenanceReportComponent } from "./maintenance-report/maintenance-report.component";
import { FaultReportComponent } from "./fault-report/fault-report.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'reportes/reporte-mantenimiento', title: 'Reporte de Mantenimiento', component: MaintenanceReportComponent },
    ],
  },
  {
    path: '',
    children: [
      { path: 'reportes/reporte-averia', title: 'Reporte de Avería', component: FaultReportComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class ReportsRoutingModule { }
