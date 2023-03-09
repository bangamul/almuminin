import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'ratibhaddad',
    loadChildren: () => import('./ratibhaddad/ratibhaddad.module').then( m => m.RatibhaddadPageModule)
  },
  {
    path: 'maulidsimtuddurror',
    loadChildren: () => import('./maulidsimtuddurror/maulidsimtuddurror.module').then( m => m.MaulidsimtuddurrorPageModule)
  },
  {
    path: 'risalatuljamiah',
    loadChildren: () => import('./risalatuljamiah/risalatuljamiah.module').then( m => m.RisalatuljamiahPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
