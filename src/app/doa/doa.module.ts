import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { IonicModule } from '@ionic/angular';

import { DoaPageRoutingModule } from './doa-routing.module';

import { DoaPage } from './doa.page';

@NgModule({
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    DoaPageRoutingModule
  ],
  declarations: [DoaPage]
})
export class DoaPageModule {}
