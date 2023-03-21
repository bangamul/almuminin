import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewmaulidPage } from './viewmaulid.page';

const routes: Routes = [
  {
    path: '',
    component: ViewmaulidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewmaulidPageRoutingModule {}
