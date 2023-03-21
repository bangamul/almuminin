import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { MaulidsimtuddurrorPageRoutingModule } from './maulidsimtuddurror-routing.module';

import { MaulidsimtuddurrorPage } from './maulidsimtuddurror.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    MaulidsimtuddurrorPageRoutingModule
  ],
  declarations: [MaulidsimtuddurrorPage]
})
export class MaulidsimtuddurrorPageModule {}
