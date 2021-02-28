import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ComponentsRoutingModule } from './components-routing.module';
import { RectangularButtonComponent, CircleButtonComponent } from './common';
import { DashboardWidgetComponent } from './common/dashboard-widget/dashboard-widget.component';
import { CardComponent } from './common/card/card.component';



@NgModule({
  declarations: [RectangularButtonComponent, CircleButtonComponent, DashboardWidgetComponent, CardComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FontAwesomeModule
  ]
})
export class ComponentsModule { }
