import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvertiseRoutingModule } from './advertise-routing.module';
import { AdvertiseComponent } from './advertise.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { UploadImagesComponent } from '../../shared/upload-images/upload-images.component';


@NgModule({
  declarations: [
    AdvertiseComponent,
    UploadImagesComponent
  ],
  imports: [
    CommonModule,
    AdvertiseRoutingModule,
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
export class AdvertiseModule { }
