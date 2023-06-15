import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KmControlComponent } from './km-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppComponent } from 'src/app/app.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { KmControlRoutingModule } from './km-control-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [KmControlComponent],
  imports: [
    CommonModule,
    KmControlRoutingModule,
    SharedModule,
    NgChartsModule,
    NgbModule,
    NgApexchartsModule,
    NgCircleProgressModule.forRoot(),
    NgSelectModule,
    NgxDatatableModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),

    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class KmControlModule { }
