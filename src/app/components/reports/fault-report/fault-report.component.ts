import { Component, HostListener, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { FaultReportDetailsComponent } from './fault-report-details/fault-report-details.component';

@Component({
  selector: 'app-fault-report',
  templateUrl: './fault-report.component.html',
  styleUrls: ['./fault-report.component.scss']
})
export class FaultReportComponent {
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

  @ViewChild(FaultReportDetailsComponent, { static: false })
  faultReportDetailsComponent!: FaultReportDetailsComponent;
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

  openFaulReportDetailModal() {
    this.faultReportDetailsComponent.openModal();
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
