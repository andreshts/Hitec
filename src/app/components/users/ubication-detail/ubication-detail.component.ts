import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
declare var Microsoft: any;

@Component({
  selector: 'app-ubication-detail',
  templateUrl: './ubication-detail.component.html',
  styleUrls: ['./ubication-detail.component.scss']
})
export class UbicationDetailComponent {
  private map: any;

  @ViewChild('ubicationDetailModal') ubicationDetailModal!: TemplateRef<any>;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  ngAfterViewInit() {

  }

  openModal() {
    this.modalService
      .open(this.ubicationDetailModal, { size: 'lg', centered: true })
      .result.then((result) => {
        console.log('Modal closed: ' + result);
      })
      .catch((res) => {});
      this.GetMap();
  }

  GetMap() {
    this.map = new Microsoft.Maps.Map('#myMap', {
      credentials: 'ApOl76-Jng7nl8V-3392tfMIyuVv-WNK-cCtLsfyAPthPeC7-UNO0ipcWlBRe6v-'
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var loc = new Microsoft.Maps.Location(
          position.coords.latitude,
          position.coords.longitude
        );
        this.map.setView({ center: loc, zoom: 50 });
      });
    }
  }
}
