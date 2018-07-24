webpackJsonp([9],{

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPedidoPageModule", function() { return ListaPedidoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_pedido__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(41);
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
var ListaPedidoPageModule = /** @class */ (function () {
    function ListaPedidoPageModule() {
    }
    ListaPedidoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lista_pedido__["a" /* ListaPedidoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_pedido__["a" /* ListaPedidoPage */]),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
        })
    ], ListaPedidoPageModule);
    return ListaPedidoPageModule;
}());

//# sourceMappingURL=lista-pedido.module.js.map

/***/ })

});
//# sourceMappingURL=9.js.map