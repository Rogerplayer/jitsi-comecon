import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalaComponent } from './sala/sala.component';


const routes: Routes = [
  { path: '', component: SalaComponent }, 
  { path: ':sala', component: SalaComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
