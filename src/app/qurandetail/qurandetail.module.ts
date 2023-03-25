import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QurandetailPageRoutingModule } from './qurandetail-routing.module';

import { QurandetailPage } from './qurandetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QurandetailPageRoutingModule
  ],
  declarations: [QurandetailPage]
})
export class QurandetailPageModule {}
