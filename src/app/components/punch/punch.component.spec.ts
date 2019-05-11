import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchComponent } from './punch.component';
import { PunchService } from '../../services/punch.service';
import { MapComponent } from '../map/map.component';
import { MapboxService } from '../../services/mapbox.service';

describe('PunchComponent', () => {
  const _mapServ = new MapboxService();
  const _punchServ = new PunchService();
  const mapBox: MapComponent = new MapComponent(_mapServ, _punchServ);
  let component: PunchComponent;
  let fixture: ComponentFixture<PunchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PunchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
