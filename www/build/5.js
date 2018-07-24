webpackJsonp([5],{

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalhePedidoPageModule", function() { return DetalhePedidoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalhe_pedido__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetalhePedidoPageModule = /** @class */ (function () {
    function DetalhePedidoPageModule() {
    }
    DetalhePedidoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detalhe_pedido__["a" /* DetalhePedidoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__detalhe_pedido__["a" /* DetalhePedidoPage */]),
            ],
        })
    ], DetalhePedidoPageModule);
    return DetalhePedidoPageModule;
}());

//# sourceMappingURL=detalhe-pedido.module.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhePedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetalhePedidoPage = /** @class */ (function () {
    function DetalhePedidoPage(navCtrl, navParams, viewCtrl, serv, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.serv = serv;
        this.modalCtrl = modalCtrl;
        if (this.navParams.data.detalhe) {
            this.status = this.navParams.data.detalhe.status;
            this.corStatus = this.navParams.data.detalhe.corStatus;
            this.items = this.navParams.data.detalhe.items;
            console.log("qtde " + this.items);
            console.log("detalhe " + JSON.stringify(this.items));
        }
    }
    DetalhePedidoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalhePedidoPage');
    };
    DetalhePedidoPage.prototype.fecharModal = function () {
        this.viewCtrl.dismiss();
    };
    DetalhePedidoPage.prototype.reutilizar = function () {
        this.serv.carrinho = this.items;
        this.serv.qtdeCarrinho = this.items.length;
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__["a" /* CarrinhoPage */]).present();
        this.viewCtrl.dismiss();
    };
    DetalhePedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detalhe-pedido',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\detalhe-pedido\detalhe-pedido.html"*/'<ion-header>\n    <ion-navbar color="secondary">\n      <ion-title>\n        Pedido {{ status }}\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n<ion-content>\n  <ion-list>\n    <ion-item text-wrap *ngFor="let item of items">\n      <ion-row>\n        <ion-col>\n          <ion-row>\n            <ion-col style="font-size: 16px; font-weight: bold">\n              {{ item.itemNome }}\n            </ion-col>\n            <ion-col col-5 style="font-size: 16px;">\n              Quantidade: <span style="font-weight: bold">{{ item.qtdeItem }}</span>\n            </ion-col>            \n          </ion-row>\n          <ion-row>  \n            <ion-col style="font-size: 18px">\n             R$ {{ item.preco }} <span style="font-weight: normal; font-size: 14px;">{{ item.medida }}</span>\n            </ion-col>   \n            <ion-col col-5 style="color:slategrey" style="font-size: 15px; font-weight: bold">\n              Subtotal: <span style="font-size: 18px">{{ item.subTotal }}</span>\n            </ion-col>\n          </ion-row> \n        </ion-col>         \n      </ion-row>  \n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n    <ion-toolbar color="secondary">\n      <button ion-button full color="primary" (tap)="reutilizar()">Reutilizar este pedido</button>\n    </ion-toolbar>\n  </ion-footer>  '/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\detalhe-pedido\detalhe-pedido.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__["a" /* ServicosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__["a" /* ServicosProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]) === "function" && _e || Object])
    ], DetalhePedidoPage);
    return DetalhePedidoPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=detalhe-pedido.js.map

/***/ })

});
//# sourceMappingURL=5.js.map