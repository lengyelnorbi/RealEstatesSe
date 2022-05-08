import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MyadvertisementsRoutingModule } from './myadvertisements-routing.module';
import { MyadvertisementsComponent } from './myadvertisements.component';
import { SharedModule } from '../../shared/share.module';


@NgModule({
  declarations: [
    MyadvertisementsComponent
  ],
  imports: [
    CommonModule,
    MyadvertisementsRoutingModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class MyadvertisementsModule { }
