import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PunchService } from '../../services/punch.service';
import { Punch } from '../../models/punch';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'punch-list',
  templateUrl: './punch.component.html',
  styleUrls: ['./punch.component.css'],
  providers: [ PunchService ]
})
export class PunchComponent implements OnInit {
  @ViewChild('map') theMap: MapComponent;
  selectedPunch: string;
  punchList: Punch[];
  noTrade = false;
    
  constructor(private _punchServ: PunchService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      let trade = params.get('trade');
      if(trade) {
        let filteredPunches = this._punchServ.getPunches()
            .filter(punch => punch.trade.toLowerCase() === trade);
        
        // Make sure the given trade exists
        if (filteredPunches.length > 0) {
          filteredPunches[0].selected = 'selected';
          this._punchServ.punchList = filteredPunches;
        } else {
          this.noTrade = true;          
        }
        
      } else {
        this.punchList = this._punchServ.getPunches();
      }
    });

    this.punchList = this._punchServ.punchList;
  }

  prevPunch() {
    let currentPunchIndex = this.punchList.findIndex(sel => sel.selected === 'selected');
    if (currentPunchIndex >= 1) {    
      this.punchList[currentPunchIndex].selected = '';
      this.punchList[currentPunchIndex - 1].selected = 'selected';
    } else {      
      this.punchList[currentPunchIndex].selected = '';
      this.punchList[this.punchList.length - 1].selected = 'selected';
    }
  }

  nextPunch() {
    let currentPunchIndex = this.punchList.findIndex(sel => sel.selected === 'selected');
    if (currentPunchIndex < this.punchList.length - 1) {
      this.punchList[currentPunchIndex].selected = '';
      this.punchList[currentPunchIndex + 1].selected = 'selected';
    } else {
      this.punchList[currentPunchIndex].selected = '';
      this.punchList[0].selected = 'selected';
    }
  }

  removeSpaces(spaceyStr: string) {
    spaceyStr = spaceyStr.replace(/\s+/g, '');
  }

  sevChange(punch: Punch) {
    this._punchServ.sevChange();
  }
}
