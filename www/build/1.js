webpackJsonp([1],{

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(469);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__abbas_abbas__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contato_contato__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, afAuth, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.modalCtrl = modalCtrl;
        this.user = {};
        this.emailInvalido = false;
        this.emailVazio = false;
        this.senhaVazio = false;
        this.seisDigitos = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.logar = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                if (user.email.trim().length == 0) {
                    this.emailVazio = true;
                }
                else if (user.senha.trim().length == 0) {
                    this.emailVazio = true;
                }
                else if (user.senha.trim().length < 6) {
                    this.seisDigitos = true;
                }
                else {
                    try {
                        result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.senha);
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__abbas_abbas__["a" /* AbbasPage */], { user: user });
                        }
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.registrar = function () {
        this.navCtrl.push('RegistrarPage');
    };
    LoginPage.prototype.validaEmail = function (user) {
        var usuario = user.email.substring(0, user.email.indexOf("@"));
        var dominio = user.email.substring(user.email.indexOf("@") + 1, user.email.length);
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
    LoginPage.prototype.verEmailVazio = function () {
        this.emailVazio = (this.user.email == null || this.user.email.trim().length == 0);
    };
    LoginPage.prototype.verSenhaVazio = function () {
        this.senhaVazio = (this.user.senha == null || this.user.senha.trim().length == 0);
        this.seisDigitos = (this.user.senha == null || this.user.senha.trim().length < 6);
    };
    LoginPage.prototype.queroSerTembiu = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__contato_contato__["a" /* ContatoPage */]).present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\ionic\Abiru\abiru-10\src\pages\login\login.html"*/'<ion-content>\n  <div style="margin-top: 50px">\n    <ion-row>\n      <ion-col>\n        <ion-list style="margin-right: 20px; margin-left: 20px">\n          <ion-item class="campo" >\n            <ion-input [(ngModel)]="user.email" (keyup)="verEmailVazio()" (ionBlur)="validaEmail(user)" placeholder="E-mail" type="text"></ion-input>\n          </ion-item>\n          <p text-center *ngIf="emailVazio" style="color: red; font-size: 0.9em;">Digite o seu email</p>\n          <p text-center *ngIf="emailInvalido" style="color: red; font-size: 0.9em;">Email inválido</p>\n          <br>  \n          <ion-item class="campo" >\n            <ion-input [(ngModel)]="user.senha" (keyup)="verSenhaVazio()" placeholder="Senha" type="password"></ion-input>\n          </ion-item>\n          <p text-center *ngIf="senhaVazio" style="color: #ff0000; font-size: 0.9em;">Digite a senha</p>\n          <p text-center *ngIf="seisDigitos" style="color: #ff0000; font-size: 0.9em;">Mínimo 6 caracteres</p>         \n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col style="margin-left: 20px; margin-right: 20px">\n        <button ion-button class="login-button" color="secondary" (tap)="logar(user)">Entrar</button>\n      </ion-col>\n    </ion-row>\n\n    <!--<ion-row>\n      <ion-col style="margin-left: 20px; margin-right: 20px">\n        <button ion-button  outline round class="login-button" color="secondary" (tap)="registrar()">Registrar</button>\n      </ion-col>\n    </ion-row> -->\n\n    <ion-row>\n      <ion-col style="margin-left: 20px; margin-right: 20px">\n        <button ion-button clear class="login-button" color="primary" (tap)="queroSerTembiu()">Quero Ser Tembiu!</button>\n      </ion-col>\n    </ion-row>   \n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\ionic\Abiru\abiru-10\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=1.js.map