import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatibPageRoutingModule } from './ratib-routing.module';

import { RatibPage } from './ratib.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatibPageRoutingModule
  ],
  declarations: [RatibPage]
})
export class RatibPageModule {}
