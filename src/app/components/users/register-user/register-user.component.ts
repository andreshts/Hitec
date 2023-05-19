import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {
  @ViewChild('registerUserModal') registerUserModal!: TemplateRef<any>;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openModal() {
    this.modalService
      .open(this.registerUserModal, { size: 'lg', centered: true })
      .result.then((result) => {
        console.log('Modal closed: ' + result);
      })
      .catch((res) => {});
  }
}
