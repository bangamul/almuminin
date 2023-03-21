import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { RatibalthosPageRoutingModule } from './ratibalthos-routing.module';

import { RatibalthosPage } from './ratibalthos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    RatibalthosPageRoutingModule
  ],
  declarations: [RatibalthosPage]
})
export class RatibalthosPageModule {}
