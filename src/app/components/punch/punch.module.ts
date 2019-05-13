import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PunchComponent } from './punch.component';
import { PunchService } from '../../services/punch.service';
import { MapComponent } from '../map/map.component';

@NgModule({
  declarations: [ PunchComponent, MapComponent ],
  imports: [ BrowserModule ],
  providers: [ PunchService ]
})
export class PunchModule { }
