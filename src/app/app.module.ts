import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AbbasPage } from '../pages/abbas/abbas';
import { VegetaisPage } from '../pages/vegetais/vegetais';
import { FrutasPage } from '../pages/frutas/frutas';
import { CarrinhoPage } from '../pages/carrinho/carrinho';

import { ServicosProvider } from '../providers/servicos/servicos';
import { IonMaskModule } from '@pluritech/ion-mask';

const firebaseConfig = {
  apiKey: "AIzaSyCBazjQytaKuBMdV7ReWPB-pm9OSwo2d_k",
  authDomain: "abiro-10.firebaseapp.com",
  databaseURL: "https://abiro-10.firebaseio.com",
  projectId: "abiro-10",
  storageBucket: "abiro-10.appspot.com",
  messagingSenderId: "329145715736"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VegetaisPage,
    FrutasPage,
    AbbasPage,
    CarrinhoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonMaskModule.forRoot(),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VegetaisPage,
    FrutasPage,
    AbbasPage,
    CarrinhoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicosProvider
  ]
})
export class AppModule {}
