import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomCardPage } from './custom-card';

@NgModule({
  declarations: [
    CustomCardPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomCardPage),
  ],
})
export class CustomCardPageModule {}
