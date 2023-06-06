import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaintenanceReportComponent } from "./maintenance-report/maintenance-report.component";
import { FaultReportComponent } from "./fault-report/fault-report.component";
import { ProofOfExecutionComponent } from "./proof-of-execution/proof-of-execution.component";

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
  {
    path: '',
    children: [
      { path: 'reportes/comprobante-ejecucion', title: 'Comprobante de Ejecución', component: ProofOfExecutionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class ReportsRoutingModule { }
