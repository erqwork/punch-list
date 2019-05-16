import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PunchComponent } from './components/punch/punch.component'
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'punch-list',
    component: PunchComponent
  },
  {
    path: 'punch-list/:trade',
    component: PunchComponent
  }, 
  {
    path: '',
    component: PunchComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
