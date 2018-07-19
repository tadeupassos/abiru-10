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
  emailInvalido = false;
  emailVazio = false;
  senhaVazio = false;
  seisDigitos = false;  

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

  async registrar(user: UserLogin){
    if(user.email.trim().length == 0){
      this.emailVazio = true;
    }else if(user.senha.trim().length == 0){
      this.emailVazio = true;
    }else if(user.senha.trim().length < 6){
      this.seisDigitos = true;
    }else{    
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
    this.emailVazio = (this.userLogin.email == null || this.userLogin.email.trim().length == 0);
  }

  verSenhaVazio(){
    this.senhaVazio = (this.userLogin.senha == null || this.userLogin.senha.trim().length == 0);
    this.seisDigitos = (this.userLogin.senha == null || this.userLogin.senha.trim().length < 6);
  }

  voltarLogin(){
    this.navCtrl.pop();
  }

}
