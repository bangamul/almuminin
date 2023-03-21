import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewdoaPage } from './viewdoa.page';

const routes: Routes = [
  {
    path: '',
    component: ViewdoaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewdoaPageRoutingModule {}
