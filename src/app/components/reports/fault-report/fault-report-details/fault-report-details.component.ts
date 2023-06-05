import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  Image,
  ModalGalleryService,
  ModalGalleryRef,

} from '@ks89/angular-modal-gallery';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-fault-report-details',
  templateUrl: './fault-report-details.component.html',
  styleUrls: ['./fault-report-details.component.scss']
})
export class FaultReportDetailsComponent {
  @ViewChild('faulReportsDetailModal') faulReportsDetailModal!: TemplateRef<any>;
  constructor(private modalService: NgbModal, private modalGalleryService: ModalGalleryService, private sanitizer: DomSanitizer) {

  }

  openModal() {
    this.modalService
      .open(this.faulReportsDetailModal, { size: 'lg' })
      .result.then((result) => {
        console.log('Modal closed: ' + result);
      })
      .catch((res) => { });

  }

  emptyImagesArray: Image[] = [];

  imagesRect: Image[] = [
    new Image(0, { img: "./assets/images/photos/1.jpg", }, { img: "./assets/images/photos/1.jpg" }),
    new Image(1, { img: "./assets/images/photos/2.jpg" }, { img: "./assets/images/photos/2.jpg" }),
    new Image(2, { img: "./assets/images/photos/3.jpg" }, { img: "./assets/images/photos/3.jpg", }),
    new Image(3, { img: "./assets/images/photos/4.jpg", }, { img: "./assets/images/photos/4.jpg" }),
    new Image(4, { img: "./assets/images/photos/5.jpg" }, { img: "./assets/images/photos/5.jpg" }),
    new Image(5, { img: "./assets/images/photos/6.jpg", }, { img: "./assets/images/photos/6.jpg" })
  ];


  openImageModalRowDescription(id: number, image: Image): void {
    console.log('Opening modal gallery from custom plain gallery row and description, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.imagesRect);
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images: this.imagesRect,
      currentImage: this.imagesRect[index]
    }) as ModalGalleryRef;
  }

  addRandomImage(): void {


    // add also to imagesRect
    const imageRectToCopy: Image = this.imagesRect[Math.floor(Math.random() * this.imagesRect.length)];
    const newImageRect: Image = new Image(this.imagesRect.length - 1 + 1, imageRectToCopy.modal, imageRectToCopy.plain);
    this.imagesRect = [...this.imagesRect, newImageRect];
  }


  trackById(index: number, item: Image): number {
    return item.id;
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  }
}
