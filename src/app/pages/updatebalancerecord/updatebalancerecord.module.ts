import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatebalancerecordPageRoutingModule } from './updatebalancerecord-routing.module';

import { UpdatebalancerecordPage } from './updatebalancerecord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatebalancerecordPageRoutingModule
  ],
  declarations: [UpdatebalancerecordPage]
})
export class UpdatebalancerecordPageModule {}
