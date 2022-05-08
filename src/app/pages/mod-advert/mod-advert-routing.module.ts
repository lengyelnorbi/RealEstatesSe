import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModAdvertComponent } from './mod-advert.component';

const routes: Routes = [{ path: '', component: ModAdvertComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModAdvertRoutingModule { }
