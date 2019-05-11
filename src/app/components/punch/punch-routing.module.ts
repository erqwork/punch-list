import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PunchComponent } from './punch.component';

const routes: Routes = [
    {
        path: '**/:trade',
        component: PunchComponent
    },
    {
        path: '**',
        component: PunchComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PunchRoutingModule { }