import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatibPage } from './ratib.page';

const routes: Routes = [
  {
    path: '',
    component: RatibPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatibPageRoutingModule {}
