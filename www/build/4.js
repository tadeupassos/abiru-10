webpackJsonp([4],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartaoCreditoPageModule", function() { return CartaoCreditoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartao_credito__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartaoCreditoPageModule = /** @class */ (function () {
    function CartaoCreditoPageModule() {
    }
    CartaoCreditoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cartao_credito__["a" /* CartaoCreditoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__cartao_credito__["a" /* CartaoCreditoPage */]),
            ],
        })
    ], CartaoCreditoPageModule);
    return CartaoCreditoPageModule;
}());

//# sourceMappingURL=cartao-credito.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartaoCreditoPage; });
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




var CartaoCreditoPage = /** @class */ (function () {
    function CartaoCreditoPage(navCtrl, navParams, database, serv, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.serv = serv;
        this.viewCtrl = viewCtrl;
        this.numero = "";
        this.nomeImpresso = "";
        this.validade = "";
        this.codigoSeguranca = "";
        this.numeroVazio = false;
        this.nomeVazio = false;
        this.validadeVazio = false;
        this.codigoVazio = false;
    }
    CartaoCreditoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartaoCreditoPage');
    };
    CartaoCreditoPage.prototype.salvarDados = function () {
        var _this = this;
        if (this.numero.trim().length == 0) {
            this.numeroVazio = true;
        }
        else if (this.nomeImpresso.trim().length == 0) {
            this.nomeVazio = true;
        }
        else if (this.validade.trim().length == 0) {
            this.validadeVazio = true;
        }
        else if (this.codigoSeguranca.trim().length == 0) {
            this.codigoVazio = true;
        }
        else {
            this.database.list('cartaoCredito')
                .push({
                clienteId: this.serv.usuarioLogado.clienteId,
                numero: this.numero,
                nomeImpresso: this.nomeImpresso,
                validade: this.validade,
                codigoSeguranca: this.codigoSeguranca
            }).then(function () { _this.navCtrl.push('FecharPedidoPage'); });
        }
    };
    CartaoCreditoPage.prototype.soNumero = function () {
        if (this.numero.length > 19) {
            this.numero = this.numero.slice(0, -1);
        }
        else if (isNaN(parseInt(this.numero.substr(-1))) || this.numero.substr(-1) == "." || this.numero.substr(-1) == " ") {
            this.numero = this.numero.slice(0, -1);
        }
        else if (this.numero.trim().length == 5 || this.numero.trim().length == 10 || this.numero.trim().length == 15) {
            var ultimo = this.numero.substr(-1);
            this.numero = this.numero.slice(0, -1) + " " + ultimo;
        }
        this.numeroVazio = (this.numero.trim().length == 0);
    };
    CartaoCreditoPage.prototype.verNomeVazio = function () {
        this.nomeVazio = (this.nomeImpresso.trim().length == 0);
    };
    CartaoCreditoPage.prototype.validadeCartao = function () {
        if (this.validade.length > 5) {
            this.validade = this.validade.slice(0, -1);
        }
        else if (isNaN(parseInt(this.validade.substr(-1))) || this.validade.substr(-1) == "." || this.validade.substr(-1) == " ") {
            this.validade = this.validade.slice(0, -1);
        }
        else if (this.validade.trim().length == 3 && this.validade.substr(-1) != "/") {
            var terceiro = this.validade.substr(-1);
            this.validade = this.validade.slice(0, -1) + "/" + terceiro;
        }
        this.validadeVazio = (this.validade.trim().length == 0);
    };
    CartaoCreditoPage.prototype.varCodigoSeguranca = function () {
        if (this.codigoSeguranca.length > 3) {
            this.codigoSeguranca = this.codigoSeguranca.slice(0, -1);
        }
        else if (isNaN(parseInt(this.codigoSeguranca.substr(-1))) || this.codigoSeguranca.substr(-1) == "." || this.codigoSeguranca.substr(-1) == " ") {
            this.codigoSeguranca = this.codigoSeguranca.slice(0, -1);
        }
        this.codigoVazio = (this.codigoSeguranca.trim().length == 0);
    };
    CartaoCreditoPage.prototype.fecharModal = function () {
        this.viewCtrl.dismiss();
    };
    CartaoCreditoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cartao-credito',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\cartao-credito\cartao-credito.html"*/'<ion-header>\n    <ion-navbar color="secondary">\n      <ion-buttons left>\n        <button ion-button icon-only (tap)="fecharModal()">\n          <span ion-text showWhen="ios">Fechar</span>\n          <ion-icon showWhen="android" name="md-close"></ion-icon>\n        </button>\n      </ion-buttons>    \n      <ion-buttons right>\n        <button ion-button icon-only (tap)="salvarDados()">\n          <ion-icon name="md-checkmark"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n  \n      <ion-item no-lines>\n          <div text-center style="font-weight: bold; font-size: 120%">Pagamento</div>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label color="secondary" stacked>Número do Cartão</ion-label>\n        <ion-input (keyup)="soNumero()" type="text" [(ngModel)]="numero"></ion-input>\n      </ion-item>\n      <p text-center *ngIf="numeroVazio" style="color: red">Digite o número do cartão</p>\n  \n      <ion-item>\n        <ion-label color="secondary" stacked>Nome (igual no cartão)</ion-label>\n        <ion-input (keyup)="verNomeVazio()"  type="text" [(ngModel)]="nomeImpresso"></ion-input>\n      </ion-item>\n      <p text-center *ngIf="nomeVazio" style="color: red">Digite o nome impresso no cartão</p>\n  \n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label color="secondary" stacked>Validade (mês/ano)</ion-label>\n            <ion-input (keyup)="validadeCartao()" type="text" [(ngModel)]="validade"></ion-input>\n          </ion-item>\n          <p text-center *ngIf="validadeVazio" style="color: red">Digite a Validade do cartão</p>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label color="secondary" stacked>Código de Segurança</ion-label>\n            <ion-input (keyup)="varCodigoSeguranca()" type="text" [(ngModel)]="codigoSeguranca"></ion-input>\n          </ion-item>\n          <p text-center *ngIf="codigoVazio" style="color: red">Digite o código de segurança</p>\n        </ion-col>\n      </ion-row>\n  \n    </ion-list> \n  \n  </ion-content>\n  '/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\cartao-credito\cartao-credito.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_servicos_servicos__["a" /* ServicosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_servicos_servicos__["a" /* ServicosProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]) === "function" && _e || Object])
    ], CartaoCreditoPage);
    return CartaoCreditoPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=cartao-credito.js.map

/***/ })

});
//# sourceMappingURL=4.js.map