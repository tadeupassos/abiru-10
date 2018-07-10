import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbbasPage } from '../abbas/abbas';
import { ServicosProvider } from '../../providers/servicos/servicos';

@IonicPage()
@Component({
  selector: 'page-fechar-pedido',
  templateUrl: 'fechar-pedido.html',
})
export class FecharPedidoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public serv: ServicosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FecharPedidoPage');
  }

  voltar(){
    this.serv.qtdeCarrinho = 0;
    this.serv.carrinho = [];
    this.navCtrl.setRoot(AbbasPage);
  }

}
