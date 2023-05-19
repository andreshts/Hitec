import { Component, HostListener, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { UbicationDetailComponent } from '../ubication-detail/ubication-detail.component';

@Component({
  selector: 'app-time-control',
  templateUrl: './time-control.component.html',
  styleUrls: ['./time-control.component.scss']
})
export class TimeControlComponent {
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
  @ViewChild(UbicationDetailComponent, { static: false })
  UbicationDetailComponent!: UbicationDetailComponent;

  constructor() {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude, position.coords.longitude);
    });
  }

  openUbicationDetailModal() {
    this.UbicationDetailComponent.openModal();
  }

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

  print() {
    console.log('si funciona el boton');
  }
}
