import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { RatibPageRoutingModule } from './ratib-routing.module';

import { RatibPage } from './ratib.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    RatibPageRoutingModule
  ],
  declarations: [RatibPage]
})
export class RatibPageModule {}
