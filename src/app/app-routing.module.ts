import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: 'classes', component:ClassesComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: '', redirectTo:"/homepage", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
