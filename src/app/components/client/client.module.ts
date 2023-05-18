import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client-list/client-list.component';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModuleModule } from 'src/app/materialModule/material-module/material-module.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RegisterClientComponent } from './register-client/register-client.component';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';
import { QrEquipmentDetailComponent } from './qr-equipment-detail/qr-equipment-detail.component';
import { RegisterEquipmentComponent } from './register-equipment/register-equipment.component';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  declarations: [
    ClientComponent,
    RegisterClientComponent,
    EquipmentListComponent,
    QrEquipmentDetailComponent,
    RegisterEquipmentComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    NgxDatatableModule,
    SharedModule,
    DataTablesModule,
    MaterialModuleModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    QrCodeModule
  ],
})
export class ClientModule {}
