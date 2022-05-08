import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RealEstInfComponent } from './real-est-inf.component';

const routes: Routes = [{ path: '1', component: RealEstInfComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealEstInfRoutingModule { }
