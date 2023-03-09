import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaulidsimtuddurrorPage } from './maulidsimtuddurror.page';

const routes: Routes = [
  {
    path: '',
    component: MaulidsimtuddurrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaulidsimtuddurrorPageRoutingModule {}
