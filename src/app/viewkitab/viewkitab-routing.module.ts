import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewkitabPage } from './viewkitab.page';

const routes: Routes = [
  {
    path: '',
    component: ViewkitabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewkitabPageRoutingModule {}
