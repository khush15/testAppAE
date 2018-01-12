import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomeHeaderPage } from './custome-header';

@NgModule({
  declarations: [
    CustomeHeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomeHeaderPage),
  ],
})
export class CustomeHeaderPageModule {}
