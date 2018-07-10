import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AbbasPage } from '../pages/abbas/abbas';

import { AngularFireAuth } from 'angularfire2/auth';
import { ServicosProvider } from '../providers/servicos/servicos';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,  afAuth: AngularFireAuth, public serv: ServicosProvider) {

    afAuth.authState.subscribe(user => {
      if(user){
        this.serv.carregarUsuario(user);
        this.rootPage = AbbasPage;
      }else{
        this.rootPage = 'LoginPage';
      }
    })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

