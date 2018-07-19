import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { AbbasPage } from '../abbas/abbas';
import { ServicosProvider } from '../../providers/servicos/servicos';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-fechar-pedido',
  templateUrl: 'fechar-pedido.html',
})
export class FecharPedidoPage {

  final: any;
  mostrarQtdeCarrinho: string;
  totalPagar: any;
  valorFrete = "7,00";
  totalCompra: any;
  numeroFinal: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public serv: ServicosProvider, public modalCtrl: ModalController, public alertCtrl: AlertController, public database: AngularFireDatabase) {
    this.final = this.serv.usuarioLogado;
  }

  ionViewWillEnter() {
    this.totalPagar = this.serv.calcularTotal(this.valorFrete, this.serv.totalPagar,'+');
    this.totalCompra = this.serv.totalPagar;
    this.mostrarQtdeCarrinho = (this.serv.qtdeCarrinho > 1) ? this.serv.qtdeCarrinho + " produtos" : this.serv.qtdeCarrinho + " produto";
    this.numeroFinal = this.final.cartaoCredito.numero.slice(-4);
  }

  ionViewDidEnter(){
    if(this.serv.usuarioLogado.entregaEscolhida.dataEntrega == ""){
      this.modalCtrl.create('EscolherEntregaPage').present();
    }
  }

  voltar(){

  }

  alterarEndereco(){
    this.modalCtrl.create('CadastroEnderecoPage', { endereco: this.final.enderecoEntrega }).present();
  }

  alterarCartao(){
    this.modalCtrl.create('CartaoCreditoPage', { cartao: this.final.cartaoCredito }).present();
  }

  alterarDataEntrega(){
    this.modalCtrl.create('EscolherEntregaPage', { entrega: this.final.entregaEscolhida }).present();
  }

  finalizarCompra(){

    this.database.list('pedidos')
      .push({ 
        cliente: this.final,
        status: "Enviado",
        dataPedido: new Date().toLocaleDateString(),
        items: this.serv.carrinho,
        totalPagar: this.serv.totalPagar
      }).then(() => {
        this.presentAlert();
      });      
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Compra finalizada!',
      subTitle: 'Acompanhe o status em Pedidos.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.serv.qtdeCarrinho = 0;
            this.serv.carrinho = [];
            this.navCtrl.setRoot(AbbasPage);
            this.serv.finalizouCompra = true;
            this.serv.usuarioLogado.entregaEscolhida.dataEntrega = "";
            this.serv.usuarioLogado.entregaEscolhida.periodoEntrega = "";
          }
        }
      ]
    });
    alert.present();
  }  

}
