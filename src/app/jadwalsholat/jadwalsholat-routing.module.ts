import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadwalsholatPage } from './jadwalsholat.page';

const routes: Routes = [
  {
    path: '',
    component: JadwalsholatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadwalsholatPageRoutingModule {}
