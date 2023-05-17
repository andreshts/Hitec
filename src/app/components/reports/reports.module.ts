import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaultReportComponent } from './fault-report/fault-report.component';
import { MaintenanceReportComponent } from './maintenance-report/maintenance-report.component';
import { ProofOfExecutionComponent } from './proof-of-execution/proof-of-execution.component';
import { ReportsRoutingModule } from './reports-routing.module';



@NgModule({
  declarations: [
    FaultReportComponent,
    MaintenanceReportComponent,
    ProofOfExecutionComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
