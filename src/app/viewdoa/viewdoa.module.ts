import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewdoaPageRoutingModule } from './viewdoa-routing.module';

import { ViewdoaPage } from './viewdoa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewdoaPageRoutingModule
  ],
  declarations: [ViewdoaPage]
})
export class ViewdoaPageModule {}
