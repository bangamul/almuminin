import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { ViewkitabPageRoutingModule } from './viewkitab-routing.module';

import { ViewkitabPage } from './viewkitab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    ViewkitabPageRoutingModule
  ],
  declarations: [ViewkitabPage]
})
export class ViewkitabPageModule {}
