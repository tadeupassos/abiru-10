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

    cadastroCliente: Observable<any[]>;    

    public usuarioLogado = {
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
            mesmoEnderecoCobranca: "S"
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
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    } 
    
    igualZero(medida) {

        let toast = this.toastCtrl.create({
            message: 'Por favor, ' + medida + ' não pode ser igual 0.',
            duration: 3000,
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

        let cliente = this.database.list('cadastroCliente', ref => ref.orderByChild('clienteId').equalTo(usuario.uid))
            .snapshotChanges()
            .map(changes => {
                 return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
            }).forEach((item) => {
                if(item.length > 0){
                    this.usuarioLogado.nomeFantasia = item[0].nomeFantasia;
                    this.usuarioLogado.cnpj = item[0].cnpj;
                    this.usuarioLogado.telefone = item[0].telefone
                }
            });   

        this.database.list('enderecoEntrega', ref => ref.orderByChild('clienteId').equalTo(usuario.uid))
            .snapshotChanges()
            .map(changes => {
                 return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
            }).forEach((entrega) => {
                if(entrega.length > 0){
                    this.usuarioLogado.enderecoEntrega.endereco = entrega[0].endereco;
                    this.usuarioLogado.enderecoEntrega.numero = entrega[0].numero;
                    this.usuarioLogado.enderecoEntrega.complemento = entrega[0].complemento;
                    this.usuarioLogado.enderecoEntrega.bairro = entrega[0].bairro;
                    this.usuarioLogado.enderecoEntrega.cep = entrega[0].cep;
                    this.usuarioLogado.enderecoEntrega.cidade = entrega[0].cidade;
                    this.usuarioLogado.enderecoEntrega.estado = entrega[0].estado;
                    this.usuarioLogado.enderecoEntrega.mesmoEnderecoCobranca = entrega[0].mesmoEnderecoCobranca;
                }
            });
            
        if(this.usuarioLogado.enderecoEntrega.mesmoEnderecoCobranca == "N"){
            this.database.list('enderecoCobranca', ref => ref.orderByChild('clienteId').equalTo(usuario.uid))
                .snapshotChanges()
                .map(changes => {
                    return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
                }).forEach((cobranca) => {
                    if(cobranca.length > 0){
                        this.usuarioLogado.enderecoCobranca.endereco = cobranca[0].endereco;
                        this.usuarioLogado.enderecoCobranca.numero = cobranca[0].numero;
                        this.usuarioLogado.enderecoCobranca.complemento = cobranca[0].complemento;
                        this.usuarioLogado.enderecoCobranca.bairro = cobranca[0].bairro;
                        this.usuarioLogado.enderecoCobranca.cep = cobranca[0].cep;
                        this.usuarioLogado.enderecoCobranca.cidade = cobranca[0].cidade;
                        this.usuarioLogado.enderecoCobranca.estado = cobranca[0].estado;
                    }
                });
        }

        this.database.list('cartaoCredito', ref => ref.orderByChild('clienteId').equalTo(usuario.uid))
            .snapshotChanges()
            .map(changes => {
                 return changes.map(p => ({ key: p.payload.key, ...p.payload.val() }));
            }).forEach((cartao) => {
                if(cartao.length > 0){
                    this.usuarioLogado.cartaoCredito.numero = cartao[0].numero;
                    this.usuarioLogado.cartaoCredito.nomeImpresso = cartao[0].nomeImpresso;
                    this.usuarioLogado.cartaoCredito.validade = cartao[0].validade;
                    this.usuarioLogado.cartaoCredito.codigoSeguranca = cartao[0].codigoSeguranca;
                }
            }); 
        
    }
}
