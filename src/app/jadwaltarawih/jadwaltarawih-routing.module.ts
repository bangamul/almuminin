import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadwaltarawihPage } from './jadwaltarawih.page';

const routes: Routes = [
  {
    path: '',
    component: JadwaltarawihPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadwaltarawihPageRoutingModule {}
