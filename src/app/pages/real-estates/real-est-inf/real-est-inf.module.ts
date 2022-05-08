import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealEstInfRoutingModule } from './real-est-inf-routing.module';
import { RealEstInfComponent } from './real-est-inf.component';


@NgModule({
  declarations: [
    RealEstInfComponent
  ],
  imports: [
    CommonModule,
    RealEstInfRoutingModule
  ]
})
export class RealEstInfModule { }
