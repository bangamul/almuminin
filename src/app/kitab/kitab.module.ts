import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { KitabPageRoutingModule } from './kitab-routing.module';

import { KitabPage } from './kitab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    KitabPageRoutingModule
  ],
  declarations: [KitabPage]
})
export class KitabPageModule {}
