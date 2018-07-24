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

  numeroPedido: any;
  keyNumeroPedido: any;  
  
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
    this.gerarNumeroPedido().then(() => {
      this.database.list('numeroPedido').update(this.keyNumeroPedido, { numero: this.numeroPedido });
      this.database.list('pedidos')
        .push({ 
          pedido: this.numeroPedido,
          cliente: this.final,
          status: "Realizado",
          dataPedido: new Date().toLocaleDateString(),
          items: this.serv.carrinho,
          totalPagar: this.serv.totalPagar
        }).then(() => {
          this.presentAlert();
        });
      }).catch((e) => { console.log("Erro em gerarNumeroPedido() " + e) });
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
  
  gerarNumeroPedido() {
    return new Promise((resolve) => { 
      this.database.list('numeroPedido')
      .snapshotChanges()
      .map(changes => {
          return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
      }).forEach((item) => {
        this.numeroPedido = parseInt(item[0].numero + 1);
        console.log("item[0].numero+1 " + parseInt(item[0].numero + 1));
        alert("Veja");
        this.keyNumeroPedido = item[0].key; 
        resolve();
      });
    });
  } 
}
