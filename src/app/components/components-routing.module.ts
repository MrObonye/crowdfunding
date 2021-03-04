import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './common/card/card.component';
import { DashboardWidgetComponent } from './common/dashboard-widget/dashboard-widget.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
