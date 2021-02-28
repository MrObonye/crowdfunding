import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './common/card/card.component';
import { DashboardWidgetComponent } from './common/dashboard-widget/dashboard-widget.component';


const routes: Routes = [{path: '', component: CardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
