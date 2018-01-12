import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeaderConstantsPage } from './header-constants';

@NgModule({
  declarations: [
    HeaderConstantsPage,
  ],
  imports: [
    IonicPageModule.forChild(HeaderConstantsPage),
  ],
})
export class HeaderConstantsPageModule {}
