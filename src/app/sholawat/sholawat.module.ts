import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { SholawatPageRoutingModule } from './sholawat-routing.module';

import { SholawatPage } from './sholawat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    SholawatPageRoutingModule
  ],
  declarations: [SholawatPage]
})
export class SholawatPageModule {}
