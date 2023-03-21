import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KitabPage } from './kitab.page';

const routes: Routes = [
  {
    path: '',
    component: KitabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitabPageRoutingModule {}
