import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { IonicModule } from '@ionic/angular';

import { RatibhaddadPageRoutingModule } from './ratibhaddad-routing.module';

import { RatibhaddadPage } from './ratibhaddad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfViewerModule,
    RatibhaddadPageRoutingModule
  ],
  declarations: [RatibhaddadPage]
})
export class RatibhaddadPageModule {}
