import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaulidPage } from './maulid.page';

const routes: Routes = [
  {
    path: '',
    component: MaulidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaulidPageRoutingModule {}
