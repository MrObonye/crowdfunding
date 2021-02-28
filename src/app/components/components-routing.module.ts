import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreenButtonComponent } from './common/green-button/green-button.component';


const routes: Routes = [{path: '', component: GreenButtonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
