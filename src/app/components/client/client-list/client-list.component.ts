import { Component, HostListener, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { RegisterClientComponent } from '../register-client/register-client.component';

@Component({
  selector: 'app-client',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientComponent {
  rows = ['prueba'];
  temp = [];
  swapColumns = false;
  ColumnMode = ColumnMode;
  loadingIndicator = true;
  reorderable = true;
  scrollBarHorizontal = window.innerWidth < 1200;

  @ViewChild('table') table!: DatatableComponent;
  @ViewChild(RegisterClientComponent, { static: false })
  registerClientComponent!: RegisterClientComponent;

  constructor(private modalService: NgbModal) {}

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

    const temp = this.temp.filter((d: any) => {
      return d.name.toLowerCase().includes(val) || !val;
    });

    this.rows = temp;
    this.table.offset = 0;
  }

  openRegisterClientModal() {
    this.registerClientComponent.openModal();
  }
}
