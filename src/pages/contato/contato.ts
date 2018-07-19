import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
})
export class ContatoPage {

  nome: string = "";
  email: string = "";
  cidade: string = "";

  nomeVazio = false;
  emailVazio = false;
  emailInvalido = false;
  cidadeVazio = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatoPage');
  }

  verNomeVazio(){
    this.nomeVazio = (this.nome.trim().length == 0);
  }

  verEmailVazio(){
    this.emailVazio = (this.email.trim().length == 0);
  }

  validaEmail(){
    let usuario = this.email.substring(0, this.email.indexOf("@"));
    let dominio = this.email.substring(this.email.indexOf("@")+ 1, this.email.length);
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

  verCidadeVazio(){
    this.cidadeVazio = (this.cidade.trim().length == 0);
  }

  queroSerTembiu(){
    console.log("Nome: " + this.nome + " - E-mail: " + this.email + " - Cidade-Estado: " + this.cidade);

    let alert = this.alertCtrl.create({
      title: 'Tembiu',
      subTitle: 'Em breve entraremos em contato!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.fecharModal();
          }
        }
      ]
    });
    alert.present();
  }

  fecharModal(){
    this.viewCtrl.dismiss();
  }
}