import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';
import { SendComponent } from './send/send.component';


const routes: Routes = [
  {path:"results",component:ResultsComponent},
  {path:"send",component:SendComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
