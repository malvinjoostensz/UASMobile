import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupsPageRoutingModule } from './signups-routing.module';

import { SignupsPage } from './signups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupsPageRoutingModule
  ],
  declarations: [SignupsPage]
})
export class SignupsPageModule {}
