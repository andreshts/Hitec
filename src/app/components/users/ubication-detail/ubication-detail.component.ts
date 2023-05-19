import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ubication-detail',
  templateUrl: './ubication-detail.component.html',
  styleUrls: ['./ubication-detail.component.scss']
})
export class UbicationDetailComponent {

  @ViewChild('ubicationDetailModal') ubicationDetailModal!: TemplateRef<any>;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openModal() {
    this.modalService
      .open(this.ubicationDetailModal, { size: 'lg', centered: true })
      .result.then((result) => {
        console.log('Modal closed: ' + result);
      })
      .catch((res) => {});
  }
}
