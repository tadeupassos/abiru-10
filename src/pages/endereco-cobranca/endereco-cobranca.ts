import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ServicosProvider } from '../../providers/servicos/servicos';

@IonicPage()
@Component({
  selector: 'page-endereco-cobranca',
  templateUrl: 'endereco-cobranca.html',
})
export class EnderecoCobrancaPage {

  endereco = "";
  numero = "";
  complemento = "";
  bairro = "";
  cep = "";
  cidade = "";
  estado = "";
  
  enderecoVazio = false;
  numeroVazio = false;
  cepVazio = false;
  cidadeVazio = false;
  estadoVazio = false;
  bairroVazio = false;  

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, public serv: ServicosProvider, public modalCtrl: ModalController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnderecoCobrancaPage');
  }
  
  salvarDados(){

    if(this.cep.trim().length == 0){
      this.cepVazio = true;
    }else if(this.endereco.trim().length == 0){
      this.enderecoVazio = true;
    }else if(this.numero.trim().length == 0){
      this.numeroVazio = true;
    }else if(this.bairro.trim().length == 0){
      this.bairroVazio = true;
    }else if(this.cidade.trim().length == 0){
      this.cidadeVazio = true;
    }else if(this.estado.trim().length == 0){
      this.estadoVazio = true;
    }else{
      let chave = this.serv.usuarioLogado.key;
      this.database.list('clientes')
        .update(chave, {
            EnderecoCobranca: {
              endereco: this.endereco,
              numero: this.numero,
              complemento: this.complemento,
              bairro: this.bairro,
              cep: this.cep,
              cidade: this.cidade,
              estado: this.estado
            }
        }).then(() => {
            /*if(this.serv.usuarioLogado.cartaoCredito.numero == ""){
              this.modalCtrl.create('CartaoCreditoPage').present();
            }else{*/
              this.navCtrl.push('FecharPedidoPage');
            //}
            this.viewCtrl.dismiss();
        });
    }
  }

  numeroCep(){
    if(this.cep.length > 9){
      this.cep = this.cep.slice(0,-1);
    }else if(isNaN(parseInt(this.cep.substr(-1))) || this.cep.substr(-1) == "." || this.cep.substr(-1) == " "){
      this.cep = this.cep.slice(0,-1);
    }else if(this.cep.length == 6){
      let ultimo = this.cep.substr(-1);
      this.cep = this.cep.slice(0,-1) + "-" + ultimo;
    } 
    this.cepVazio = (this.cep.trim().length == 0);
  }

  soNumero(){
    if(this.numero.trim().length > 5){
      this.numero = this.numero.slice(0,-1);
    }else if(isNaN(parseInt(this.numero.substr(-1))) || this.numero.substr(-1) == "." || this.numero.substr(-1) == " "){
      this.numero = this.numero.slice(0,-1);
    } 
    this.numeroVazio = (this.numero.trim().length == 0);
  }
  
  verEnderecoVazio(){
    this.enderecoVazio = (this.endereco.trim().length == 0);
  }

  verBairroVazio(){
    this.bairroVazio = (this.bairro.trim().length == 0);
  }

  verCidadeVazio(){
    this.cidadeVazio = (this.cidade.trim().length == 0);
  }
  
  fecharModal(){
    this.viewCtrl.dismiss();
  }

  tamanhoEstado(){
    if(this.estado.trim().length > 2){
      this.estado = this.estado.slice(0,-1);
    }else if(!isNaN(parseInt(this.estado.substr(-1))) || this.estado.substr(-1) == "." || this.estado.substr(-1) == " "){
      this.estado = this.estado.slice(0,-1);
    }else{
      this.estado = this.estado.toLocaleUpperCase();
    }

    this.estadoVazio = (this.estado.trim().length == 0);
  }  

}
