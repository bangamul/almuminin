import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { DoatarawihPageRoutingModule } from './doatarawih-routing.module';

import { DoatarawihPage } from './doatarawih.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    DoatarawihPageRoutingModule
  ],
  declarations: [DoatarawihPage]
})
export class DoatarawihPageModule {}
