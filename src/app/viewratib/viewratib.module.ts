import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { ViewratibPageRoutingModule } from './viewratib-routing.module';

import { ViewratibPage } from './viewratib.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    ViewratibPageRoutingModule
  ],
  declarations: [ViewratibPage]
})
export class ViewratibPageModule {}
