webpackJsonp([7],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbbasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__frutas_frutas__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vegetais_vegetais__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lista_pedido_lista_pedido__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AbbasPage = /** @class */ (function () {
    function AbbasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__frutas_frutas__["a" /* FrutasPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__vegetais_vegetais__["a" /* VegetaisPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__lista_pedido_lista_pedido__["a" /* ListaPedidoPage */];
    }
    AbbasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbbasPage');
    };
    AbbasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-abbas',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\abbas\abbas.html"*/'<ion-tabs color="secondary">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Frutas" tabIcon="logo-apple" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Vegetais" tabIcon="ios-nutrition-outline" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Pedidos" tabIcon="ios-list-box-outline" tabsHideOnSubPages="true"></ion-tab>  \n</ion-tabs>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\abbas\abbas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], AbbasPage);
    return AbbasPage;
}());

//# sourceMappingURL=abbas.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro-cliente/cadastro-cliente.module": [
		453,
		6
	],
	"../pages/cadastro-endereco/cadastro-endereco.module": [
		454,
		5
	],
	"../pages/cartao-credito/cartao-credito.module": [
		455,
		4
	],
	"../pages/endereco-cobranca/endereco-cobranca.module": [
		456,
		3
	],
	"../pages/fechar-pedido/fechar-pedido.module": [
		457,
		2
	],
	"../pages/login/login.module": [
		458,
		1
	],
	"../pages/registrar/registrar.module": [
		459,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 190;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(45);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, serv, modalCtrl, database, toastCtrl) {
        this.navCtrl = navCtrl;
        this.serv = serv;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.buscaLetra = '';
        this.qtdeCarrinho = 0;
        this.produtos = [];
        this.produtosItem = database.list('produtos', function (ref) { return ref.orderByChild('preco'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (p) { return (__assign({ key: p.payload.key }, p.payload.val())); });
        });
    }
    HomePage.prototype.filtrarPorLetra = function () {
        var _this = this;
        this.produtosItem = this.produtosItem.map(function (changes) { return changes.filter(function (item) {
            return item.itemNome.toLowerCase().indexOf(_this.buscaLetra.toLowerCase()) > -1;
        }); });
    };
    HomePage.prototype.ionViewWillEnter = function () {
        this.qtdeCarrinho = this.serv.qtdeCarrinho;
    };
    HomePage.prototype.ionViewWillLeave = function () {
        this.serv.qtdeCarrinho = this.qtdeCarrinho;
    };
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.mostrarCarrinho = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__["a" /* CarrinhoPage */]);
        modal.present();
    };
    HomePage.prototype.remover = function (produto) {
        this.serv.remover(produto);
    };
    HomePage.prototype.adicionar = function (produto) {
        this.serv.adicionar(produto);
    };
    HomePage.prototype.addCarrinho = function (produto) {
        this.serv.addCarrinho(produto);
        this.qtdeCarrinho = this.serv.qtdeCarrinho;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <!--<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>--> \n    <ion-title>\n      Abiru\n    </ion-title>\n    <ion-buttons right (tap)="mostrarCarrinho()">\n      <button ion-button icon-only large>\n        <ion-icon name="cart" style="font-size: 40px"><ion-badge start color="danger">{{ qtdeCarrinho }}</ion-badge></ion-icon>\n      </button>     \n    </ion-buttons>         \n  </ion-navbar>\n</ion-header>\n \n<ion-content id="fundo">\n  <ion-searchbar [(ngModel)]="buscaLetra" (ionInput)="filtrarPorLetra()" placeholder="Buscar">\n  </ion-searchbar> \n\n  <ion-list>\n    <ion-card *ngFor="let produto of produtosItem | async">\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col text-center col-4>\n            <img [src]="produto.urlImg">\n          </ion-col>\n          <ion-col col-4>\n            <ion-row>\n              <ion-col text-center>\n                <div style="font-size: 15px">{{ produto.itemNome }}</div>\n              </ion-col>\n            </ion-row> \n            <ion-row>\n              <ion-col text-center>\n                <div style="font-weight: bold; font-size: 20px"> R$ {{ produto.preco }} </div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-4>\n            <ion-row style="font-size: 25px">\n              <ion-col col-4 text-left>\n                <ion-icon name="ios-remove-circle-outline" (tap)="remover(produto)"></ion-icon>\n              </ion-col>\n              <ion-col col-4 text-center style="font-size: 20px">\n                {{ produto.qtdeItem }}\n              </ion-col>\n              <ion-col col-4 text-right>\n                <ion-icon name="ios-add-circle-outline" (tap)="adicionar(produto)"></ion-icon>\n              </ion-col> \n            </ion-row>\n            <ion-row style="font-size: 11px; margin-top: -10px; margin-bottom: -10px">\n              <ion-col text-center style="font-weight: bold">\n                {{ produto.medida }}\n              </ion-col>\n            </ion-row>            \n            <ion-row>\n              <ion-col text-center>\n                <button style="font-size: 16px" ion-button small icon-start (tap)="addCarrinho(produto)">\n                  <!--<ion-icon name="cart"></ion-icon>-->\n                  Comprar\n                </button>\n              </ion-col>            \n            </ion-row> \n          </ion-col>\n        </ion-row>\n      </ion-grid> \n    </ion-card> \n  </ion-list> \n</ion-content>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__["a" /* ServicosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrutasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__ = __webpack_require__(75);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FrutasPage = /** @class */ (function () {
    function FrutasPage(navCtrl, navParams, serv, database, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serv = serv;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.buscaLetra = '';
        this.qtdeCarrinho = 0;
        this.produtosItem = database.list('produtos', function (ref) { return ref.orderByChild('tipo').equalTo('fruta'); })
            .snapshotChanges().map(function (changes) {
            return changes.map(function (f) { return (__assign({ key: f.payload.key }, f.payload.val())); });
        });
    }
    FrutasPage.prototype.filtrarPorLetra = function () {
        var _this = this;
        this.produtosItem = this.produtosItem.map(function (changes) { return changes.filter(function (item) {
            return item.itemNome.toLowerCase().indexOf(_this.buscaLetra.toLowerCase()) > -1;
        }); });
    };
    FrutasPage.prototype.ionViewWillEnter = function () {
        this.qtdeCarrinho = this.serv.qtdeCarrinho;
    };
    FrutasPage.prototype.ionViewWillLeave = function () {
        this.serv.qtdeCarrinho = this.qtdeCarrinho;
    };
    FrutasPage.prototype.mostrarCarrinho = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__["a" /* CarrinhoPage */]);
        modal.present();
    };
    FrutasPage.prototype.remover = function (produto) {
        this.serv.remover(produto);
    };
    FrutasPage.prototype.adicionar = function (produto) {
        this.serv.adicionar(produto);
    };
    FrutasPage.prototype.addCarrinho = function (produto) {
        this.serv.addCarrinho(produto);
        this.qtdeCarrinho = this.serv.qtdeCarrinho;
    };
    FrutasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-frutas',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\frutas\frutas.html"*/'<ion-header>\n    <ion-navbar color="secondary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>    \n      <ion-title>\n        Frutas\n      </ion-title>\n      <ion-buttons right (tap)="mostrarCarrinho()">\n        <button ion-button icon-only large>\n          <ion-icon name="cart" style="font-size: 40px"><ion-badge start color="danger">{{ qtdeCarrinho }}</ion-badge></ion-icon>\n        </button>     \n      </ion-buttons>         \n    </ion-navbar>\n  </ion-header>\n\n\n  <ion-content id="fundo">\n    <ion-searchbar [(ngModel)]="buscaLetra" (ionInput)="filtrarPorLetra()" placeholder="Buscar">\n    </ion-searchbar>  \n  \n    <ion-list>\n      <ion-card *ngFor="let produto of produtosItem | async">\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col text-center col-4>\n              <img [src]="produto.urlImg">\n            </ion-col>\n            <ion-col col-4>\n              <ion-row>\n                <ion-col text-center>\n                  <div style="font-size: 15px">{{ produto.itemNome }}</div>\n                </ion-col>\n              </ion-row> \n              <ion-row>\n                <ion-col text-center>\n                  <div style="font-weight: bold; font-size: 20px"> R$ {{ produto.preco }} </div>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col col-4>\n              <ion-row style="font-size: 25px">\n                <ion-col col-4 text-left>\n                  <ion-icon name="ios-remove-circle-outline" (tap)="remover(produto)"></ion-icon>\n                </ion-col>\n                <ion-col col-4 text-center style="font-size: 20px">\n                  {{ produto.qtdeItem }}\n                </ion-col>\n                <ion-col col-4 text-right>\n                  <ion-icon name="ios-add-circle-outline" (tap)="adicionar(produto)"></ion-icon>\n                </ion-col> \n              </ion-row>\n              <ion-row style="font-size: 11px; margin-top: -10px; margin-bottom: -10px">\n                <ion-col text-center>\n                  {{ produto.medida }}\n                </ion-col>\n              </ion-row>            \n              <ion-row>\n                <ion-col text-center>\n                  <button style="font-size: 16px" ion-button small icon-start (tap)="addCarrinho(produto)">\n                    <!--<ion-icon name="cart"></ion-icon>-->\n                    Comprar\n                  </button>\n                </ion-col>            \n              </ion-row> \n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </ion-card> \n    </ion-list> \n  </ion-content>'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\frutas\frutas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__["a" /* ServicosProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], FrutasPage);
    return FrutasPage;
}());

//# sourceMappingURL=frutas.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VegetaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(45);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VegetaisPage = /** @class */ (function () {
    function VegetaisPage(navCtrl, navParams, serv, modalCtrl, database, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serv = serv;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.buscaLetra = '';
        this.qtdeCarrinho = 0;
        this.produtosItem = database.list('produtos', function (ref) { return ref.orderByChild('tipo').equalTo('vegetal'); })
            .snapshotChanges().map(function (changes) {
            return changes.map(function (f) { return (__assign({ key: f.payload.key }, f.payload.val())); });
        });
    }
    VegetaisPage.prototype.filtrarPorLetra = function () {
        var _this = this;
        this.produtosItem = this.produtosItem.map(function (changes) { return changes.filter(function (item) {
            return item.itemNome.toLowerCase().indexOf(_this.buscaLetra.toLowerCase()) > -1;
        }); });
    };
    VegetaisPage.prototype.ionViewWillEnter = function () {
        this.qtdeCarrinho = this.serv.qtdeCarrinho;
    };
    VegetaisPage.prototype.ionViewWillLeave = function () {
        this.serv.qtdeCarrinho = this.qtdeCarrinho;
    };
    VegetaisPage.prototype.mostrarCarrinho = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__["a" /* CarrinhoPage */]);
        modal.present();
    };
    VegetaisPage.prototype.remover = function (produto) {
        this.serv.remover(produto);
    };
    VegetaisPage.prototype.adicionar = function (produto) {
        this.serv.adicionar(produto);
    };
    VegetaisPage.prototype.addCarrinho = function (produto) {
        this.serv.addCarrinho(produto);
        this.qtdeCarrinho = this.serv.qtdeCarrinho;
    };
    VegetaisPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-vegetais',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\vegetais\vegetais.html"*/'<ion-header>\n    <ion-navbar color="secondary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu">      \n        </ion-icon>\n      </button>    \n      <ion-title>\n        Vegetais\n      </ion-title>\n      <ion-buttons right (tap)="mostrarCarrinho()">\n        <button ion-button icon-only large>\n          <ion-icon name="cart" style="font-size: 40px"><ion-badge start color="danger">{{ qtdeCarrinho }}</ion-badge></ion-icon>\n        </button>     \n      </ion-buttons>         \n    </ion-navbar>\n  </ion-header>\n\n  <ion-content id="fundo">\n    <ion-searchbar [(ngModel)]="buscaLetra" (ionInput)="filtrarPorLetra()" placeholder="Buscar">\n    </ion-searchbar>  \n  \n    <ion-list>\n      <ion-card *ngFor="let produto of produtosItem | async">\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col text-center col-4>\n              <img [src]="produto.urlImg">\n            </ion-col>\n            <ion-col col-4>\n              <ion-row>\n                <ion-col text-center>\n                  <div style="font-size: 15px">{{ produto.itemNome }}</div>\n                </ion-col>\n              </ion-row> \n              <ion-row>\n                <ion-col text-center>\n                  <div style="font-weight: bold; font-size: 20px"> R$ {{ produto.preco }} </div>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col col-4>\n              <ion-row style="font-size: 25px">\n                <ion-col col-4 text-left>\n                  <ion-icon name="ios-remove-circle-outline" (tap)="remover(produto)"></ion-icon>\n                </ion-col>\n                <ion-col col-4 text-center style="font-size: 20px">\n                  {{ produto.qtdeItem }}\n                </ion-col>\n                <ion-col col-4 text-right>\n                  <ion-icon name="ios-add-circle-outline" (tap)="adicionar(produto)"></ion-icon>\n                </ion-col> \n              </ion-row>\n              <ion-row style="font-size: 11px; margin-top: -10px; margin-bottom: -10px">\n                <ion-col text-center>\n                  {{ produto.medida }}\n                </ion-col>\n              </ion-row>            \n              <ion-row>\n                <ion-col text-center>\n                  <button style="font-size: 16px" ion-button small icon-start (tap)="addCarrinho(produto)">\n                    <!--<ion-icon name="cart"></ion-icon>-->\n                    Comprar\n                  </button>\n                </ion-col>            \n              </ion-row> \n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </ion-card> \n    </ion-list> \n  </ion-content>'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\vegetais\vegetais.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__["a" /* ServicosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], VegetaisPage);
    return VegetaisPage;
}());

//# sourceMappingURL=vegetais.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaPedidoPage = /** @class */ (function () {
    function ListaPedidoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListaPedidoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaPedidoPage');
    };
    ListaPedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lista-pedido',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\lista-pedido\lista-pedido.html"*/'<ion-header>\n\n  <ion-toolbar color="secondary">\n    <ion-title>Pedidos</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\lista-pedido\lista-pedido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ListaPedidoPage);
    return ListaPedidoPage;
}());

//# sourceMappingURL=lista-pedido.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(310);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_abbas_abbas__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_vegetais_vegetais__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_frutas_frutas__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_carrinho_carrinho__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_lista_pedido_lista_pedido__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_servicos_servicos__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pluritech_ion_mask__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pluritech_ion_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__pluritech_ion_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var firebaseConfig = {
    apiKey: "AIzaSyCBazjQytaKuBMdV7ReWPB-pm9OSwo2d_k",
    authDomain: "abiro-10.firebaseapp.com",
    databaseURL: "https://abiro-10.firebaseio.com",
    projectId: "abiro-10",
    storageBucket: "abiro-10.appspot.com",
    messagingSenderId: "329145715736"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_vegetais_vegetais__["a" /* VegetaisPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_frutas_frutas__["a" /* FrutasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_abbas_abbas__["a" /* AbbasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_lista_pedido_lista_pedido__["a" /* ListaPedidoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro-cliente/cadastro-cliente.module#CadastroClientePageModule', name: 'CadastroClientePage', segment: 'cadastro-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-endereco/cadastro-endereco.module#CadastroEnderecoPageModule', name: 'CadastroEnderecoPage', segment: 'cadastro-endereco', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cartao-credito/cartao-credito.module#CartaoCreditoPageModule', name: 'CartaoCreditoPage', segment: 'cartao-credito', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/endereco-cobranca/endereco-cobranca.module#EnderecoCobrancaPageModule', name: 'EnderecoCobrancaPage', segment: 'endereco-cobranca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fechar-pedido/fechar-pedido.module#FecharPedidoPageModule', name: 'FecharPedidoPage', segment: 'fechar-pedido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrar/registrar.module#RegistrarPageModule', name: 'RegistrarPage', segment: 'registrar', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17__pluritech_ion_mask__["IonMaskModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_vegetais_vegetais__["a" /* VegetaisPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_frutas_frutas__["a" /* FrutasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_abbas_abbas__["a" /* AbbasPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_lista_pedido_lista_pedido__["a" /* ListaPedidoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_16__providers_servicos_servicos__["a" /* ServicosProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(45);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';





var ServicosProvider = /** @class */ (function () {
    function ServicosProvider(http, toastCtrl, database) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.database = database;
        this.qtdeCarrinho = 0;
        this.carrinho = [];
        this.totalPagar = "";
        this.usuarioLogado = {
            key: "",
            clienteId: "",
            email: "",
            nomeFantasia: "",
            cnpj: "",
            telefone: "",
            enderecoEntrega: {
                key: "",
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
                key: "",
                endereco: "",
                numero: "",
                complemento: "",
                bairro: "",
                cep: "",
                cidade: "",
                estado: ""
            },
            cartaoCredito: {
                key: "",
                numero: "",
                nomeImpresso: "",
                validade: "",
                codigoSeguranca: ""
            }
        };
    }
    ServicosProvider.prototype.remover = function (produto) {
        var valor = parseInt(produto.qtdeItem);
        if (valor > 0) {
            valor--;
        }
        produto.qtdeItem = valor.toString();
    };
    ServicosProvider.prototype.adicionar = function (produto) {
        produto.qtdeItem++;
    };
    ServicosProvider.prototype.addCarrinho = function (produto) {
        if (produto.qtdeItem > 0) {
            var itemNoCarrinho = this.carrinho.filter(function (p) {
                return p.key == produto.key;
            });
            if (itemNoCarrinho.length > 0) {
                itemNoCarrinho[0].qtdeItem = parseInt(itemNoCarrinho[0].qtdeItem) + parseInt(produto.qtdeItem);
                this.carrinho = this.carrinho.filter(function (p) {
                    return p.key != produto.key;
                });
                this.carrinho.unshift(itemNoCarrinho[0]);
            }
            else {
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
        }
        else {
            this.igualZero(produto.medida);
        }
    };
    ServicosProvider.prototype.produtoAdicionado = function () {
        var toast = this.toastCtrl.create({
            message: 'Produto adicionado ao carrinho.',
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    ServicosProvider.prototype.igualZero = function (medida) {
        var toast = this.toastCtrl.create({
            message: 'Por favor, ' + medida + ' não pode ser igual 0.',
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    ServicosProvider.prototype.calculaSubTotal = function (valor, qtde) {
        var valorDecimal = 0;
        valorDecimal = parseFloat(valor.replace(',', '.'));
        valorDecimal = valorDecimal * parseInt(qtde);
        return valorDecimal.toFixed(2).toString().replace('.', ',');
    };
    ServicosProvider.prototype.calcularTotal = function (subTotal, totalPagar, operacao) {
        var valorDecimal1, valorDecimal2, resultado = 0;
        valorDecimal1 = parseFloat(subTotal.replace(',', '.'));
        valorDecimal2 = parseFloat(totalPagar.replace(',', '.'));
        if (operacao == '+') {
            resultado = valorDecimal2 + valorDecimal1;
        }
        else {
            resultado = valorDecimal2 - valorDecimal1;
        }
        return resultado.toFixed(2).toString().replace('.', ',');
    };
    ServicosProvider.prototype.carregarUsuario = function (usuario) {
        var _this = this;
        this.usuarioLogado.clienteId = usuario.uid;
        this.usuarioLogado.email = usuario.email;
        this.database.list('cadastroCliente', function (ref) { return ref.orderByChild('clienteId').equalTo(usuario.uid); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (p) { return (__assign({ key: p.payload.key }, p.payload.val())); });
        }).forEach(function (item) {
            if (item.length > 0) {
                _this.usuarioLogado.key = item[0].key;
                _this.usuarioLogado.nomeFantasia = item[0].nomeFantasia;
                _this.usuarioLogado.cnpj = item[0].cnpj;
                _this.usuarioLogado.telefone = item[0].telefone;
            }
        });
        this.database.list('enderecoEntrega', function (ref) { return ref.orderByChild('clienteId').equalTo(usuario.uid); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (p) { return (__assign({ key: p.payload.key }, p.payload.val())); });
        }).forEach(function (entrega) {
            if (entrega.length > 0) {
                _this.usuarioLogado.enderecoEntrega.key = entrega[0].key;
                _this.usuarioLogado.enderecoEntrega.endereco = entrega[0].endereco;
                _this.usuarioLogado.enderecoEntrega.numero = entrega[0].numero;
                _this.usuarioLogado.enderecoEntrega.complemento = entrega[0].complemento;
                _this.usuarioLogado.enderecoEntrega.bairro = entrega[0].bairro;
                _this.usuarioLogado.enderecoEntrega.cep = entrega[0].cep;
                _this.usuarioLogado.enderecoEntrega.cidade = entrega[0].cidade;
                _this.usuarioLogado.enderecoEntrega.estado = entrega[0].estado;
                _this.usuarioLogado.enderecoEntrega.mesmoEnderecoCobranca = entrega[0].mesmoEnderecoCobranca;
            }
        });
        if (this.usuarioLogado.enderecoEntrega.mesmoEnderecoCobranca) {
            this.database.list('enderecoCobranca', function (ref) { return ref.orderByChild('clienteId').equalTo(usuario.uid); })
                .snapshotChanges()
                .map(function (changes) {
                return changes.map(function (p) { return (__assign({ key: p.payload.key }, p.payload.val())); });
            }).forEach(function (cobranca) {
                if (cobranca.length > 0) {
                    _this.usuarioLogado.enderecoCobranca.key = cobranca[0].key;
                    _this.usuarioLogado.enderecoCobranca.endereco = cobranca[0].endereco;
                    _this.usuarioLogado.enderecoCobranca.numero = cobranca[0].numero;
                    _this.usuarioLogado.enderecoCobranca.complemento = cobranca[0].complemento;
                    _this.usuarioLogado.enderecoCobranca.bairro = cobranca[0].bairro;
                    _this.usuarioLogado.enderecoCobranca.cep = cobranca[0].cep;
                    _this.usuarioLogado.enderecoCobranca.cidade = cobranca[0].cidade;
                    _this.usuarioLogado.enderecoCobranca.estado = cobranca[0].estado;
                }
            });
        }
        this.database.list('cartaoCredito', function (ref) { return ref.orderByChild('clienteId').equalTo(usuario.uid); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (p) { return (__assign({ key: p.payload.key }, p.payload.val())); });
        }).forEach(function (cartao) {
            if (cartao.length > 0) {
                _this.usuarioLogado.cartaoCredito.key = cartao[0].key;
                _this.usuarioLogado.cartaoCredito.numero = cartao[0].numero;
                _this.usuarioLogado.cartaoCredito.nomeImpresso = cartao[0].nomeImpresso;
                _this.usuarioLogado.cartaoCredito.validade = cartao[0].validade;
                _this.usuarioLogado.cartaoCredito.codigoSeguranca = cartao[0].codigoSeguranca;
            }
        });
    };
    ServicosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ServicosProvider);
    return ServicosProvider;
}());

//# sourceMappingURL=servicos.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_abbas_abbas__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_servicos_servicos__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth, serv) {
        var _this = this;
        this.serv = serv;
        afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.serv.carregarUsuario(user);
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_abbas_abbas__["a" /* AbbasPage */];
            }
            else {
                _this.rootPage = 'LoginPage';
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\app\app.html"*/'<ion-menu id="menuApp" [content]="conteudo"  color="secondary">\n    <ion-header>\n      <ion-toolbar color="secondary">\n        <ion-title style="text-align: left">Menu </ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content color="secondary">\n  \n      <ion-list color="secondary">\n  \n        <ion-item color="secondary"> \n          <button menuClose ion-button full clear color="light" style="font-size: 80%">Configurações</button>\n        </ion-item>\n        <ion-item color="secondary">\n          <button menuClose ion-button full clear color="light" style="font-size: 80%">Perfil</button>\n        </ion-item>\n        <ion-item color="secondary">\n          <button menuClose ion-button full clear color="light" style="font-size: 80%" >Sair</button>\n        </ion-item>\n  \n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n\n<ion-nav #conteudo [root]="rootPage" swipeBackEnabled="false"  color="secondary"></ion-nav>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_6__providers_servicos_servicos__["a" /* ServicosProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarrinhoPage = /** @class */ (function () {
    function CarrinhoPage(navCtrl, navParams, viewCtrl, serv, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.serv = serv;
        this.modalCtrl = modalCtrl;
        this.itensCarrinho = [];
        this.totalApagar = '0,00';
        this.itensCarrinho = this.serv.carrinho;
        this.itensCarrinho.forEach(function (elem) {
            elem.subTotal = _this.serv.calculaSubTotal(elem.preco, elem.qtdeItem);
            _this.totalApagar = _this.serv.calcularTotal(elem.subTotal, _this.totalApagar, '+');
        });
        console.log("usuarioLogago" + JSON.stringify(this.serv.usuarioLogado));
    }
    CarrinhoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarrinhoPage');
    };
    CarrinhoPage.prototype.ionViewWillEnter = function () {
    };
    CarrinhoPage.prototype.fecharModal = function () {
        this.viewCtrl.dismiss();
    };
    CarrinhoPage.prototype.remover = function (produto) {
        if (parseInt(produto.qtdeItem) > 0) {
            produto.qtdeItem--;
            produto.subTotal = this.serv.calculaSubTotal(produto.preco, produto.qtdeItem);
            this.totalApagar = this.serv.calcularTotal(produto.preco, this.totalApagar, '-');
            if (parseInt(produto.qtdeItem) == 0) {
                this.itensCarrinho = this.itensCarrinho.filter(function (r) {
                    return r.key != produto.key;
                });
                this.serv.qtdeCarrinho--;
                this.serv.carrinho = this.itensCarrinho;
            }
        }
    };
    CarrinhoPage.prototype.adicionar = function (produto) {
        produto.qtdeItem++;
        produto.subTotal = this.serv.calculaSubTotal(produto.preco, produto.qtdeItem);
        this.totalApagar = this.serv.calcularTotal(produto.preco, this.totalApagar, '+');
    };
    CarrinhoPage.prototype.removerItemCarrinho = function (produto) {
        this.itensCarrinho = this.itensCarrinho.filter(function (busca) {
            return busca.key != produto.key;
        });
        this.serv.carrinho = this.itensCarrinho;
        if (this.serv.qtdeCarrinho > 0) {
            this.serv.qtdeCarrinho = this.serv.qtdeCarrinho - 1;
        }
    };
    CarrinhoPage.prototype.fecharPedido = function () {
        this.serv.totalPagar = this.totalApagar;
        if (this.itensCarrinho.length > 0) {
            if (this.serv.usuarioLogado.nomeFantasia == '') {
                this.modalCtrl.create('CadastroClientePage').present();
            }
            else if (this.serv.usuarioLogado.enderecoEntrega.endereco == '') {
                this.modalCtrl.create('CadastroEnderecoPage').present();
            }
            else if (this.serv.usuarioLogado.cartaoCredito.numero == '') {
                this.modalCtrl.create('CartaoCreditoPage').present();
            }
            else {
                this.navCtrl.push('FecharPedidoPage');
            }
        }
    };
    CarrinhoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-carrinho',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\carrinho\carrinho.html"*/'<ion-header>\n    <ion-toolbar color="secondary">\n      <ion-title>\n        Carrinho\n      </ion-title>\n      <ion-buttons start (tap)="fecharModal()">\n        <button ion-button>\n          <span ion-text showWhen="ios">Fechar</span>\n          <ion-icon showWhen="android" name="md-close"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n<ion-content>\n  <ion-list>\n    <ion-item text-wrap *ngFor="let item of itensCarrinho">\n      <ion-row >\n        <ion-col col-3>\n          <img [src]="item.urlImg" width="70px" height="70px">\n        </ion-col>\n        <ion-col>\n          <ion-row>\n            <ion-col col-6 text-left style="font-size: 15px">\n              {{ item.itemNome }}\n            </ion-col>\n            <ion-col col-2 text-right  style="font-size: 25px">\n              <ion-icon name="ios-remove-circle-outline" (tap)="remover(item)"></ion-icon>\n            </ion-col>\n            <ion-col col-2 text-center style="font-size: 20px">\n              {{ item.qtdeItem }}\n            </ion-col>\n            <ion-col col-2 text-left  style="font-size: 25px">\n              <ion-icon name="ios-add-circle-outline" (tap)="adicionar(item)"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>  \n            <ion-col col-4 text-left style="font-size: 15px">\n             R$ {{ item.preco }}\n            </ion-col>   \n            <ion-col text-right style="color:slategrey" style="font-size: 15px; font-weight: bold">\n              Subtotal: <span style="font-size: 18px">{{ item.subTotal }}</span>\n            </ion-col>\n          </ion-row> \n        </ion-col>         \n      </ion-row>  \n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-item>\n    Total\n    <span item-end  style="font-size: 19px; font-weight: bold">R$ {{ totalApagar }}</span>\n  </ion-item>\n  <ion-toolbar color="secondary">\n    <button ion-button full color="danger" (tap)="fecharPedido()">Fechar Pedido</button>\n  </ion-toolbar>\n</ion-footer>  '/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\carrinho\carrinho.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__["a" /* ServicosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], CarrinhoPage);
    return CarrinhoPage;
}());

//# sourceMappingURL=carrinho.js.map

/***/ })

},[290]);
//# sourceMappingURL=main.js.map