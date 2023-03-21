import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { BarzanjiPageRoutingModule } from './barzanji-routing.module';

import { BarzanjiPage } from './barzanji.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    BarzanjiPageRoutingModule
  ],
  declarations: [BarzanjiPage]
})
export class BarzanjiPageModule {}
