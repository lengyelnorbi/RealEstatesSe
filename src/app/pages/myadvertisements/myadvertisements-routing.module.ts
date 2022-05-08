import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyadvertisementsComponent } from './myadvertisements.component';

const routes: Routes = [{ path: '', component: MyadvertisementsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyadvertisementsRoutingModule { }
