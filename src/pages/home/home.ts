import { Component } from '@angular/core';
import { NavController, ModalController, ToastController } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';
import { CarrinhoPage } from '../carrinho/carrinho';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  buscaLetra: string = '';
  items: any; 
  qtdeCarrinho = 0;
  produtosItem: Observable<any[]>;

  constructor(public navCtrl: NavController, public serv: ServicosProvider, public modalCtrl: ModalController, database: AngularFireDatabase, public toastCtrl: ToastController) {

   this.produtosItem = database.list('produtos', ref => ref.orderByChild('preco'))
    .snapshotChanges()
    .map(changes => {
     return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
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

  ionViewDidLoad() {

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
