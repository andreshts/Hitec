import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent {
  @ViewChild('registerClientModal') registerClientModal!: TemplateRef<any>;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openModal() {
    this.modalService
      .open(this.registerClientModal, { size: 'lg', centered: true })
      .result.then((result) => {
        console.log('Modal closed: ' + result);
      })
      .catch((res) => {});
  }
}
