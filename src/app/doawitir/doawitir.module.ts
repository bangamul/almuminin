import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { DoawitirPageRoutingModule } from './doawitir-routing.module';

import { DoawitirPage } from './doawitir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    DoawitirPageRoutingModule
  ],
  declarations: [DoawitirPage]
})
export class DoawitirPageModule {}
