"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Abc';
        this.my = 'xyz';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n   <h1>{{title}}</h1>\n   <h2>My Text is: {{my}}</h2>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var MyComponent = (function () {
    function MyComponent() {
        this.name = 'Jaynika';
    }
    MyComponent = __decorate([
        core_1.Component({
            selector: 'my-component',
            template: "\n   <h1>My name is {{name}}...</h1>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MyComponent);
    return MyComponent;
}());
exports.MyComponent = MyComponent;
//# sourceMappingURL=app.component.js.map