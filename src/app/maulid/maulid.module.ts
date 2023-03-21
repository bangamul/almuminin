import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { MaulidPageRoutingModule } from './maulid-routing.module';

import { MaulidPage } from './maulid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    MaulidPageRoutingModule
  ],
  declarations: [MaulidPage]
})
export class MaulidPageModule {}
