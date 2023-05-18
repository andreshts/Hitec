import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { QRCodeComponent } from 'angularx-qrcode';


@Component({
  selector: 'app-qr-equipment-detail',
  templateUrl: './qr-equipment-detail.component.html',
  styleUrls: ['./qr-equipment-detail.component.scss']
})
export class QrEquipmentDetailComponent {

  public myAngularxQrCode: string = '';
  @ViewChild('qrEquipmentModal') qrEquipmentModal!: TemplateRef<any>;
  constructor(private modalService: NgbModal) {
    this.myAngularxQrCode = 'Prueba de codigo QR';
  }

  ngOnInit(): void {}

  openModal() {
    this.modalService
      .open(this.qrEquipmentModal, { size: 'lg', centered: true })
      .result.then((result) => {
        console.log('Modal closed: ' + result);
      })
      .catch((res) => {});
  }

  downloadQR() {
    let element = document.getElementById('myQrCode');
    if (element) {
      html2canvas(element).then((canvas: HTMLCanvasElement) => {
        let generatedImage = canvas
          .toDataURL('image/png')
          .replace('image/png', 'image/octet-stream');
        let a = document.createElement('a');
        a.href = generatedImage;
        a.download = 'myQRCode.png';
        a.click();
      });
    }
  }

  pdf() {
    let element = document.getElementById('myQrCode');
    if (element) {
      html2canvas(element).then((canvas: HTMLCanvasElement) => {
        const imgData = canvas.toDataURL('image/png');

        const width = canvas.width * 0.264583;
        const height = canvas.height * 0.264583;

        const pdf = new jsPDF();
        const x = (pdf.internal.pageSize.getWidth() - width) / 2;
        const y = (pdf.internal.pageSize.getHeight() - height) / 2;

        pdf.addImage(imgData, 'PNG', x, y, width, height);
        pdf.save('myQRCode.pdf');
      });
    }
  }
}
