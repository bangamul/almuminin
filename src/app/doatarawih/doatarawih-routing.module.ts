import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoatarawihPage } from './doatarawih.page';

const routes: Routes = [
  {
    path: '',
    component: DoatarawihPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoatarawihPageRoutingModule {}
