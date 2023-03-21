import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewmaulidPageRoutingModule } from './viewmaulid-routing.module';

import { ViewmaulidPage } from './viewmaulid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewmaulidPageRoutingModule
  ],
  declarations: [ViewmaulidPage]
})
export class ViewmaulidPageModule {}
