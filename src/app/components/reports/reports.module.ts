import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaultReportComponent } from './fault-report/fault-report.component';
import { MaintenanceReportComponent } from './maintenance-report/maintenance-report.component';
import { ProofOfExecutionComponent } from './proof-of-execution/proof-of-execution.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTablesModule } from 'angular-datatables';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FaultReportDetailsComponent } from './fault-report/fault-report-details/fault-report-details.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';


@NgModule({
  declarations: [
    FaultReportComponent,
    MaintenanceReportComponent,
    ProofOfExecutionComponent,
    FaultReportDetailsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    NgxDatatableModule,
    SharedModule,
    DataTablesModule,
    MaterialModuleModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    GalleryModule
  ]
})
export class ReportsModule { }
