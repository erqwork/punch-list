import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PunchComponent } from './punch.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'punch-list'
    },
    {
        path: 'punch-list',
        component: PunchComponent
    },
    {
        path: 'punch-list/:trade',
        pathMatch: 'full',
        component: PunchComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PunchRoutingModule { }