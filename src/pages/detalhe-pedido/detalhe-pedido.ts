import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';
import { CarrinhoPage } from '../carrinho/carrinho';

@IonicPage()
@Component({
  selector: 'page-detalhe-pedido',
  templateUrl: 'detalhe-pedido.html',
})
export class DetalhePedidoPage {

  status: any;
  corStatus: any;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public serv: ServicosProvider, public modalCtrl: ModalController) {

    if(this.navParams.data.detalhe){
      this.status = this.navParams.data.detalhe.status;
      this.corStatus = this.navParams.data.detalhe.corStatus;
      this.items = this.navParams.data.detalhe.items;
      console.log("qtde " + this.items)

      console.log("detalhe " + JSON.stringify(this.items));

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePedidoPage');
  }

  fecharModal(){
    this.viewCtrl.dismiss();
  } 

  reutilizar(){
    this.serv.carrinho = this.items;
    this.serv.qtdeCarrinho = this.items.length;
    this.modalCtrl.create(CarrinhoPage).present();
    this.viewCtrl.dismiss();  
  }


}
