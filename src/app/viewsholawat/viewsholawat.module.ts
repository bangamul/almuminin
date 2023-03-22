import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { ViewsholawatPageRoutingModule } from './viewsholawat-routing.module';

import { ViewsholawatPage } from './viewsholawat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    ViewsholawatPageRoutingModule
  ],
  declarations: [ViewsholawatPage]
})
export class ViewsholawatPageModule {}
