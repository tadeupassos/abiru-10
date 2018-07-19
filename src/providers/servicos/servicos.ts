//import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ServicosProvider {

    public qtdeCarrinho = 0;
    public carrinho: any[] = [];
    public totalPagar = "";
    public finalizouCompra = false;

    cadastroCliente: Observable<any[]>;

    public usuarioLogado = {
        key: "",
        clienteId: "",
        email: "",
        nomeFantasia: "",
        cnpj: "",
        telefone: "",
        enderecoEntrega: {
            endereco: "",
            numero: "",
            complemento: "",
            bairro: "",
            cep: "",
            cidade: "",
            estado: "",
            mesmoEnderecoCobranca: true
        },
        enderecoCobranca: {
            endereco: "",
            numero: "",
            complemento: "",
            bairro: "",
            cep: "",
            cidade: "",
            estado: ""
        },
        cartaoCredito: {
            numero: "",
            nomeImpresso: "",
            validade: "",
            codigoSeguranca: ""
        },
        entregaEscolhida: {
            dataEntrega: "",
            periodoEntrega: ""
        }
    }

    constructor(public http: Http, public toastCtrl: ToastController, private database: AngularFireDatabase) {

    }
   
    remover(produto){

        let valor = parseInt(produto.qtdeItem);

        if(valor > 0){
            valor--;
        }
        produto.qtdeItem = valor.toString();
    }
    
    adicionar(produto){
        produto.qtdeItem++;
    }

    addCarrinho(produto){

        if(produto.qtdeItem > 0){
            let itemNoCarrinho = this.carrinho.filter(p => {
                return p.key == produto.key
            }); 

            if(itemNoCarrinho.length > 0){

                itemNoCarrinho[0].qtdeItem = parseInt(itemNoCarrinho[0].qtdeItem) + parseInt(produto.qtdeItem); 
                this.carrinho = this.carrinho.filter(p => {
                    return p.key != produto.key
                });

                this.carrinho.unshift(itemNoCarrinho[0]);
            }else{
                this.carrinho.push({
                    key: produto.key,
                    itemNome: produto.itemNome,
                    medida: produto.medida,
                    preco: produto.preco,
                    qtdeItem: produto.qtdeItem,
                    tipo: produto.tipo,
                    urlImg: produto.urlImg,
                    subTotal: ''
                });
                this.qtdeCarrinho++;
            }
            produto.qtdeItem = 0;
            this.produtoAdicionado();
        }else{
            this.igualZero(produto.medida);
        }
    }
    
    produtoAdicionado() {

        let toast = this.toastCtrl.create({
            message: 'Produto adicionado ao carrinho.',
            duration: 2000,
            position: 'middle'
        });
        toast.present();
    } 
    
    igualZero(medida) {

        let toast = this.toastCtrl.create({
            message: 'Por favor, ' + medida + ' não pode ser igual 0.',
            duration: 2000,
            position: 'middle'
        });
        toast.present();
    }

    calculaSubTotal(valor: any, qtde: any){
        let valorDecimal: number = 0;
        valorDecimal = parseFloat(valor.replace(',','.'));
        valorDecimal = valorDecimal * parseInt(qtde);
        return valorDecimal.toFixed(2).toString().replace('.',',');
    }

    calcularTotal(subTotal, totalPagar, operacao){
        let valorDecimal1, valorDecimal2, resultado: number = 0;
        valorDecimal1 = parseFloat(subTotal.replace(',','.'));
        valorDecimal2 = parseFloat(totalPagar.replace(',','.')); 

        if(operacao == '+' ){
            resultado = valorDecimal2 + valorDecimal1;
        }else{
            resultado = valorDecimal2 - valorDecimal1;
        }
        return resultado.toFixed(2).toString().replace('.',',');
    }

    carregarUsuario(usuario){

        this.usuarioLogado.clienteId = usuario.uid;
        this.usuarioLogado.email = usuario.email;

        this.database.list('clientes', ref => ref.orderByChild('clienteId').equalTo(usuario.uid))
            .snapshotChanges()
            .map(changes => {
                 return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
            }).forEach((item) => {
                if(item.length > 0){
                    this.usuarioLogado.key = item[0].key;

                    if(item[0].cliente){
                        this.usuarioLogado.nomeFantasia = item[0].cliente.nomeFantasia;
                        this.usuarioLogado.cnpj = item[0].cliente.cnpj;
                        this.usuarioLogado.telefone = item[0].cliente.telefone;
                    }
                    
                    if(item[0].enderecoEntrega){
                        this.usuarioLogado.enderecoEntrega.endereco = item[0].enderecoEntrega.endereco;
                        this.usuarioLogado.enderecoEntrega.numero = item[0].enderecoEntrega.numero;
                        this.usuarioLogado.enderecoEntrega.complemento = item[0].enderecoEntrega.complemento;
                        this.usuarioLogado.enderecoEntrega.bairro = item[0].enderecoEntrega.bairro;
                        this.usuarioLogado.enderecoEntrega.cep = item[0].enderecoEntrega.cep;
                        this.usuarioLogado.enderecoEntrega.cidade = item[0].enderecoEntrega.cidade;
                        this.usuarioLogado.enderecoEntrega.estado = item[0].enderecoEntrega.estado;
                        this.usuarioLogado.enderecoEntrega.mesmoEnderecoCobranca = item[0].enderecoEntrega.mesmoEnderecoCobranca;
                    }

                    if(item[0].enderecoCobranca){
                        this.usuarioLogado.enderecoCobranca.endereco = item[0].enderecoCobranca.endereco;
                        this.usuarioLogado.enderecoCobranca.numero = item[0].enderecoCobranca.numero;
                        this.usuarioLogado.enderecoCobranca.complemento = item[0].enderecoCobranca.complemento;
                        this.usuarioLogado.enderecoCobranca.bairro = item[0].enderecoCobranca.bairro;
                        this.usuarioLogado.enderecoCobranca.cep = item[0].enderecoCobranca.cep;
                        this.usuarioLogado.enderecoCobranca.cidade = item[0].enderecoCobranca.cidade;
                        this.usuarioLogado.enderecoCobranca.estado = item[0].enderecoCobranca.estado;
                    }

                    if(item[0].cartaoCredito){
                        this.usuarioLogado.cartaoCredito.numero = item[0].cartaoCredito.numero;
                        this.usuarioLogado.cartaoCredito.nomeImpresso = item[0].cartaoCredito.nomeImpresso;
                        this.usuarioLogado.cartaoCredito.validade = item[0].cartaoCredito.validade;
                        this.usuarioLogado.cartaoCredito.codigoSeguranca = item[0].cartaoCredito.codigoSeguranca;
                    }

                    if(item[0].entregaEscolhida){
                        this.usuarioLogado.entregaEscolhida.dataEntrega = item[0].entregaEscolhida.dataEntrega;
                        this.usuarioLogado.entregaEscolhida.periodoEntrega = item[0].entregaEscolhida.periodoEntrega;
                    }
                    //console.log("cliente " + JSON.stringify(this.usuarioLogado));
                }
            }); 
    }
}
