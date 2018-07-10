import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController, ModalController } from 'ionic-angular';
import { ServicosProvider } from '../../providers/servicos/servicos';

@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  itensCarrinho: any[] = [];
  totalApagar: string = '0,00';

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public serv: ServicosProvider, public alertCtrl: AlertController, public modalCtrl: ModalController) {

    this.itensCarrinho = this.serv.carrinho;

    this.itensCarrinho.forEach(elem => {
      elem.subTotal = this.serv.calculaSubTotal(elem.preco, elem.qtdeItem)
      this.totalApagar = this.serv.calcularTotal(elem.subTotal, this.totalApagar, '+');
    });

    console.log("usuarioLogago" + JSON.stringify(this.serv.usuarioLogado));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarrinhoPage');
  }

  ionViewWillEnter(){

  }

  fecharModal(){
    this.viewCtrl.dismiss();
  } 

  remover(produto){

    if(parseInt(produto.qtdeItem) > 0){

      produto.qtdeItem--;
      produto.subTotal = this.serv.calculaSubTotal(produto.preco, produto.qtdeItem);
      this.totalApagar = this.serv.calcularTotal(produto.preco, this.totalApagar, '-');

      if(parseInt(produto.qtdeItem) == 0){

        this.itensCarrinho = this.itensCarrinho.filter(r => {
          return r.key != produto.key
        });

        this.serv.qtdeCarrinho--;        
        this.serv.carrinho = this.itensCarrinho;
      }
    }
  }

  adicionar(produto){
    produto.qtdeItem++;
    produto.subTotal = this.serv.calculaSubTotal(produto.preco, produto.qtdeItem);
    this.totalApagar = this.serv.calcularTotal(produto.preco, this.totalApagar, '+');
  }

  removerItemCarrinho(produto){
    this.itensCarrinho = this.itensCarrinho.filter(busca => {
      return busca.key != produto.key;
    })

    this.serv.carrinho = this.itensCarrinho;

    if(this.serv.qtdeCarrinho > 0){
      this.serv.qtdeCarrinho = this.serv.qtdeCarrinho - 1;
    }
  }

  fecharPedido(){
    if(this.itensCarrinho.length > 0){
      if(this.serv.usuarioLogado.nomeFantasia == ''){
        this.navCtrl.push('CadastroClientePage');
      }else if(this.serv.usuarioLogado.enderecoEntrega.endereco == ''){
        this.modalCtrl.create('CadastroEnderecoPage').present();
      }else if(this.serv.usuarioLogado.cartaoCredito.numero == ''){
        this.modalCtrl.create('CartaoCreditoPage').present();
      }else{
        this.navCtrl.push('FecharPedidoPage');
      }
    }
  }
}
