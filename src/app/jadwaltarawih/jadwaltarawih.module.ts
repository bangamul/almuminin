import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JadwaltarawihPageRoutingModule } from './jadwaltarawih-routing.module';

import { JadwaltarawihPage } from './jadwaltarawih.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JadwaltarawihPageRoutingModule
  ],
  declarations: [JadwaltarawihPage]
})
export class JadwaltarawihPageModule {}
