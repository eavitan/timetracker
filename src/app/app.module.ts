import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FrontPage } from '../pages/frontpage/frontpage';
import { StopTimingPage } from '../pages/stop-timing/stop-timing';
import { Projects } from '../providers/projects/projects';
import { HoursMinutesSeconds } from '../pipes/hours-minutes-seconds/hours-minutes-seconds';
 
@NgModule({
  declarations: [
    MyApp,
    FrontPage,
    StopTimingPage,
    HoursMinutesSeconds
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FrontPage,
    StopTimingPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, StatusBar, SplashScreen ,Projects]
})
export class AppModule {}