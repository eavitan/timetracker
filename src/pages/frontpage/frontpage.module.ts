import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FrontPage } from './frontpage';

@NgModule({
  declarations: [
    FrontPage,
  ],
  imports: [
    IonicPageModule.forChild(FrontPage),
  ],
})
export class FrontpagePageModule {}
