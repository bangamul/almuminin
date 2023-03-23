import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SholawatPage } from './sholawat.page';

const routes: Routes = [
  {
    path: '',
    component: SholawatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SholawatPageRoutingModule {}
