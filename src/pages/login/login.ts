import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { UserLogin } from '../../models/userLogin';
import { AbbasPage } from '../abbas/abbas';
import { AngularFireAuth } from 'angularfire2/auth';
import { ContatoPage } from '../contato/contato';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as UserLogin;
  emailInvalido = false;
  emailVazio = false;
  senhaVazio = false;
  seisDigitos = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async logar(user: UserLogin){
    if(user.email.trim().length == 0){
      this.emailVazio = true;
    }else if(user.senha.trim().length == 0){
      this.emailVazio = true;
    }else if(user.senha.trim().length < 6){
      this.seisDigitos = true;
    }else{
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
  }

  registrar(){
    this.navCtrl.push('RegistrarPage');
  }

  validaEmail(user: UserLogin){
    let usuario = user.email.substring(0, user.email.indexOf("@"));
    let dominio = user.email.substring(user.email.indexOf("@")+ 1, user.email.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
      this.emailInvalido = false;
    }else{
      this.emailInvalido = true;
    }
  }

  verEmailVazio(){
    this.emailVazio = (this.user.email == null || this.user.email.trim().length == 0);
  }

  verSenhaVazio(){
    this.senhaVazio = (this.user.senha == null || this.user.senha.trim().length == 0);
    this.seisDigitos = (this.user.senha == null || this.user.senha.trim().length < 6);
  }

  queroSerTembiu(){
    this.modalCtrl.create(ContatoPage).present();
  }

}
