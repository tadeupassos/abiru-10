webpackJsonp([2],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FecharPedidoPageModule", function() { return FecharPedidoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fechar_pedido__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FecharPedidoPageModule = /** @class */ (function () {
    function FecharPedidoPageModule() {
    }
    FecharPedidoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fechar_pedido__["a" /* FecharPedidoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__fechar_pedido__["a" /* FecharPedidoPage */]),
            ],
        })
    ], FecharPedidoPageModule);
    return FecharPedidoPageModule;
}());

//# sourceMappingURL=fechar-pedido.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FecharPedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abbas_abbas__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicos_servicos__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_angularfire2_database__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FecharPedidoPage = /** @class */ (function () {
    function FecharPedidoPage(navCtrl, navParams, serv, modalCtrl, alertCtrl, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serv = serv;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.database = database;
        this.valorFrete = "7,00";
        this.final = this.serv.usuarioLogado;
    }
    FecharPedidoPage.prototype.ionViewWillEnter = function () {
        this.totalPagar = this.serv.calcularTotal(this.valorFrete, this.serv.totalPagar, '+');
        this.totalCompra = this.serv.totalPagar;
        this.mostrarQtdeCarrinho = (this.serv.qtdeCarrinho > 1) ? this.serv.qtdeCarrinho + " produtos" : this.serv.qtdeCarrinho + " produto";
        this.numeroFinal = this.final.cartaoCredito.numero.slice(-4);
    };
    FecharPedidoPage.prototype.ionViewDidEnter = function () {
        if (this.serv.usuarioLogado.entregaEscolhida.dataEntrega == "") {
            this.modalCtrl.create('EscolherEntregaPage').present();
        }
    };
    FecharPedidoPage.prototype.voltar = function () {
    };
    FecharPedidoPage.prototype.alterarEndereco = function () {
        this.modalCtrl.create('CadastroEnderecoPage', { endereco: this.final.enderecoEntrega }).present();
    };
    FecharPedidoPage.prototype.alterarCartao = function () {
        this.modalCtrl.create('CartaoCreditoPage', { cartao: this.final.cartaoCredito }).present();
    };
    FecharPedidoPage.prototype.alterarDataEntrega = function () {
        this.modalCtrl.create('EscolherEntregaPage', { entrega: this.final.entregaEscolhida }).present();
    };
    FecharPedidoPage.prototype.finalizarCompra = function () {
        var _this = this;
        this.database.list('pedidos')
            .push({
            cliente: this.final,
            status: "Enviado",
            dataPedido: new Date().toLocaleDateString(),
            items: this.serv.carrinho,
            totalPagar: this.serv.totalPagar
        }).then(function () {
            _this.presentAlert();
        });
    };
    FecharPedidoPage.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Compra finalizada!',
            subTitle: 'Acompanhe o status em Pedidos.',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.serv.qtdeCarrinho = 0;
                        _this.serv.carrinho = [];
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__abbas_abbas__["a" /* AbbasPage */]);
                        _this.serv.finalizouCompra = true;
                        _this.serv.usuarioLogado.entregaEscolhida.dataEntrega = "";
                        _this.serv.usuarioLogado.entregaEscolhida.periodoEntrega = "";
                    }
                }
            ]
        });
        alert.present();
    };
    FecharPedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fechar-pedido',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\fechar-pedido\fechar-pedido.html"*/'<ion-header>\n    <ion-navbar color="secondary">\n      <ion-title>\n        Finalizar Compra\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n<ion-content padding>\n\n  <div class="comprados">\n    <ion-row>\n      <ion-col text-left>\n        {{ mostrarQtdeCarrinho }}\n      </ion-col>\n      <ion-col text-right>\n        R$ {{ totalCompra }}\n      </ion-col>\n    </ion-row>\n    <!--<ion-row class="menosMargem">\n      <ion-col>\n        <span ion-text color="primary">Vizualizar produtos</span>\n      </ion-col>\n    </ion-row>-->   \n    <ion-row class="menosMargem">\n      <ion-col text-left>\n        Valor do frete\n      </ion-col>\n      <ion-col text-right>\n        R$ {{ valorFrete }}\n      </ion-col>\n    </ion-row>\n    <ion-row style="font-weight: bold">\n      <ion-col text-left>\n        Total a pagar\n      </ion-col>\n      <ion-col text-right>\n        R$ {{ totalPagar }}\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="tituloQuadrado">Endereço de entrega</div>\n  <div class="endereco">\n    <ion-row>\n      <ion-col text-left>\n        {{ final.nomeFantasia }}\n      </ion-col>\n    </ion-row>\n    <ion-row class="menosMargem">\n      <ion-col text-left text-wrap>\n        {{ final.enderecoEntrega.endereco }}, {{ final.enderecoEntrega.numero }} \n      </ion-col>\n    </ion-row>   \n    <ion-row *ngIf="(final.enderecoEntrega.complemento)"  class="menosMargem">\n      <ion-col>\n        {{ final.enderecoEntrega.complemento }}\n      </ion-col>\n    </ion-row> \n    <ion-row class="menosMargem">\n      <ion-col text-left>\n        {{ final.enderecoEntrega.bairro }}\n      </ion-col>\n    </ion-row>\n    <ion-row class="menosMargem">\n      <ion-col text-left>\n        {{ final.enderecoEntrega.cidade }} - {{ final.enderecoEntrega.estado }}, CEP {{final.enderecoEntrega.cep}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <span ion-text color="primary" (tap)="alterarEndereco()">Alterar endereço de entrega</span>\n      </ion-col>\n    </ion-row>    \n  </div>\n\n  <!--<div class="tituloQuadrado">Pagamento</div>\n  <div class="endereco">\n    <ion-row>\n      <ion-col>\n        Cartão Fina: <span style="font-weight: bold">{{ numeroFinal }}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row class="menosMargem" text-wrap>    \n      <ion-col>\n        Nome Impresso: <span style="font-weight: bold">{{ final.cartaoCredito.nomeImpresso }}</span>\n      </ion-col>\n    </ion-row>    \n    <ion-row class="menosMargem">\n      <ion-col>\n        Validade: <span style="font-weight: bold">{{ final.cartaoCredito.validade }}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <span ion-text color="primary" (tap)="alterarCartao()">Alterar cartão</span>\n      </ion-col>\n    </ion-row>       \n  </div>  -->\n  <div class="tituloQuadrado">Desejo que seja entregue em</div>\n  <div class="endereco">\n    <ion-row>\n      <ion-col>\n        Data: {{ final.entregaEscolhida.dataEntrega }}\n      </ion-col>\n    </ion-row>\n    <ion-row class="menosMargem" text-wrap>    \n      <ion-col>\n        Período: {{ final.entregaEscolhida.periodoEntrega }}\n      </ion-col>\n    </ion-row>  \n    <ion-row>\n      <ion-col text-center>\n        <span ion-text color="primary" (tap)="alterarDataEntrega()">Alterar data entrega</span>\n      </ion-col>\n    </ion-row>             \n  </div>\n  <p style="margin-top: 15px" text-center><button ion-button outline (tap)="finalizarCompra()" color="secondary">Finalizar Compra</button></p>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\fechar-pedido\fechar-pedido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__providers_servicos_servicos__["a" /* ServicosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_4__node_modules_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FecharPedidoPage);
    return FecharPedidoPage;
}());

//# sourceMappingURL=fechar-pedido.js.map

/***/ })

});
//# sourceMappingURL=2.js.map