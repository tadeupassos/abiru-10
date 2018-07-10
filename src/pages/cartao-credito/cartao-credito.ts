import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ServicosProvider } from '../../providers/servicos/servicos';

@IonicPage()
@Component({
  selector: 'page-cartao-credito',
  templateUrl: 'cartao-credito.html',
})
export class CartaoCreditoPage {

  numero = "";
  nomeImpresso = "";
  validade = "";
  codigoSeguranca = "";

  numeroVazio = false;
  nomeVazio = false;
  validadeVazio = false;
  codigoVazio = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, public serv: ServicosProvider, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartaoCreditoPage');
  }

  salvarDados(){

    if(this.numero.trim().length == 0){
      this.numeroVazio = true;
    }else if(this.nomeImpresso.trim().length == 0){
      this.nomeVazio = true;
    }else if(this.validade.trim().length == 0){
      this.validadeVazio = true;
    }else if(this.codigoSeguranca.trim().length == 0){
      this.codigoVazio = true;
    }else{

      this.database.list('cartaoCredito')
        .push({ 
            clienteId: this.serv.usuarioLogado.clienteId,
            numero: this.numero,
            nomeImpresso: this.nomeImpresso,
            validade: this.validade,
            codigoSeguranca: this.codigoSeguranca
          }).then(() => { this.navCtrl.push('FecharPedidoPage') });
    }
  }
  
  soNumero(){
    if(this.numero.length > 19){
      this.numero = this.numero.slice(0,-1);
    }else if(isNaN(parseInt(this.numero.substr(-1))) || this.numero.substr(-1) == "." || this.numero.substr(-1) == " "){
      this.numero = this.numero.slice(0,-1);
    }else if(this.numero.trim().length == 5 || this.numero.trim().length == 10 || this.numero.trim().length == 15){   
      let ultimo = this.numero.substr(-1);
      this.numero = this.numero.slice(0,-1) + " " + ultimo;
    } 
    this.numeroVazio = (this.numero.trim().length == 0);
  }

  verNomeVazio(){
    this.nomeVazio = (this.nomeImpresso.trim().length == 0);
  }

  validadeCartao(){
    if(this.validade.length > 5){
      this.validade = this.validade.slice(0,-1);
    }else if(isNaN(parseInt(this.validade.substr(-1))) || this.validade.substr(-1) == "." || this.validade.substr(-1) == " "){
      this.validade = this.validade.slice(0,-1);
    }else if(this.validade.trim().length == 3 && this.validade.substr(-1) != "/"){
      let terceiro = this.validade.substr(-1);
      this.validade = this.validade.slice(0,-1) + "/" + terceiro;
    } 
    this.validadeVazio = (this.validade.trim().length == 0);
  }

  varCodigoSeguranca(){
    if(this.codigoSeguranca.length > 3){
      this.codigoSeguranca = this.codigoSeguranca.slice(0,-1);
    }else if(isNaN(parseInt(this.codigoSeguranca.substr(-1))) || this.codigoSeguranca.substr(-1) == "." || this.codigoSeguranca.substr(-1) == " "){
      this.codigoSeguranca = this.codigoSeguranca.slice(0,-1);
    }
    this.codigoVazio = (this.codigoSeguranca.trim().length == 0);    
  }

  fecharModal(){
    this.viewCtrl.dismiss();
  } 

}
