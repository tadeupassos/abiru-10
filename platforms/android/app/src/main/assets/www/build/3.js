webpackJsonp([3],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroClientePageModule", function() { return CadastroClientePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cliente__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pluritech_ion_mask__ = __webpack_require__(288);
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

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(60);
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
    function CadastroClientePage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.model = {
            nomFantasia: '',
            cnpj: '',
            celular: '',
            cep: '',
            endereco: '',
            numero: '',
            cidade: ''
        };
    }
    CadastroClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroClientePage');
    };
    CadastroClientePage.prototype.pronto = function () {
        /*this.database.list('usuarios')
          .push({
            nomeFantasia: this.model.nomFantasia,
            cnpj: this.model.cnpj,
            celular: this.model.celular,
            cep: this.model.cep,
            endereco: this.model.endereco,
            numero: this.model.numero,
            cidade: this.model.cidade
           });*/
        this.navCtrl.push('FecharPedidoPage');
    };
    CadastroClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cadastro-cliente',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\cadastro-cliente\cadastro-cliente.html"*/'<ion-content>\n\n\n      <ion-list>\n\n        <ion-item>\n          <h2 text-center>Completar Cadastro</h2>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" stacked>Nome Fantasia</ion-label>\n          <ion-input type="text" [(ngModel)]="model.nomeFantasia"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" stacked>CNPJ</ion-label>\n          <ion-input type="text" [(ngModel)]="model.cnpj"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" stacked>Telefone</ion-label>\n          <ion-input type="text" [(ngModel)]="model.celular"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" stacked>CEP</ion-label>\n          <ion-input type="text" [(ngModel)]="model.cep"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" stacked>Endereço</ion-label>\n          <ion-input type="text" [(ngModel)]="model.endereco"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" stacked>Número</ion-label>\n          <ion-input type="text" [(ngModel)]="model.numero"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color="primary" stacked>Cidade</ion-label>\n          <ion-input type="text" [(ngModel)]="model.cidade"></ion-input>\n        </ion-item>\n\n        <button ion-button full round color="secundary" (tap)="pronto(model)">Pronto</button>\n      </ion-list>\n\n\n\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\cadastro-cliente\cadastro-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CadastroClientePage);
    return CadastroClientePage;
}());

//# sourceMappingURL=cadastro-cliente.js.map

/***/ })

});
//# sourceMappingURL=3.js.map