import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { ViewdoaPageRoutingModule } from './viewdoa-routing.module';

import { ViewdoaPage } from './viewdoa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    ViewdoaPageRoutingModule
  ],
  declarations: [ViewdoaPage]
})
export class ViewdoaPageModule {}
