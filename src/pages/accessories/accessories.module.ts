import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccessoriesPage } from './accessories';

@NgModule({
  declarations: [
    AccessoriesPage,
  ],
  imports: [
    IonicPageModule.forChild(AccessoriesPage),
  ],
})
export class AccessoriesPageModule {}
