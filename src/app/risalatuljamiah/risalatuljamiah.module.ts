import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { RisalatuljamiahPageRoutingModule } from './risalatuljamiah-routing.module';

import { RisalatuljamiahPage } from './risalatuljamiah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    RisalatuljamiahPageRoutingModule
  ],
  declarations: [RisalatuljamiahPage]
})
export class RisalatuljamiahPageModule {}
