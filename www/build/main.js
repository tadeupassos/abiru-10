webpackJsonp([10],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbbasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__frutas_frutas__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vegetais_vegetais__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lista_pedido_lista_pedido__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_servicos_servicos__ = __webpack_require__(29);
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
    function AbbasPage(navCtrl, navParams, serv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.serv = serv;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__frutas_frutas__["a" /* FrutasPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__vegetais_vegetais__["a" /* VegetaisPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__lista_pedido_lista_pedido__["a" /* ListaPedidoPage */];
        this.indiceTab = 0;
        if (this.serv.finalizouCompra) {
            this.indiceTab = 3;
        }
    }
    AbbasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbbasPage');
    };
    AbbasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-abbas',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\abbas\abbas.html"*/'<ion-tabs color="secondary" [selectedIndex]="indiceTab">\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Frutas" tabIcon="logo-apple" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Hortaliças" tabIcon="ios-nutrition-outline" tabsHideOnSubPages="true"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Pedidos" tabIcon="ios-list-box-outline" tabsHideOnSubPages="true"></ion-tab>  \n</ion-tabs>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\abbas\abbas.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__providers_servicos_servicos__["a" /* ServicosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_servicos_servicos__["a" /* ServicosProvider */]) === "function" && _c || Object])
    ], AbbasPage);
    return AbbasPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=abbas.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaPedidoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_servicos_servicos__ = __webpack_require__(29);
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




var ListaPedidoPage = /** @class */ (function () {
    function ListaPedidoPage(navCtrl, navParams, database, serv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.serv = serv;
        this.todosPedidos = this.carregaTodosPedidos();
    }
    ListaPedidoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListaPedidoPage');
    };
    ListaPedidoPage.prototype.carregaTodosPedidos = function () {
        return this.database.list('pedidos', function (ref) { return ref.orderByChild('ordemStatus'); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (p) { return (__assign({ key: p.payload.key }, p.payload.val())); });
        });
    };
    ListaPedidoPage.prototype.detalhesDoPedido = function (item) {
        console.log("item enviado " + item);
        this.navCtrl.push('DetalhePedidoPage', { detalhe: item });
    };
    ListaPedidoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lista-pedido',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\lista-pedido\lista-pedido.html"*/'\n<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Pedidos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content id="fundo">\n  <ion-card *ngFor="let item of todosPedidos | async" > \n    <div style="margin: 10px 10px 5px 10px">\n      <ion-row>           \n        <ion-col>\n          <span class="negrito">Status:</span> <span class="status" [style.color]="item.corStatus">{{ item.status }}</span>\n        </ion-col>\n        <ion-col col-6>\n          <span class="negrito">Pedido:</span> <span class="items">{{ item.pedido }}</span>\n        </ion-col>           \n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <span class="negrito">Data:</span><span class="items">{{ item.dataPedido }}</span>\n        </ion-col>\n        <ion-col>\n          <span class="negrito">Total: </span> <span class="valor">R$ {{ item.totalPagar }}</span>\n        </ion-col>     \n      </ion-row>\n      <ion-row>\n        <ion-col text-center>\n          <span ion-text (tap)="detalhesDoPedido(item)" color="primary" style="font-size: 16px">Ver detalhes do pedido</span>     \n        </ion-col>        \n      </ion-row>      \n    </div>\n  </ion-card>  \n</ion-content>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\lista-pedido\lista-pedido.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__node_modules_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__providers_servicos_servicos__["a" /* ServicosProvider */]])
    ], ListaPedidoPage);
    return ListaPedidoPage;
}());

//# sourceMappingURL=lista-pedido.js.map

/***/ }),

/***/ 148:
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
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro-cliente/cadastro-cliente.module": [
		454,
		8
	],
	"../pages/cadastro-endereco/cadastro-endereco.module": [
		455,
		7
	],
	"../pages/cartao-credito/cartao-credito.module": [
		456,
		6
	],
	"../pages/detalhe-pedido/detalhe-pedido.module": [
		457,
		5
	],
	"../pages/endereco-cobranca/endereco-cobranca.module": [
		459,
		4
	],
	"../pages/escolher-entrega/escolher-entrega.module": [
		458,
		3
	],
	"../pages/fechar-pedido/fechar-pedido.module": [
		460,
		2
	],
	"../pages/lista-pedido/lista-pedido.module": [
		461,
		9
	],
	"../pages/login/login.module": [
		462,
		1
	],
	"../pages/registrar/registrar.module": [
		463,
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
webpackAsyncContext.id = 191;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(41);
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
            selector: 'page-home',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <!--<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>--> \n    <ion-title>\n      Tembiu\n    </ion-title>\n    <ion-buttons right (tap)="mostrarCarrinho()">\n      <button ion-button icon-only large>\n        <ion-icon name="cart" style="font-size: 40px"><ion-badge start color="danger">{{ qtdeCarrinho }}</ion-badge></ion-icon>\n      </button>     \n    </ion-buttons>         \n  </ion-navbar>\n</ion-header>\n \n<ion-content id="fundo">\n  <ion-searchbar [(ngModel)]="buscaLetra" (ionInput)="filtrarPorLetra()" placeholder="Buscar">\n  </ion-searchbar> \n\n  <ion-list>\n    <ion-card *ngFor="let produto of produtosItem | async">\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col text-center col-4>\n            <img [src]="produto.urlImg">\n          </ion-col>\n          <ion-col col-4>\n            <ion-row>\n              <ion-col text-center>\n                <div style="font-size: 15px">{{ produto.itemNome }}</div>\n              </ion-col>\n            </ion-row> \n            <ion-row>\n              <ion-col text-center>\n                <div style="font-weight: bold; font-size: 20px"> R$ {{ produto.preco }} </div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <ion-col col-4>\n            <ion-row style="font-size: 25px">\n              <ion-col col-4 text-left>\n                <ion-icon name="ios-remove-circle-outline" (tap)="remover(produto)"></ion-icon>\n              </ion-col>\n              <ion-col col-4 text-center style="font-size: 20px">\n                {{ produto.qtdeItem }}\n              </ion-col>\n              <ion-col col-4 text-right>\n                <ion-icon name="ios-add-circle-outline" (tap)="adicionar(produto)"></ion-icon>\n              </ion-col> \n            </ion-row>\n            <ion-row style="font-size: 11px; margin-top: -10px; margin-bottom: -10px">\n              <ion-col text-center style="font-weight: bold">\n                {{ produto.medida }}\n              </ion-col>\n            </ion-row>            \n            <ion-row>\n              <ion-col text-center>\n                <button style="font-size: 16px" ion-button small icon-start (tap)="addCarrinho(produto)">\n                  <!--<ion-icon name="cart"></ion-icon>-->\n                  Comprar\n                </button>\n              </ion-col>            \n            </ion-row> \n          </ion-col>\n        </ion-row>\n      </ion-grid> \n    </ion-card> \n  </ion-list> \n</ion-content>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__["a" /* ServicosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrutasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carrinho_carrinho__ = __webpack_require__(61);
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
            selector: 'page-frutas',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\frutas\frutas.html"*/'<ion-header>\n    <ion-navbar color="secondary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>    \n      <ion-title>\n        Frutas\n      </ion-title>\n      <ion-buttons right (tap)="mostrarCarrinho()">\n        <button ion-button icon-only large>\n          <ion-icon name="cart" style="font-size: 40px"><ion-badge start color="danger">{{ qtdeCarrinho }}</ion-badge></ion-icon>\n        </button>     \n      </ion-buttons>         \n    </ion-navbar>\n  </ion-header>\n\n\n  <ion-content id="fundo">\n    <ion-searchbar [(ngModel)]="buscaLetra" (ionInput)="filtrarPorLetra()" placeholder="Buscar">\n    </ion-searchbar>  \n  \n    <ion-list>\n      <ion-card *ngFor="let produto of produtosItem | async">\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col text-center col-4>\n              <img [src]="produto.urlImg">\n            </ion-col>\n            <ion-col col-4>\n              <ion-row>\n                <ion-col text-center>\n                  <div style="font-size: 15px">{{ produto.itemNome }}</div>\n                </ion-col>\n              </ion-row> \n              <ion-row>\n                <ion-col text-center>\n                  <div style="font-weight: bold; font-size: 20px"> R$ {{ produto.preco }} </div>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col col-4>\n              <ion-row style="font-size: 25px">\n                <ion-col col-4 text-left>\n                  <ion-icon name="ios-remove-circle-outline" (tap)="remover(produto)"></ion-icon>\n                </ion-col>\n                <ion-col col-4 text-center style="font-size: 20px">\n                  {{ produto.qtdeItem }}\n                </ion-col>\n                <ion-col col-4 text-right>\n                  <ion-icon name="ios-add-circle-outline" (tap)="adicionar(produto)"></ion-icon>\n                </ion-col> \n              </ion-row>\n              <ion-row style="font-size: 11px; margin-top: -10px; margin-bottom: -10px">\n                <ion-col text-center>\n                  {{ produto.medida }}\n                </ion-col>\n              </ion-row>            \n              <ion-row>\n                <ion-col text-center style="font-weight: bold">\n                  <button style="font-size: 16px" ion-button small icon-start (tap)="addCarrinho(produto)">\n                    <!--<ion-icon name="cart"></ion-icon>-->\n                    Comprar\n                  </button>\n                </ion-col>            \n              </ion-row> \n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </ion-card> \n    </ion-list> \n  </ion-content>'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\frutas\frutas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__["a" /* ServicosProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], FrutasPage);
    return FrutasPage;
}());

//# sourceMappingURL=frutas.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VegetaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carrinho_carrinho__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(41);
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
            selector: 'page-vegetais',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\vegetais\vegetais.html"*/'<ion-header>\n    <ion-navbar color="secondary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu">      \n        </ion-icon>\n      </button>    \n      <ion-title>\n        Vegetais\n      </ion-title>\n      <ion-buttons right (tap)="mostrarCarrinho()">\n        <button ion-button icon-only large>\n          <ion-icon name="cart" style="font-size: 40px"><ion-badge start color="danger">{{ qtdeCarrinho }}</ion-badge></ion-icon>\n        </button>     \n      </ion-buttons>         \n    </ion-navbar>\n  </ion-header>\n\n  <ion-content id="fundo">\n    <ion-searchbar [(ngModel)]="buscaLetra" (ionInput)="filtrarPorLetra()" placeholder="Buscar">\n    </ion-searchbar>  \n  \n    <ion-list>\n      <ion-card *ngFor="let produto of produtosItem | async">\n        <ion-grid no-padding>\n          <ion-row>\n            <ion-col text-center col-4>\n              <img [src]="produto.urlImg">\n            </ion-col>\n            <ion-col col-4>\n              <ion-row>\n                <ion-col text-center>\n                  <div style="font-size: 15px">{{ produto.itemNome }}</div>\n                </ion-col>\n              </ion-row> \n              <ion-row>\n                <ion-col text-center>\n                  <div style="font-weight: bold; font-size: 20px"> R$ {{ produto.preco }} </div>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n            <ion-col col-4>\n              <ion-row style="font-size: 25px">\n                <ion-col col-4 text-left>\n                  <ion-icon name="ios-remove-circle-outline" (tap)="remover(produto)"></ion-icon>\n                </ion-col>\n                <ion-col col-4 text-center style="font-size: 20px">\n                  {{ produto.qtdeItem }}\n                </ion-col>\n                <ion-col col-4 text-right>\n                  <ion-icon name="ios-add-circle-outline" (tap)="adicionar(produto)"></ion-icon>\n                </ion-col> \n              </ion-row>\n              <ion-row style="font-size: 11px; margin-top: -10px; margin-bottom: -10px">\n                <ion-col text-center style="font-weight: bold">\n                  {{ produto.medida }}\n                </ion-col>\n              </ion-row>            \n              <ion-row>\n                <ion-col text-center>\n                  <button style="font-size: 16px" ion-button small icon-start (tap)="addCarrinho(produto)">\n                    <!--<ion-icon name="cart"></ion-icon>-->\n                    Comprar\n                  </button>\n                </ion-col>            \n              </ion-row> \n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </ion-card> \n    </ion-list> \n  </ion-content>'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\vegetais\vegetais.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__["a" /* ServicosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], VegetaisPage);
    return VegetaisPage;
}());

//# sourceMappingURL=vegetais.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(41);
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
        this.finalizouCompra = false;
        this.usuarioLogado = {
            key: "",
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
                mesmoEnderecoCobranca: true
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
            },
            entregaEscolhida: {
                dataEntrega: "",
                periodoEntrega: ""
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
            duration: 2000,
            position: 'middle'
        });
        toast.present();
    };
    ServicosProvider.prototype.igualZero = function (medida) {
        var toast = this.toastCtrl.create({
            message: 'Por favor, ' + medida + ' não pode ser igual 0.',
            duration: 2000,
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
        this.database.list('clientes', function (ref) { return ref.orderByChild('clienteId').equalTo(usuario.uid); })
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (p) { return (__assign({ key: p.payload.key }, p.payload.val())); });
        }).forEach(function (item) {
            if (item.length > 0) {
                _this.usuarioLogado.key = item[0].key;
                if (item[0].cliente) {
                    _this.usuarioLogado.nomeFantasia = item[0].cliente.nomeFantasia;
                    _this.usuarioLogado.cnpj = item[0].cliente.cnpj;
                    _this.usuarioLogado.telefone = item[0].cliente.telefone;
                }
                if (item[0].enderecoEntrega) {
                    _this.usuarioLogado.enderecoEntrega.endereco = item[0].enderecoEntrega.endereco;
                    _this.usuarioLogado.enderecoEntrega.numero = item[0].enderecoEntrega.numero;
                    _this.usuarioLogado.enderecoEntrega.complemento = item[0].enderecoEntrega.complemento;
                    _this.usuarioLogado.enderecoEntrega.bairro = item[0].enderecoEntrega.bairro;
                    _this.usuarioLogado.enderecoEntrega.cep = item[0].enderecoEntrega.cep;
                    _this.usuarioLogado.enderecoEntrega.cidade = item[0].enderecoEntrega.cidade;
                    _this.usuarioLogado.enderecoEntrega.estado = item[0].enderecoEntrega.estado;
                    _this.usuarioLogado.enderecoEntrega.mesmoEnderecoCobranca = item[0].enderecoEntrega.mesmoEnderecoCobranca;
                }
                if (item[0].enderecoCobranca) {
                    _this.usuarioLogado.enderecoCobranca.endereco = item[0].enderecoCobranca.endereco;
                    _this.usuarioLogado.enderecoCobranca.numero = item[0].enderecoCobranca.numero;
                    _this.usuarioLogado.enderecoCobranca.complemento = item[0].enderecoCobranca.complemento;
                    _this.usuarioLogado.enderecoCobranca.bairro = item[0].enderecoCobranca.bairro;
                    _this.usuarioLogado.enderecoCobranca.cep = item[0].enderecoCobranca.cep;
                    _this.usuarioLogado.enderecoCobranca.cidade = item[0].enderecoCobranca.cidade;
                    _this.usuarioLogado.enderecoCobranca.estado = item[0].enderecoCobranca.estado;
                }
                if (item[0].cartaoCredito) {
                    _this.usuarioLogado.cartaoCredito.numero = item[0].cartaoCredito.numero;
                    _this.usuarioLogado.cartaoCredito.nomeImpresso = item[0].cartaoCredito.nomeImpresso;
                    _this.usuarioLogado.cartaoCredito.validade = item[0].cartaoCredito.validade;
                    _this.usuarioLogado.cartaoCredito.codigoSeguranca = item[0].cartaoCredito.codigoSeguranca;
                }
                if (item[0].entregaEscolhida) {
                    _this.usuarioLogado.entregaEscolhida.dataEntrega = item[0].entregaEscolhida.dataEntrega;
                    _this.usuarioLogado.entregaEscolhida.periodoEntrega = item[0].entregaEscolhida.periodoEntrega;
                }
                //console.log("cliente " + JSON.stringify(this.usuarioLogado));
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

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContatoPage = /** @class */ (function () {
    function ContatoPage(navCtrl, navParams, viewCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.nome = "";
        this.email = "";
        this.cidade = "";
        this.nomeVazio = false;
        this.emailVazio = false;
        this.emailInvalido = false;
        this.cidadeVazio = false;
    }
    ContatoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContatoPage');
    };
    ContatoPage.prototype.verNomeVazio = function () {
        this.nomeVazio = (this.nome.trim().length == 0);
    };
    ContatoPage.prototype.verEmailVazio = function () {
        this.emailVazio = (this.email.trim().length == 0);
    };
    ContatoPage.prototype.validaEmail = function () {
        var usuario = this.email.substring(0, this.email.indexOf("@"));
        var dominio = this.email.substring(this.email.indexOf("@") + 1, this.email.length);
        if ((usuario.length >= 1) &&
            (dominio.length >= 3) &&
            (usuario.search("@") == -1) &&
            (dominio.search("@") == -1) &&
            (usuario.search(" ") == -1) &&
            (dominio.search(" ") == -1) &&
            (dominio.search(".") != -1) &&
            (dominio.indexOf(".") >= 1) &&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
            this.emailInvalido = false;
        }
        else {
            this.emailInvalido = true;
        }
    };
    ContatoPage.prototype.verCidadeVazio = function () {
        this.cidadeVazio = (this.cidade.trim().length == 0);
    };
    ContatoPage.prototype.queroSerTembiu = function () {
        var _this = this;
        console.log("Nome: " + this.nome + " - E-mail: " + this.email + " - Cidade-Estado: " + this.cidade);
        var alert = this.alertCtrl.create({
            title: 'Tembiu',
            subTitle: 'Em breve entraremos em contato!',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.fecharModal();
                    }
                }
            ]
        });
        alert.present();
    };
    ContatoPage.prototype.fecharModal = function () {
        this.viewCtrl.dismiss();
    };
    ContatoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contato',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\contato\contato.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title text-left>Quero Ser Tembiu!</ion-title>\n    <ion-buttons right>\n    <button ion-button icon-only (tap)="fecharModal()">\n      <span ion-text showWhen="ios">Fechar</span>\n      <ion-icon showWhen="android" name="md-close"></ion-icon>\n    </button>\n    </ion-buttons>    \n  </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <p text-center text-wrap style="margin-left: 10px; margin-right: 10px; color:dimgray">O Tembiu é dedicado a um grupo seleto de serviços de alimentação, em prol da excelência na alimentação e do fortalecimento da agricultura familiar.</p>\n\n    <p text-center>Quer fazer parte dessa onda? Cadastre-se aqui.</p>\n    <ion-list>\n  \n      <ion-item>\n        <ion-label color="secondary" stacked>Nome</ion-label>\n        <ion-input (keyup)="verNomeVazio()" type="text" [(ngModel)]="nome"></ion-input>\n      </ion-item>\n      <p text-center *ngIf="nomeVazio" style="color: red">Digite o seu nome</p>\n  \n      <ion-item>\n        <ion-label color="secondary" stacked>E-mail</ion-label>\n        <ion-input (keyup)="verEmailVazio()" (ionBlur)="validaEmail()" type="text" [(ngModel)]="email"></ion-input>\n      </ion-item>\n      <p text-center *ngIf="emailVazio" style="color: red">Digite o seu email</p>\n      <p text-center *ngIf="emailInvalido" style="color: red">Email inválido</p>\n  \n      <ion-item>\n        <ion-label color="secondary" stacked>Cidade e Estado</ion-label>\n        <ion-input (keyup)="verCidadeVazio()" type="text" [(ngModel)]="cidade"></ion-input>\n      </ion-item>\n      <p text-center *ngIf="cidadeVazio" style="color: red">Digite a sua cidade e estado</p>\n   \n    </ion-list> \n\n    <ion-row>\n      <ion-col style="margin-left: 20px; margin-right: 20px">\n        <button ion-button block outline color="secondary" (tap)="queroSerTembiu()">Enviar</button>\n      </ion-col>\n    </ion-row>   \n  \n  </ion-content>\n  '/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\contato\contato.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], ContatoPage);
    return ContatoPage;
}());

//# sourceMappingURL=contato.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(311);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_abbas_abbas__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_vegetais_vegetais__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_frutas_frutas__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_carrinho_carrinho__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_lista_pedido_lista_pedido__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contato_contato__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_servicos_servicos__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pluritech_ion_mask__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pluritech_ion_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__pluritech_ion_mask__);
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
                __WEBPACK_IMPORTED_MODULE_15__pages_lista_pedido_lista_pedido__["a" /* ListaPedidoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contato_contato__["a" /* ContatoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro-cliente/cadastro-cliente.module#CadastroClientePageModule', name: 'CadastroClientePage', segment: 'cadastro-cliente', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-endereco/cadastro-endereco.module#CadastroEnderecoPageModule', name: 'CadastroEnderecoPage', segment: 'cadastro-endereco', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cartao-credito/cartao-credito.module#CartaoCreditoPageModule', name: 'CartaoCreditoPage', segment: 'cartao-credito', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhe-pedido/detalhe-pedido.module#DetalhePedidoPageModule', name: 'DetalhePedidoPage', segment: 'detalhe-pedido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/escolher-entrega/escolher-entrega.module#EscolherEntregaPageModule', name: 'EscolherEntregaPage', segment: 'escolher-entrega', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/endereco-cobranca/endereco-cobranca.module#EnderecoCobrancaPageModule', name: 'EnderecoCobrancaPage', segment: 'endereco-cobranca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fechar-pedido/fechar-pedido.module#FecharPedidoPageModule', name: 'FecharPedidoPage', segment: 'fechar-pedido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-pedido/lista-pedido.module#ListaPedidoPageModule', name: 'ListaPedidoPage', segment: 'lista-pedido', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrar/registrar.module#RegistrarPageModule', name: 'RegistrarPage', segment: 'registrar', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18__pluritech_ion_mask__["IonMaskModule"].forRoot(),
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
                __WEBPACK_IMPORTED_MODULE_15__pages_lista_pedido_lista_pedido__["a" /* ListaPedidoPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contato_contato__["a" /* ContatoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_17__providers_servicos_servicos__["a" /* ServicosProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_abbas_abbas__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_servicos_servicos__ = __webpack_require__(29);
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
        this.afAuth = afAuth;
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
    MyApp.prototype.sair = function () {
        this.afAuth.auth.signOut();
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\app\app.html"*/'<ion-menu id="menuApp" [content]="conteudo"  color="secondary">\n    <ion-header>\n      <ion-toolbar color="secondary">\n        <ion-title style="text-align: left">Menu </ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content color="secondary">\n  \n      <ion-list color="secondary">\n  \n        <ion-item color="secondary"> \n          <button menuClose ion-button full clear color="light" style="font-size: 80%">Configurações</button>\n        </ion-item>\n        <ion-item color="secondary">\n          <button menuClose ion-button full clear color="light" style="font-size: 80%">Perfil</button>\n        </ion-item>\n        <ion-item color="secondary">\n          <button menuClose ion-button full clear color="light" style="font-size: 80%" (tap)="sair()">Sair</button>\n        </ion-item>\n  \n      </ion-list>\n    </ion-content>\n  \n  </ion-menu>\n\n<ion-nav #conteudo [root]="rootPage" swipeBackEnabled="false"  color="secondary"></ion-nav>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_6__providers_servicos_servicos__["a" /* ServicosProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__ = __webpack_require__(29);
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
        // console.log("usuarioLogago" + JSON.stringify(this.serv.usuarioLogado));
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
            } /*else if(this.serv.usuarioLogado.cartaoCredito.numero == ''){
              this.modalCtrl.create('CartaoCreditoPage').present();
            }*/
            else {
                this.navCtrl.push('FecharPedidoPage');
            }
        }
    };
    CarrinhoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-carrinho',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\carrinho\carrinho.html"*/'<ion-header>\n    <ion-toolbar color="secondary">\n      <ion-title>\n        Carrinho\n      </ion-title>\n      <ion-buttons start (tap)="fecharModal()">\n        <button ion-button>\n          <span ion-text showWhen="ios">Fechar</span>\n          <ion-icon showWhen="android" name="md-close"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n<ion-content>\n  <ion-list>\n    <ion-item text-wrap *ngFor="let item of itensCarrinho">\n      <ion-row >\n        <ion-col col-3>\n          <img [src]="item.urlImg" width="70px" height="70px">\n        </ion-col>\n        <ion-col>\n          <ion-row>\n            <ion-col col-6 text-left style="font-size: 15px; font-weight: bold">\n              {{ item.itemNome }}\n            </ion-col>\n            <ion-col col-2 text-right  style="font-size: 25px">\n              <ion-icon name="ios-remove-circle-outline" (tap)="remover(item)"></ion-icon>\n            </ion-col>\n            <ion-col col-2 text-center style="font-size: 20px">\n              {{ item.qtdeItem }}\n            </ion-col>\n            <ion-col col-2 text-left  style="font-size: 25px">\n              <ion-icon name="ios-add-circle-outline" (tap)="adicionar(item)"></ion-icon>\n            </ion-col>\n          </ion-row>\n          <ion-row>  \n            <ion-col col-5 text-left style="font-size: 17px">\n             R$ {{ item.preco }}\n             <!--<span class="medida"> {{ item.medida }}</span>-->\n            </ion-col>   \n            <ion-col text-right style="color:slategrey" style="font-size: 15px; font-weight: bold">\n              Subtotal: <span style="font-size: 18px">{{ item.subTotal }}</span>\n            </ion-col>\n          </ion-row> \n        </ion-col>         \n      </ion-row>  \n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-item>\n    Total\n    <span item-end  style="font-size: 19px; font-weight: bold">R$ {{ totalApagar }}</span>\n  </ion-item>\n  <ion-toolbar color="secondary">\n    <button ion-button full color="primary" (tap)="fecharPedido()">Fechar Pedido</button>\n  </ion-toolbar>\n</ion-footer>  '/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\carrinho\carrinho.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_2__providers_servicos_servicos__["a" /* ServicosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], CarrinhoPage);
    return CarrinhoPage;
}());

//# sourceMappingURL=carrinho.js.map

/***/ })

},[291]);
//# sourceMappingURL=main.js.map