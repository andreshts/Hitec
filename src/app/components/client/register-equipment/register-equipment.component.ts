import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register-equipment',
  templateUrl: './register-equipment.component.html',
  styleUrls: ['./register-equipment.component.scss']
})
export class RegisterEquipmentComponent {
  @ViewChild('registerEquipmentModal') registerEquipmentModal!: TemplateRef<any>;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openModal() {
    this.modalService
      .open(this.registerEquipmentModal, { size: 'lg', centered: true })
      .result.then((result) => {
        console.log('Modal closed: ' + result);
      })
      .catch((res) => {});
  }
}
