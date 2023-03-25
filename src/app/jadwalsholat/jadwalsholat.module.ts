import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JadwalsholatPageRoutingModule } from './jadwalsholat-routing.module';

import { JadwalsholatPage } from './jadwalsholat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JadwalsholatPageRoutingModule
  ],
  declarations: [JadwalsholatPage]
})
export class JadwalsholatPageModule {}
