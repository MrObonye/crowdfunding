import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RectangularButtonComponent } from './common';
import { CircleButtonComponent } from './common/circle-button/circle-button.component';


const routes: Routes = [{path: '', component: CircleButtonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
