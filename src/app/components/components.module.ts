import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ComponentsRoutingModule } from './components-routing.module';
import { RectangularButtonComponent, CircleButtonComponent } from './common';



@NgModule({
  declarations: [RectangularButtonComponent, CircleButtonComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FontAwesomeModule
  ]
})
export class ComponentsModule { }
