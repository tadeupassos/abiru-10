webpackJsonp([2],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FecharPedidoPageModule", function() { return FecharPedidoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fechar_pedido__ = __webpack_require__(457);
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

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FecharPedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abbas_abbas__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FecharPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FecharPedidoPage = /** @class */ (function () {
    function FecharPedidoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FecharPedidoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FecharPedidoPage');
    };
    FecharPedidoPage.prototype.voltar = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__abbas_abbas__["a" /* AbbasPage */]);
    };
    FecharPedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fechar-pedido',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\fechar-pedido\fechar-pedido.html"*/'<ion-content id="fundo">\n\n    <ion-card text-wrap>\n      <h1 color="secondary" text-center>Pedido Enviado!</h1>\n    </ion-card>\n\n    <ion-card>\n      <ion-row>\n        <ion-col text-center style="font-size: 20px">\n          Segue o código do seu pedido:\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col text-center style="font-size: 60px">\n          15654\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <ion-card>\n      <ion-row>\n        <ion-col text-center style="font-size: 20px">\n          Enviamos o código do seu pedido para o seu email.\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n    <button ion-button full round (tap)="voltar()">Ok</button>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\fechar-pedido\fechar-pedido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], FecharPedidoPage);
    return FecharPedidoPage;
}());

//# sourceMappingURL=fechar-pedido.js.map

/***/ })

});
//# sourceMappingURL=2.js.map