import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './real-estates-routing.module';
import { RealEstatesComponent } from './real-estates.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared/share.module';

@NgModule({
  declarations: [
    RealEstatesComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class MainModule { }
