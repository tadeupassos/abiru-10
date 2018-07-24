import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { ServicosProvider } from '../../providers/servicos/servicos';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-lista-pedido',
  templateUrl: 'lista-pedido.html',
})
export class ListaPedidoPage {

  todosPedidos: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public database: AngularFireDatabase, public serv: ServicosProvider) {

    this.todosPedidos = this.carregaTodosPedidos();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPedidoPage');
  }

  carregaTodosPedidos(){
   return this.database.list('pedidos', ref => ref.orderByChild('ordemStatus'))
    .snapshotChanges()
    .map(changes => {
         return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
    })    
  }

  detalhesDoPedido(item){
    console.log("item enviado " + item);

    this.navCtrl.push('DetalhePedidoPage', { detalhe: item });
  }  
}
