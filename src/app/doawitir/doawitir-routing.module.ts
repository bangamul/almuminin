import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoawitirPage } from './doawitir.page';

const routes: Routes = [
  {
    path: '',
    component: DoawitirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoawitirPageRoutingModule {}
