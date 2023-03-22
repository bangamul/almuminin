import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { ViewmaulidPageRoutingModule } from './viewmaulid-routing.module';

import { ViewmaulidPage } from './viewmaulid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    ViewmaulidPageRoutingModule
  ],
  declarations: [ViewmaulidPage]
})
export class ViewmaulidPageModule {}
