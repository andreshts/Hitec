import { Component, HostListener, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-km-control',
  templateUrl: './km-control.component.html',
  styleUrls: ['./km-control.component.scss']
})
export class KmControlComponent {
  rows = [
    {
      name: 'prueba',
    },
  ];
  temp = [];
  swapColumns = false;
  ColumnMode = ColumnMode;
  loadingIndicator = true;
  reorderable = true;
  scrollBarHorizontal = window.innerWidth < 1200;

  @ViewChild('table') table!: DatatableComponent;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.scrollBarHorizontal = window.innerWidth < 1200;
    if (this.table) {
      this.table.recalculate();
      this.table.recalculateColumns();
    }
  }



  getRowHeight(row: any) {
    return row.height;
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();

    // Filtrar los datos
    const temp = this.temp.filter((d: any) => {
      return d.name.toLowerCase().includes(val) || !val;
    });

    this.rows = temp;
    this.table.offset = 0;
  }
}
