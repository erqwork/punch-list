import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PunchComponent } from './components/punch/punch.component'

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
    component: PunchComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
