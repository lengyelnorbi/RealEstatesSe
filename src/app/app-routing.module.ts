import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';
import { ModAdvertGuard } from './shared/services/mod-advert.guard';

// lazy-loading
const routes: Routes = [
  {
    path: 'real-estates',
    loadChildren: () => import('./pages/real-estates/real-estates.module').then(m => m.MainModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  {
    path: '',
    redirectTo: '/real-estates',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
  { path: 'advertise', loadChildren: () => import('./pages/advertise/advertise.module').then(m => m.AdvertiseModule), canActivate: [AuthGuard] },
  { path: 'myadvertisements', loadChildren: () => import('./pages/myadvertisements/myadvertisements.module').then(m => m.MyadvertisementsModule), canActivate: [AuthGuard] },
  { path: 'mod-advert', loadChildren: () => import('./pages/mod-advert/mod-advert.module').then(m => m.ModAdvertModule), canActivate: [ModAdvertGuard] },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
