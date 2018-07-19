import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-escolher-entrega',
  templateUrl: 'escolher-entrega.html',
})
export class EscolherEntregaPage {

  dataEntrega = "";
  periodoEntrega = "";

  dataEntregaVazio = false;
  periodoVazio = false;

  //dataMinima = new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDay();

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public serv: ServicosProvider, public database: AngularFireDatabase) {
    if(this.navParams.data.entrega){
      this.dataEntrega = this.navParams.data.entrega.dataEntrega;
      this.periodoEntrega = this.navParams.data.entrega.periodoEntrega;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EscolherEntregaPage');
  }

  fecharModal(){
    this.viewCtrl.dismiss();
  }   

  salvarEntrega(){
    if(this.dataEntrega == ""){
      this.dataEntregaVazio = true;
    }else if(this.periodoEntrega == ""){
      this.periodoVazio = true;
    }else{
      let chave = this.serv.usuarioLogado.key;
      this.database.list('clientes')
        .update(chave, {
          entregaEscolhida: {
              dataEntrega: this.dataEntrega,
              periodoEntrega: this.periodoEntrega  
            }
        }).then(() =>{
          this.serv.usuarioLogado.entregaEscolhida.dataEntrega = this.dataEntrega;
          this.serv.usuarioLogado.entregaEscolhida.periodoEntrega = this.periodoEntrega
          this.fecharModal();
        });
    }
  }

  verDataEntrega(){
    this.dataEntregaVazio = (this.dataEntrega == "");
  }

  verPeriodoEntrega(){
    this.periodoVazio = (this.periodoEntrega == "");
  }  
}
