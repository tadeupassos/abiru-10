import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserLogin } from '../../models/userLogin';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  userLogin = {} as UserLogin;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

  async registrar(user: UserLogin){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.senha);
      console.log(result);
      if(result){
        this.navCtrl.pop();
      }
    }
    catch (e){
      console.error(e);
    }

  }

}
