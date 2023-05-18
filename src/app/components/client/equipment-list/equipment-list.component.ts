import { Component, HostListener, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { QrEquipmentDetailComponent } from '../qr-equipment-detail/qr-equipment-detail.component';
import { RegisterEquipmentComponent } from '../register-equipment/register-equipment.component';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent {
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

  @ViewChild(QrEquipmentDetailComponent, { static: false })
  QrEquipmentDetailComponent!: QrEquipmentDetailComponent;

  @ViewChild(RegisterEquipmentComponent, { static: false })
  RegisterEquipmentComponent!: RegisterEquipmentComponent;

  @ViewChild('table') table!: DatatableComponent;

  constructor() {}

  ngOnInit(): void {}

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

  openQrEquipmentModal() {
    this.QrEquipmentDetailComponent.openModal();
  }

  openRegisterEquipmentModal() {
    this.RegisterEquipmentComponent.openModal();
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
