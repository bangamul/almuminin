import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewratibPageRoutingModule } from './viewratib-routing.module';

import { ViewratibPage } from './viewratib.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewratibPageRoutingModule
  ],
  declarations: [ViewratibPage]
})
export class ViewratibPageModule {}
