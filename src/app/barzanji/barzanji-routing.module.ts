import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarzanjiPage } from './barzanji.page';

const routes: Routes = [
  {
    path: '',
    component: BarzanjiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarzanjiPageRoutingModule {}
