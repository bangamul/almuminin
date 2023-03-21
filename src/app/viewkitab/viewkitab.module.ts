import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewkitabPageRoutingModule } from './viewkitab-routing.module';

import { ViewkitabPage } from './viewkitab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewkitabPageRoutingModule
  ],
  declarations: [ViewkitabPage]
})
export class ViewkitabPageModule {}
