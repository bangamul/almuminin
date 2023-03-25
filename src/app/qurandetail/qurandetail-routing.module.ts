import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QurandetailPage } from './qurandetail.page';

const routes: Routes = [
  {
    path: '',
    component: QurandetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QurandetailPageRoutingModule {}
