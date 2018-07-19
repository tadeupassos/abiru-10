webpackJsonp([3],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscolherEntregaPageModule", function() { return EscolherEntregaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__escolher_entrega__ = __webpack_require__(468);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EscolherEntregaPageModule = /** @class */ (function () {
    function EscolherEntregaPageModule() {
    }
    EscolherEntregaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__escolher_entrega__["a" /* EscolherEntregaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__escolher_entrega__["a" /* EscolherEntregaPage */]),
            ],
        })
    ], EscolherEntregaPageModule);
    return EscolherEntregaPageModule;
}());

//# sourceMappingURL=escolher-entrega.module.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolherEntregaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_angularfire2_database__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EscolherEntregaPage = /** @class */ (function () {
    //dataMinima = new Date().getFullYear() + "-" + new Date().getMonth() + "-" + new Date().getDay();
    function EscolherEntregaPage(navCtrl, navParams, viewCtrl, serv, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.serv = serv;
        this.database = database;
        this.dataEntrega = "";
        this.periodoEntrega = "";
        this.dataEntregaVazio = false;
        this.periodoVazio = false;
        if (this.navParams.data.entrega) {
            this.dataEntrega = this.navParams.data.entrega.dataEntrega;
            this.periodoEntrega = this.navParams.data.entrega.periodoEntrega;
        }
    }
    EscolherEntregaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EscolherEntregaPage');
    };
    EscolherEntregaPage.prototype.fecharModal = function () {
        this.viewCtrl.dismiss();
    };
    EscolherEntregaPage.prototype.salvarEntrega = function () {
        var _this = this;
        if (this.dataEntrega == "") {
            this.dataEntregaVazio = true;
        }
        else if (this.periodoEntrega == "") {
            this.periodoVazio = true;
        }
        else {
            var chave = this.serv.usuarioLogado.key;
            this.database.list('clientes')
                .update(chave, {
                entregaEscolhida: {
                    dataEntrega: this.dataEntrega,
                    periodoEntrega: this.periodoEntrega
                }
            }).then(function () {
                _this.serv.usuarioLogado.entregaEscolhida.dataEntrega = _this.dataEntrega;
                _this.serv.usuarioLogado.entregaEscolhida.periodoEntrega = _this.periodoEntrega;
                _this.fecharModal();
            });
        }
    };
    EscolherEntregaPage.prototype.verDataEntrega = function () {
        this.dataEntregaVazio = (this.dataEntrega == "");
    };
    EscolherEntregaPage.prototype.verPeriodoEntrega = function () {
        this.periodoVazio = (this.periodoEntrega == "");
    };
    EscolherEntregaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-escolher-entrega',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\escolher-entrega\escolher-entrega.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <!--<ion-buttons right>\n      <button ion-button icon-only (tap)="fecharModal()">\n        <span ion-text showWhen="ios">Fechar</span>\n        <ion-icon showWhen="android" name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>    -->\n    <ion-title>Entregar Quando?</ion-title>\n  </ion-navbar>\n</ion-header>\n  \n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label>Data de Entrega:</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" min="2018-07-18" [(ngModel)]="dataEntrega" (ionChange)="verDataEntrega()"></ion-datetime>\n    </ion-item>\n  </ion-list> \n  <p text-center *ngIf="dataEntregaVazio" style="color: red">Preencha a data de entrega</p>\n  <ion-list radio-group [(ngModel)]="periodoEntrega">\n\n    <ion-list-header>\n      Período para entrega:\n    </ion-list-header>\n  \n    <ion-item>\n      <ion-label>Manhã</ion-label>\n      <ion-radio value="manhã" (ionSelect)="verPeriodoEntrega()"></ion-radio>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Tarde</ion-label>\n      <ion-radio value="tarde" (ionSelect)="verPeriodoEntrega()"></ion-radio>\n    </ion-item>\n  </ion-list>\n  <p text-center *ngIf="periodoVazio" style="color: red">Escolha o período da entrega</p>\n  <button ion-button block outline color="secondary" (tap)="salvarEntrega()">Salvar</button>\n</ion-content>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\escolher-entrega\escolher-entrega.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__["a" /* ServicosProvider */], __WEBPACK_IMPORTED_MODULE_3__node_modules_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EscolherEntregaPage);
    return EscolherEntregaPage;
}());

//# sourceMappingURL=escolher-entrega.js.map

/***/ })

});
//# sourceMappingURL=3.js.map