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
    var AfficheurVies = (function (_super) {
        __extends(AfficheurVies, _super);
        //Constructeur
        function AfficheurVies(refScene, unX, unY) {
            return _super.call(this, refScene, unX, unY) || this;
        }
        AfficheurVies.prototype.dessiner = function () {
            window.lib.ClipAfficheurVies.call(this);
            this.frameBounds = window.lib.ClipAfficheurVies.prototype.frameBounds;
        };
        AfficheurVies.prototype.majAffichageVies = function (valeur) {
            this['clipNbVies'].gotoAndStop("chiffre" + valeur);
        };
        AfficheurVies.prototype.majAffichageEnergie = function (valeur) {
            this.gotoAndStop(valeur + "unites");
        };
        AfficheurVies.prototype.supprimerAfficheurVies = function () {
            this.supprimerObjetVisible();
        };
        return AfficheurVies;
    }(ObjetVisible_1.ObjetVisible));
    exports.AfficheurVies = AfficheurVies;
});
//# sourceMappingURL=AfficheurVies.js.map