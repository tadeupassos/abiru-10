import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPedidoPage } from './lista-pedido';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

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
    ListaPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaPedidoPage),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
})
export class ListaPedidoPageModule {}
