import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { GeoJson } from '../models/geojson';
import * as mapboxgl from 'mapbox-gl'

@Injectable()
export class MapboxService {

  constructor() { mapboxgl.accessToken = environment.mapbox.accessToken; }  
}

