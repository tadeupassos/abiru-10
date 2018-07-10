webpackJsonp([5],{

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroEnderecoPageModule", function() { return CadastroEnderecoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_endereco__ = __webpack_require__(464);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroEnderecoPageModule = /** @class */ (function () {
    function CadastroEnderecoPageModule() {
    }
    CadastroEnderecoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_endereco__["a" /* CadastroEnderecoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_endereco__["a" /* CadastroEnderecoPage */]),
            ],
        })
    ], CadastroEnderecoPageModule);
    return CadastroEnderecoPageModule;
}());

//# sourceMappingURL=cadastro-endereco.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroEnderecoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicos_servicos__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastroEnderecoPage = /** @class */ (function () {
    function CadastroEnderecoPage(navCtrl, navParams, database, serv, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.serv = serv;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.endereco = "";
        this.numero = "";
        this.complemento = "";
        this.bairro = "";
        this.cep = "";
        this.cidade = "";
        this.estado = "";
        this.mesmoEnderecoCobranca = true;
        this.enderecoVazio = false;
        this.numeroVazio = false;
        this.cepVazio = false;
        this.cidadeVazio = false;
        this.estadoVazio = false;
        this.bairroVazio = false;
    }
    CadastroEnderecoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroEnderecoPage');
    };
    CadastroEnderecoPage.prototype.salvarDados = function () {
        var _this = this;
        if (this.cep.trim().length == 0) {
            this.cepVazio = true;
        }
        else if (this.endereco.trim().length == 0) {
            this.enderecoVazio = true;
        }
        else if (this.numero.trim().length == 0) {
            this.numeroVazio = true;
        }
        else if (this.bairro.trim().length == 0) {
            this.bairroVazio = true;
        }
        else if (this.cidade.trim().length == 0) {
            this.cidadeVazio = true;
        }
        else if (this.estado.trim().length == 0) {
            this.estadoVazio = true;
        }
        else {
            this.database.list('enderecoEntrega')
                .push({
                clienteId: this.serv.usuarioLogado.clienteId,
                endereco: this.endereco,
                numero: this.numero,
                complemento: this.complemento,
                bairro: this.bairro,
                cep: this.cep,
                cidade: this.cidade,
                estado: this.estado,
                mesmoEnderecoCobranca: this.mesmoEnderecoCobranca
            }).then(function () {
                if (!_this.mesmoEnderecoCobranca) {
                    _this.modalCtrl.create('EnderecoCobrancaPage').present();
                }
                else if (_this.serv.usuarioLogado.cartaoCredito.numero == "") {
                    _this.modalCtrl.create('CartaoCreditoPage').present();
                }
                else {
                    _this.navCtrl.push('FecharPedidoPage');
                }
            });
        }
    };
    CadastroEnderecoPage.prototype.numeroCep = function () {
        if (this.cep.length > 9) {
            this.cep = this.cep.slice(0, -1);
        }
        else if (isNaN(parseInt(this.cep.substr(-1))) || this.cep.substr(-1) == "." || this.cep.substr(-1) == " " || this.cep.substr(-1) == "-") {
            this.cep = this.cep.slice(0, -1);
        }
        else if (this.cep.length == 6) {
            var ultimo = this.cep.substr(-1);
            this.cep = this.cep.slice(0, -1) + "-" + ultimo;
        }
        this.cepVazio = (this.cep.trim().length == 0);
    };
    CadastroEnderecoPage.prototype.soNumero = function () {
        if (this.numero.trim().length > 5) {
            this.numero = this.numero.slice(0, -1);
        }
        else if (isNaN(parseInt(this.numero.substr(-1))) || this.numero.substr(-1) == "." || this.numero.substr(-1) == " ") {
            this.numero = this.numero.slice(0, -1);
        }
        this.numeroVazio = (this.numero.trim().length == 0);
    };
    CadastroEnderecoPage.prototype.verEnderecoVazio = function () {
        this.enderecoVazio = (this.endereco.trim().length == 0);
    };
    CadastroEnderecoPage.prototype.verBairroVazio = function () {
        this.bairroVazio = (this.bairro.trim().length == 0);
    };
    CadastroEnderecoPage.prototype.verCidadeVazio = function () {
        this.cidadeVazio = (this.cidade.trim().length == 0);
    };
    CadastroEnderecoPage.prototype.fecharModal = function () {
        this.viewCtrl.dismiss();
    };
    CadastroEnderecoPage.prototype.tamanhoEstado = function () {
        if (this.estado.trim().length > 2) {
            this.estado = this.estado.slice(0, -1);
        }
        else if (!isNaN(parseInt(this.estado.substr(-1))) || this.estado.substr(-1) == "." || this.estado.substr(-1) == " ") {
            this.estado = this.estado.slice(0, -1);
        }
        else {
            this.estado = this.estado.toLocaleUpperCase();
        }
        this.estadoVazio = (this.estado.trim().length == 0);
    };
    CadastroEnderecoPage.prototype.mudarToggle = function () {
        this.mesmoEnderecoCobranca = !this.mesmoEnderecoCobranca;
    };
    CadastroEnderecoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cadastro-endereco',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\cadastro-endereco\cadastro-endereco.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-buttons left>\n      <button ion-button icon-only (tap)="fecharModal()">\n        <span ion-text showWhen="ios">Fechar</span>\n        <ion-icon showWhen="android" name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>    \n    <ion-buttons right>\n      <button ion-button icon-only (tap)="salvarDados()">\n        <ion-icon name="md-checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item no-lines>\n      <div text-center style="font-weight: bold; font-size: 120%">Endereço de entrega</div>\n      <!--<div text-center text-wrap style="color:dimgray; font-size: 100%; margin-left: 20px; margin-right: 20px">Falta pouco! Complete o seu cadastro abaixo e finalize sua compra.</div>-->\n    </ion-item>\n\n   <ion-item>\n      <ion-label color="secondary" stacked>CEP</ion-label>\n      <ion-input (keyup)="numeroCep()" type="text" [(ngModel)]="cep"></ion-input>\n    </ion-item>\n    <p text-center *ngIf="cepVazio" style="color: red">Digite o CEP</p>\n\n    <ion-item>\n      <ion-label color="secondary" stacked>Endereço</ion-label>\n      <ion-input type="text" max="30" [(ngModel)]="endereco" (keyup)="verEnderecoVazio()"></ion-input>\n    </ion-item>\n    <p text-center *ngIf="enderecoVazio" style="color: red">Digite o Endereço</p>\n\n    <ion-row>\n      <ion-col col-4 no-lines>\n        <ion-item no-lines showWhen="android">\n          <ion-label color="secondary" stacked>Número</ion-label>\n          <ion-input type="number" max="10" [(ngModel)]="numero" (keyup)="soNumero()"></ion-input>\n        </ion-item>\n        <ion-item showWhen="ios">\n          <ion-label color="secondary" stacked>Número</ion-label>\n          <ion-input type="number" max="10" [(ngModel)]="numero" (keyup)="soNumero()"></ion-input>\n        </ion-item>\n        <p text-center *ngIf="numeroVazio" style="color: red; font-size: 90%">Digite o Número</p>\n      </ion-col>\n      <ion-col col-8 no-lines>\n        <ion-item no-lines showWhen="android">\n          <ion-label color="secondary" stacked>Complemento</ion-label>\n          <ion-input type="text" max="20" [(ngModel)]="complemento"></ion-input>  \n        </ion-item>  \n        <ion-item showWhen="ios">\n          <ion-label color="secondary" stacked>Complemento</ion-label>\n          <ion-input type="text" max="20" [(ngModel)]="complemento"></ion-input>  \n        </ion-item>          \n      </ion-col>        \n    </ion-row>\n\n    <ion-item>\n      <ion-label color="secondary"  stacked>Bairro</ion-label>\n      <ion-input type="text" max="30" [(ngModel)]="bairro" (keyup)="verBairroVazio()"></ion-input>\n    </ion-item>  \n    <p text-center *ngIf="bairroVazio" style="color: red">Digite o Bairro</p>\n    \n    <ion-row>\n      <ion-col col-9>\n        <ion-item no-lines showWhen="android">\n          <ion-label color="secondary" stacked>Cidade</ion-label>\n          <ion-input type="text" max="50" [(ngModel)]="cidade" (keyup)="verCidadeVazio()"></ion-input>\n        </ion-item> \n        <ion-item showWhen="ios">\n          <ion-label color="secondary" stacked>Cidade</ion-label>\n          <ion-input type="text" max="50" [(ngModel)]="cidade" (keyup)="verCidadeVazio()"></ion-input>\n        </ion-item> \n        <p text-center *ngIf="cidadeVazio" style="color: red">Digite a Cidade</p>\n      </ion-col>\n      <ion-col col-3>\n        <ion-item no-lines showWhen="android">\n          <ion-label color="secondary" stacked>Estado</ion-label>\n          <ion-input type="text" [(ngModel)]="estado" (keyup)="tamanhoEstado()"></ion-input> \n        </ion-item>   \n        <ion-item showWhen="ios">\n          <ion-label color="secondary" stacked>Estado</ion-label>\n          <ion-input type="text" [(ngModel)]="estado" (keyup)="tamanhoEstado()"></ion-input> \n        </ion-item>   \n        <p text-center *ngIf="estadoVazio" style="color: red; font-size: 75%">Digite o Estado</p>       \n      </ion-col>        \n    </ion-row>\n       \n    <ion-item no-lines>\n      <ion-label showWhen="android" text-right style="font-size: 95%">Mesmo endereço de cobrança</ion-label>\n      <ion-label showWhen="ios" text-right style="font-size: 90%">Mesmo endereço de cobrança</ion-label>\n      <ion-toggle color="secondary" [checked]="mesmoEnderecoCobranca" (ionChange)="mudarToggle()"></ion-toggle>\n    </ion-item> \n  </ion-list> \n\n</ion-content>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\cadastro-endereco\cadastro-endereco.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_servicos_servicos__["a" /* ServicosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_servicos_servicos__["a" /* ServicosProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _f || Object])
    ], CadastroEnderecoPage);
    return CadastroEnderecoPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=cadastro-endereco.js.map

/***/ })

});
//# sourceMappingURL=5.js.map