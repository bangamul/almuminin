import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KitabPageRoutingModule } from './kitab-routing.module';

import { KitabPage } from './kitab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KitabPageRoutingModule
  ],
  declarations: [KitabPage]
})
export class KitabPageModule {}
