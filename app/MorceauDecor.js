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
    var MorceauDecor = (function (_super) {
        __extends(MorceauDecor, _super);
        //Constructeur
        function MorceauDecor(refScene, unX, unY, niveauCourant) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            _this.gotoAndStop('decor' + niveauCourant);
            return _this;
        }
        //Méthodes
        MorceauDecor.prototype.deplacer = function (vitesse) {
            this.x -= vitesse;
            if (this.x < 0) {
                this.x += (2 * window.lib.properties.width);
            }
        };
        MorceauDecor.prototype.dessiner = function () {
            window.lib.ClipDecorDefilant.call(this);
            this.frameBounds = window.lib.ClipDecorDefilant.prototype.frameBounds;
        };
        MorceauDecor.prototype.supprimerMorceauDecor = function () {
            //@TODO Est-ce la bonne méthode pour le supprimer?
            this.parent.removeChild(this);
        };
        return MorceauDecor;
    }(ObjetVisible_1.ObjetVisible));
    exports.MorceauDecor = MorceauDecor;
});
//# sourceMappingURL=MorceauDecor.js.map