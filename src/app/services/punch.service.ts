import { Injectable } from '@angular/core';
import { Punch } from '../models/punch';
import { PunchMarkers } from '../models/punchMarkers';

@Injectable()
export class PunchService {
  punchList: Punch[];
  punchCompList: Punch[];
  selectedPunch: Punch;

  constructor() { this.getPunches() }

  getPunches(): Punch[] {
    return this.punchList = PunchMarkers;
  }

  getSelectedPunch(): Punch {
    return this.punchList.find(punch => punch.selected === 'selected');
  }

  getSelectedPunchIndex(): number {
    return this.punchList.findIndex(punch => punch.selected === 'selected');
  }
  
  getSelectedId(): number {
    const selected = this.punchList.filter(punch => punch.selected === 'selected');
    return selected[0].id;
  }

  sevChange() {
    let sPunch = this.getSelectedPunch();
    
    if (sPunch.severity === 'Medium') {
      sPunch.severity = 'High';
    } else if (sPunch.severity === 'High') {
      sPunch.severity = 'Low'; 
    } else if (sPunch.severity === 'Low') {
      sPunch.severity = 'Medium'; 
    }
  }
}