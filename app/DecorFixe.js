var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./ObjetVisible"], function (require, exports, ObjetVisible_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DecorFixe = (function (_super) {
        __extends(DecorFixe, _super);
        //Constructeur
        function DecorFixe(refScene, unX, unY, niveauCourant) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            _this.gotoAndStop('decorFixe' + niveauCourant);
            return _this;
        }
        //Méthodes
        DecorFixe.prototype.dessiner = function () {
            window.lib.ClipDecorFixe.call(this);
            this.frameBounds = window.lib.ClipDecorFixe.prototype.frameBounds;
        };
        DecorFixe.prototype.supprimerDecorFixe = function () {
            this.supprimerObjetVisible();
        };
        return DecorFixe;
    }(ObjetVisible_1.ObjetVisible));
    exports.DecorFixe = DecorFixe;
});
//# sourceMappingURL=DecorFixe.js.map