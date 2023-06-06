import { Component, HostListener, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { MaintenanceReportDetailsComponent } from './maintenance-report-details/maintenance-report-details.component';

@Component({
  selector: 'app-maintenance-report',
  templateUrl: './maintenance-report.component.html',
  styleUrls: ['./maintenance-report.component.scss']
})
export class MaintenanceReportComponent {
  rows = [
    {
      name: 'prueba',
    },
  ];
  temp = [];
  ColumnMode = ColumnMode;
  loadingIndicator = true;
  reorderable = true;
  scrollBarHorizontal = window.innerWidth < 1200;

  @ViewChild(MaintenanceReportDetailsComponent, { static: false })
  maintenanceReportDetailsComponent!: MaintenanceReportDetailsComponent;
  @ViewChild('table') table!: DatatableComponent;

  constructor() {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.scrollBarHorizontal = window.innerWidth < 1200;
    if (this.table) {
      this.table.recalculate();
      this.table.recalculateColumns();
    }
  }

  openMaintenanceReportDetailModal() {
    this.maintenanceReportDetailsComponent.openModal();
  }

  getRowHeight(row: any) {
    return row.height;
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();

    const temp = this.temp.filter((d: any) => {
      return d.name.toLowerCase().includes(val) || !val;
    });

    this.rows = temp;
    this.table.offset = 0;
  }
}
