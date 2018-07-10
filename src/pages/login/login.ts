import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserLogin } from '../../models/userLogin';
import { AbbasPage } from '../abbas/abbas';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as UserLogin;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async logar(user: UserLogin){
    try{
      const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.senha);
      if(result){
        this.navCtrl.setRoot(AbbasPage, { user });
      } 
    }
    catch (e){
      console.error(e);
    }
  }

  registrar(){
    this.navCtrl.push('RegistrarPage');
  }

}
