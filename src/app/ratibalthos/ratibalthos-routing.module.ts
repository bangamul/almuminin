import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatibalthosPage } from './ratibalthos.page';

const routes: Routes = [
  {
    path: '',
    component: RatibalthosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatibalthosPageRoutingModule {}
