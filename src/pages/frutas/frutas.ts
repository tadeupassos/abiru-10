import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import { CarrinhoPage } from '../carrinho/carrinho';

@Component({
  selector: 'page-frutas',
  templateUrl: 'frutas.html',
})
export class FrutasPage {

  buscaLetra: string = '';
  qtdeCarrinho = 0;

  produtosItem: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serv: ServicosProvider, database: AngularFireDatabase, public modalCtrl: ModalController, public toastCtrl: ToastController) {

    this.produtosItem = database.list('produtos', ref => ref.orderByChild('tipo').equalTo('fruta'))
      .snapshotChanges().map(changes => {
        return changes.map(f => ({key: f.payload.key, ...f.payload.val()}));
      });
  }

  filtrarPorLetra(){

    this.produtosItem = this.produtosItem.map(changes => changes.filter((item) => {
      return item.itemNome.toLowerCase().indexOf(this.buscaLetra.toLowerCase()) > -1;
    })); 

  }

  ionViewWillEnter(){
    this.qtdeCarrinho = this.serv.qtdeCarrinho;
  }

  ionViewWillLeave(){
    this.serv.qtdeCarrinho = this.qtdeCarrinho;
  }

  mostrarCarrinho(){
    let modal = this.modalCtrl.create(CarrinhoPage);
    modal.present();
  }

  remover(produto){
    this.serv.remover(produto);
  }

  adicionar(produto){
    this.serv.adicionar(produto);
  }

  addCarrinho(produto){
    this.serv.addCarrinho(produto);
    this.qtdeCarrinho = this.serv.qtdeCarrinho;
  }

}
