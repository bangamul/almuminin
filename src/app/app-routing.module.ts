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
  },
  {
    path: 'ratib',
    loadChildren: () => import('./ratib/ratib.module').then( m => m.RatibPageModule)
  },
  {
    path: 'barzanji',
    loadChildren: () => import('./barzanji/barzanji.module').then( m => m.BarzanjiPageModule)
  },
  {
    path: 'doa',
    loadChildren: () => import('./doa/doa.module').then( m => m.DoaPageModule)
  },
  {
    path: 'doatarawih',
    loadChildren: () => import('./doatarawih/doatarawih.module').then( m => m.DoatarawihPageModule)
  },
  {
    path: 'doawitir',
    loadChildren: () => import('./doawitir/doawitir.module').then( m => m.DoawitirPageModule)
  },
  {
    path: 'jadwaltarawih',
    loadChildren: () => import('./jadwaltarawih/jadwaltarawih.module').then( m => m.JadwaltarawihPageModule)
  },
  {
    path: 'kitab',
    loadChildren: () => import('./kitab/kitab.module').then( m => m.KitabPageModule)
  },
  {
    path: 'maulid',
    loadChildren: () => import('./maulid/maulid.module').then( m => m.MaulidPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
