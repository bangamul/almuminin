import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RatibhaddadPage } from './ratibhaddad.page';

const routes: Routes = [
  {
    path: '',
    component: RatibhaddadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RatibhaddadPageRoutingModule {}
