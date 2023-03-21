import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewsholawatPageRoutingModule } from './viewsholawat-routing.module';

import { ViewsholawatPage } from './viewsholawat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewsholawatPageRoutingModule
  ],
  declarations: [ViewsholawatPage]
})
export class ViewsholawatPageModule {}
