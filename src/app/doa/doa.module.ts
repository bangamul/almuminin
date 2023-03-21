import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoaPageRoutingModule } from './doa-routing.module';

import { DoaPage } from './doa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoaPageRoutingModule
  ],
  declarations: [DoaPage]
})
export class DoaPageModule {}
