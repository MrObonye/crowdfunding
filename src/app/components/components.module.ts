import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ComponentsRoutingModule } from './components-routing.module';
import { RectangularButtonComponent, CircleButtonComponent } from './common';
import { DashboardWidgetComponent } from './common/dashboard-widget/dashboard-widget.component';
import { CardComponent } from './common/card/card.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ModalComponent } from './modal/modal.component';
import { PledgeComponent } from './common/pledge/pledge.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RectangularButtonComponent,
    CircleButtonComponent,
    DashboardWidgetComponent,
    CardComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    ModalComponent,
    PledgeComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule
  ]
})
export class ComponentsModule { }
