import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewsholawatPage } from './viewsholawat.page';

const routes: Routes = [
  {
    path: '',
    component: ViewsholawatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsholawatPageRoutingModule {}
