import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FrutasPage } from '../frutas/frutas';
import { VegetaisPage } from '../vegetais/vegetais';
import { ListaPedidoPage } from '../lista-pedido/lista-pedido';
import { ServicosProvider } from '../../providers/servicos/servicos';

@Component({
  selector: 'page-abbas',
  templateUrl: 'abbas.html',
})
export class AbbasPage {

  tab1Root: any = HomePage;
  tab2Root: any = FrutasPage;
  tab3Root: any = VegetaisPage;  
  tab4Root: any = ListaPedidoPage;

  indiceTab = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serv: ServicosProvider) {

    if(this.serv.finalizouCompra){
      this.indiceTab = 3;
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbbasPage');
  }

}
