import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealEstatesComponent } from './real-estates.component';

const routes: Routes = [{
  path: '', component: RealEstatesComponent
},
  { path: 'real-est-inf', loadChildren: () => import('./real-est-inf/real-est-inf.module').then(m => m.RealEstInfModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
