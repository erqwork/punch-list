import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PunchRoutingModule } from './punch-routing.module';
import { PunchComponent } from './punch.component';
import { PunchService } from '../../services/punch.service';
import { MapComponent } from '../map/map.component';

@NgModule({
  declarations: [ PunchComponent, MapComponent ],
  imports: [ BrowserModule, PunchRoutingModule ],
  providers: [ PunchService ]
})
export class PunchModule { }
