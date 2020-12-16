import {Component, ElementRef, ViewChild} from '@angular/core';

declare var google;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  map: any;
  infoWindow: any = new google.maps.InfoWindow();
  @ViewChild('map', {read: ElementRef, static: false}) mapRef: ElementRef;
  umnPos: any = {
    lat: -6.196838,
    lng: 106.739993
  };
  constructor() {}

  ionViewDidEnter() {
    this.initMap(this.umnPos);
  }

  showCurrentLoc() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(pos);
        this.infoWindow.setPosition(pos);
        this.infoWindow.setContent('Your Current Location');
        this.infoWindow.open(this.map);
        this.map.setCenter(pos);
      });
    }
  }

  initMap(pos: any) {
    console.log('test', pos);
    const location = new google.maps.LatLng(pos.lat, pos.lng);
    const options = {
      center: location,
      zoom: 10,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    // Create the initial InfoWindow.
    this.infoWindow = new google.maps.InfoWindow({
      content: 'Click the map to get Lat/Lng!',
      position: this.umnPos,
    });
    this.infoWindow.open(this.map);

    // Configure the click listener.
    this.map.addListener('click', (mapsMouseEvent) => {
      // Close the current InfoWindow.
      this.infoWindow.close();

      // Create a new InfoWindow.
      this.infoWindow = new google.maps.InfoWindow({
        position: mapsMouseEvent.latLng,
      });
      this.infoWindow.setContent(
          JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
      );
      this.infoWindow.open(this.map);
    });

    // The marker, positioned at UMN
    const marker = new google.maps.Marker({
      position: this.umnPos,
      map: this.map,
    });
  }
}
