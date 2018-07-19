webpackJsonp([7],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroClientePageModule", function() { return CadastroClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cliente__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pluritech_ion_mask__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pluritech_ion_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pluritech_ion_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CadastroClientePageModule = /** @class */ (function () {
    function CadastroClientePageModule() {
    }
    CadastroClientePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_cliente__["a" /* CadastroClientePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_cliente__["a" /* CadastroClientePage */]),
                __WEBPACK_IMPORTED_MODULE_3__pluritech_ion_mask__["IonMaskModule"].forRoot()
            ],
        })
    ], CadastroClientePageModule);
    return CadastroClientePageModule;
}());

//# sourceMappingURL=cadastro-cliente.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicos_servicos__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastroClientePage = /** @class */ (function () {
    function CadastroClientePage(navCtrl, navParams, database, serv, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.serv = serv;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.nomeFantasia = '';
        this.cnpj = '';
        this.telefone = '';
        this.nomeVazio = false;
        this.cnpjVazio = false;
        this.telefoneVazio = false;
    }
    CadastroClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroClientePage');
    };
    CadastroClientePage.prototype.voltar = function () {
        this.navCtrl.pop();
    };
    CadastroClientePage.prototype.salvarDados = function () {
        var _this = this;
        if (this.nomeFantasia.trim().length == 0) {
            this.nomeVazio = true;
        }
        else if (this.cnpj.trim().length == 0) {
            this.cnpjVazio = true;
        }
        else if (this.telefone.trim().length == 0) {
            this.telefoneVazio = true;
        }
        else {
            this.database.list('clientes')
                .push({
                clienteId: this.serv.usuarioLogado.clienteId,
                cliente: {
                    nomeFantasia: this.nomeFantasia,
                    cnpj: this.cnpj,
                    telefone: this.telefone
                },
                enderecoEntrega: "",
                enderecoCobranca: "",
                cartaoCredito: "",
                entregaEscolhida: ""
            }).then(function (result) {
                if (_this.serv.usuarioLogado.enderecoEntrega.endereco == "") {
                    _this.modalCtrl.create('CadastroEnderecoPage').present();
                }
                else if (_this.serv.usuarioLogado.cartaoCredito.numero == "") {
                    _this.modalCtrl.create('CartaoCreditoPage').present();
                }
                else {
                    _this.navCtrl.push('FecharPedidoPage');
                }
                _this.viewCtrl.dismiss();
                _this.serv.usuarioLogado.key = result.key;
            });
        }
    };
    CadastroClientePage.prototype.verCnpj = function () {
        var ultimo;
        if (this.cnpj.length > 18) {
            this.cnpj = this.cnpj.slice(0, -1);
        }
        else if (isNaN(parseInt(this.cnpj.substr(-1))) || this.cnpj.substr(-1) == "." || this.cnpj.substr(-1) == " " || this.cnpj.substr(-1) == "/" || this.cnpj.substr(-1) == "-") {
            this.cnpj = this.cnpj.slice(0, -1);
        }
        else if (this.cnpj.length == 3 || this.cnpj.length == 7) {
            ultimo = this.cnpj.substr(-1);
            this.cnpj = this.cnpj.slice(0, -1) + "." + ultimo;
        }
        else if (this.cnpj.length == 11) {
            ultimo = this.cnpj.substr(-1);
            this.cnpj = this.cnpj.slice(0, -1) + "/" + ultimo;
        }
        else if (this.cnpj.length == 16) {
            ultimo = this.cnpj.substr(-1);
            this.cnpj = this.cnpj.slice(0, -1) + "-" + ultimo;
        }
        this.cnpjVazio = (this.cnpj.trim().length == 0);
    };
    CadastroClientePage.prototype.numeroTel = function () {
        if (this.telefone.trim().length > 13) {
            this.telefone = this.telefone.slice(0, -1);
        }
        else if (isNaN(parseInt(this.telefone.substr(-1))) || this.telefone.substr(-1) == "." || this.telefone.substr(-1) == " ") {
            this.telefone = this.telefone.slice(0, -1);
        }
        else if (this.telefone.length == 3 || this.telefone.length == 9) {
            var ultimo = this.telefone.substr(-1);
            this.telefone = this.telefone.slice(0, -1) + " " + ultimo;
        }
        this.telefoneVazio = (this.telefone.trim().length == 0);
    };
    CadastroClientePage.prototype.campoNomeVazio = function () {
        this.nomeVazio = (this.nomeFantasia.trim().length == 0);
    };
    CadastroClientePage.prototype.fecharModal = function () {
        this.viewCtrl.dismiss();
    };
    CadastroClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cadastro-cliente',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\cadastro-cliente\cadastro-cliente.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-buttons right>\n      <button ion-button icon-only (tap)="fecharModal()">\n        <span ion-text showWhen="ios">Fechar</span>\n        <ion-icon showWhen="android" name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>    \n    <!--<ion-buttons right>\n      <button ion-button icon-only (tap)="salvarDados()">\n        <ion-icon name="md-checkmark"></ion-icon>\n      </button>\n    </ion-buttons>-->\n    <ion-title>Complete o cadastro</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <!--<ion-item no-lines>\n        <div text-center style="font-weight: bold; font-size: 120%">Complete o cadastro</div>\n    </ion-item>-->\n\n    <ion-item no-lines text-wrap>\n      <div text-center style="color:dimgray; font-size: 100%; margin-left: 20px; margin-right: 20px">Falta pouco! Complete o seu cadastro abaixo e finalize sua compra.</div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="secondary" stacked>Nome Fantasia</ion-label>\n      <ion-input (keyup)="campoNomeVazio()" type="text" [(ngModel)]="nomeFantasia"></ion-input>\n    </ion-item>\n    <p text-center *ngIf="nomeVazio" style="color: red">Digite o Nome Fantasia</p>\n\n    <ion-item>\n      <ion-label color="secondary" stacked>CNPJ</ion-label>\n      <ion-input (keyup)="verCnpj()" type="text" [(ngModel)]="cnpj"></ion-input>\n    </ion-item>\n    <p text-center *ngIf="cnpjVazio" style="color: red">Digite o CNPJ</p>\n\n    <ion-item>\n      <ion-label color="secondary" stacked>Telefone</ion-label>\n      <ion-input (keyup)="numeroTel()" type="text" [(ngModel)]="telefone"></ion-input>\n    </ion-item>\n    <p text-center *ngIf="telefoneVazio" style="color: red">Digite o Telefone</p>\n\n  </ion-list> \n  <button ion-button block outline color="secondary" (tap)="salvarDados()">Salvar</button>\n</ion-content>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\cadastro-cliente\cadastro-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__providers_servicos_servicos__["a" /* ServicosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], CadastroClientePage);
    return CadastroClientePage;
}());

//# sourceMappingURL=cadastro-cliente.js.map

/***/ })

});
//# sourceMappingURL=7.js.map