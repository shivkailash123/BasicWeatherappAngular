import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherdataComponent } from './weatherdata/weatherdata.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [

  
  
  {
    path: '',
    component: HomepageComponent
  },
  
  {
    path: 'datapage',
    component: WeatherdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
