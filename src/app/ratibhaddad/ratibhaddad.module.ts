import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatibhaddadPageRoutingModule } from './ratibhaddad-routing.module';

import { RatibhaddadPage } from './ratibhaddad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatibhaddadPageRoutingModule
  ],
  declarations: [RatibhaddadPage]
})
export class RatibhaddadPageModule {}
