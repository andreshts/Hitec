import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
declare var Microsoft: any;

@Component({
  selector: 'app-ubication-detail',
  templateUrl: './ubication-detail.component.html',
  styleUrls: ['./ubication-detail.component.scss']
})
export class UbicationDetailComponent {
  private apiKey!: string;
  private map: any;

  @ViewChild('ubicationDetailModal') ubicationDetailModal!: TemplateRef<any>;

  constructor(private modalService: NgbModal) {
    this.apiKey = environment.bingMapsKey;
  }


  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.setMapToCurrentLocation();
  }

  openModal(): void {
    const modalRef = this.modalService
      .open(this.ubicationDetailModal, { size: 'lg', centered: true });

    modalRef.result
      .then(result => console.log('Modal closed: ' + result))
      .catch(() => { });

    modalRef.shown.subscribe(() => {
      this.createMap();

    });
  }

  createMap(): void {
    if (typeof Microsoft !== 'undefined' && Microsoft.Maps) {
      this.map = new Microsoft.Maps.Map('#myMap', {
        credentials: this.apiKey,
      });
    } else {
      // La biblioteca de Bing Maps no se ha cargado correctamente
      console.error('Bing Maps library failed to load.');
    }
  }

  setMapToCurrentLocation(): void {
    if (navigator.geolocation) {
      setTimeout(() => {
        navigator.geolocation.getCurrentPosition(
          position => {
            console.log(position);
            var loc = new Microsoft.Maps.Location(
              position.coords.latitude,
              position.coords.longitude
            );
            this.map.setView({ center: loc, zoom: 19 });
          },
          error => console.error('Error obtaining geolocation', error)
        );
      }, 1000); // Retraso de 1 segundo (puedes ajustar el tiempo según sea necesario)
    }
  }

}
