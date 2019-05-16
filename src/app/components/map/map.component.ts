import { Component, OnInit, Input } from '@angular/core';
import { MapboxService } from '../../services/mapbox.service';
import { PunchService } from '../../services/punch.service';
import { Punch } from '../../models/punch';
import { GeoJson, FeatureCollection } from '../../models/geojson';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'map-box',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [MapboxService]
})
export class MapComponent implements OnInit {
  mapStyle = 'mapbox://styles/erqwork/cjvfvyv2ehrjb1fs3v0at0vvz';
  map: mapboxgl.Map;
  mapStart = [-96.932107, 32.643821];
  markers: any;
  source: any;
  punches: any;
  currentLoc: any;
  @Input('punchCoords') punchToFlyTo: Punch;

  constructor(private _mapServ: MapboxService, private _punchServ: PunchService) { }

  ngOnInit() {
    this.markers = this.createMarkersFromPunch();
    this.mapInit();
  }

  private createMarkersFromPunch() {
    this.punches = this._punchServ.punchList;
    let featurePunchArr: Array<GeoJson> = [];
    this.punches.forEach(punch => {
      let tempMarker: GeoJson = new GeoJson([punch.long, punch.lat], {message: punch.task, punch: punch});
      featurePunchArr.push(tempMarker);
    });

    return featurePunchArr;
  }

  private mapInit() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.mapStyle,
      center: this.mapStart,
      zoom: 16
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('load', (event) => {
      // register source
      this.map.addSource('punchmap', {
         type: 'geojson',
         data: {
           type: 'FeatureCollection',
           features: []
         }
      });

      // get and set source
      this.source = this.map.getSource('punchmap');
      let data = new FeatureCollection(this.markers);
      this.source.setData(data);

      // create map layer
      this.map.addLayer({
        id: 'punchmap',
        source: 'punchmap',
        type: 'symbol',
        layout: {
          'text-field': '{message}',
          'text-size': 24,
          'icon-image': 'hardware-15',
          'text-offset': [0, 1.5]
        },
        paint: {
          'text-color': '#1c75df',
          'text-halo-color': '#fff',
          'text-halo-width': 2
        }        
      });

      this.map.on('click', (event) => {
        const features = this.map.queryRenderedFeatures(event.point, { layers: ['punchmap'] });  
        if (!features.length) { return; }  
        const feature = features[0];
        const parsedFeat: Punch = JSON.parse(feature.properties.punch);
        const selectedNow = this._punchServ.getSelectedId();

        this._punchServ.punchList.find(p => p.id == selectedNow).selected = '';
        this._punchServ.punchList.find(p => p.id === parsedFeat.id).selected = 'selected';
                
        this.flyTo(feature);
      });
  
      this.map.on('mousemove', (event) => {
        const features = this.map.queryRenderedFeatures(event.point, { layers: ['punchmap'] });
        this.map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
      });

    })

  }

  private flyTo(data: GeoJson) {
    this.map.flyTo({
      center: data.geometry.coordinates,
      zoom: 16
    })
  }

  public clickedFlyTo(punchCoords: string[]) {
    this.map.flyTo({
      center: punchCoords,
      zoom: 16
    });
  }

}
