import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomesPage } from './homes.page';

const routes: Routes = [
  {
    path: '',
    component: HomesPage
  },
  {
    path: 'logins',
    loadChildren: () => import('./logins/logins.module').then( m => m.LoginsPageModule)
  },
  {
    path: 'signups',
    loadChildren: () => import('./signups/signups.module').then( m => m.SignupsPageModule)
  },
  {
    path: 'current-loc',
    loadChildren: () => import('./current-loc/current-loc.module').then( m => m.CurrentLocPageModule)
  },
  {
    path: 'display-map',
    loadChildren: () => import('./display-map/display-map.module').then( m => m.DisplayMapPageModule)
  },
  {
    path: 'loc-coordinate',
    loadChildren: () => import('./loc-coordinate/loc-coordinate.module').then( m => m.LocCoordinatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomesPageRoutingModule {}
