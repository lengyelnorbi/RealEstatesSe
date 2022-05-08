import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModAdvertRoutingModule } from './mod-advert-routing.module';
import { ModAdvertComponent } from './mod-advert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    ModAdvertComponent
  ],
  imports: [
    CommonModule,
    ModAdvertRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule,
    MatListModule
  ]
})
export class ModAdvertModule { }
