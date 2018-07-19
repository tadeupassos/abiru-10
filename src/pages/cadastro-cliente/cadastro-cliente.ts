import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ServicosProvider } from '../../providers/servicos/servicos';

@IonicPage()
@Component({
  selector: 'page-cadastro-cliente',
  templateUrl: 'cadastro-cliente.html',
})
export class CadastroClientePage {

  nomeFantasia = '';
  cnpj = '';
  telefone  = '';

  nomeVazio = false;
  cnpjVazio = false;
  telefoneVazio = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, public serv: ServicosProvider, public modalCtrl: ModalController, public viewCtrl: ViewController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroClientePage');
  }

  voltar(){
    this.navCtrl.pop();
  }

  salvarDados(){

    if(this.nomeFantasia.trim().length == 0){
      this.nomeVazio = true;
    }else if(this.cnpj.trim().length == 0){
      this.cnpjVazio = true;
    }else if(this.telefone.trim().length == 0){
      this.telefoneVazio = true;
    }else{
      this.database.list('clientes')
        .push({ 
            clienteId: this.serv.usuarioLogado.clienteId,
            cliente: {
              nomeFantasia: this.nomeFantasia,
              cnpj: this.cnpj,
              telefone: this.telefone
            },
            enderecoEntrega: "",
            enderecoCobranca: "",
            cartaoCredito: "",
            entregaEscolhida: ""
        }).then((result) => {
            if(this.serv.usuarioLogado.enderecoEntrega.endereco == ""){
              this.modalCtrl.create('CadastroEnderecoPage').present();
            }else if(this.serv.usuarioLogado.cartaoCredito.numero == ""){
              this.modalCtrl.create('CartaoCreditoPage').present();
            }else{
              this.navCtrl.push('FecharPedidoPage');
            }
            this.viewCtrl.dismiss();
            this.serv.usuarioLogado.key = result.key;
        });
    }
  }

  verCnpj(){
    let ultimo: any;
    if(this.cnpj.length > 18){
      this.cnpj = this.cnpj.slice(0,-1);
    }else if(isNaN(parseInt(this.cnpj.substr(-1))) || this.cnpj.substr(-1) == "." ||  this.cnpj.substr(-1) == " " || this.cnpj.substr(-1) == "/" || this.cnpj.substr(-1) == "-" ){
      this.cnpj = this.cnpj.slice(0,-1);
    }else if(this.cnpj.length == 3 || this.cnpj.length == 7){
      ultimo = this.cnpj.substr(-1);
      this.cnpj = this.cnpj.slice(0,-1) + "." + ultimo;
    }else if(this.cnpj.length == 11){
      ultimo = this.cnpj.substr(-1);
      this.cnpj = this.cnpj.slice(0,-1) + "/" + ultimo;      
    }else if( this.cnpj.length == 16){
      ultimo = this.cnpj.substr(-1);
      this.cnpj = this.cnpj.slice(0,-1) + "-" + ultimo;      
    }
    this.cnpjVazio = (this.cnpj.trim().length == 0);    
  }  

  numeroTel(){
    if(this.telefone.trim().length > 13){
      this.telefone = this.telefone.slice(0,-1);
    }else if(isNaN(parseInt(this.telefone.substr(-1))) || this.telefone.substr(-1) == "." || this.telefone.substr(-1) == " "){
      this.telefone = this.telefone.slice(0,-1);
    }else if(this.telefone.length == 3 || this.telefone.length == 9){
      let ultimo = this.telefone.substr(-1);
      this.telefone = this.telefone.slice(0,-1) + " " + ultimo;
    }
    this.telefoneVazio = (this.telefone.trim().length == 0);
  } 
  
  campoNomeVazio(){
    this.nomeVazio = (this.nomeFantasia.trim().length == 0);
  }

  fecharModal(){
    this.viewCtrl.dismiss();
  }  
 
}
