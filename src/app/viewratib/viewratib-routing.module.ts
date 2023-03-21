import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewratibPage } from './viewratib.page';

const routes: Routes = [
  {
    path: '',
    component: ViewratibPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewratibPageRoutingModule {}
