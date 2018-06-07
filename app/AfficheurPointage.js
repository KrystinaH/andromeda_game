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
    var AfficheurPointage = (function (_super) {
        __extends(AfficheurPointage, _super);
        //Constructeur
        function AfficheurPointage(refScene, unX, unY) {
            return _super.call(this, refScene, unX, unY) || this;
        }
        AfficheurPointage.prototype.dessiner = function () {
            window.lib.ClipAfficheurPts.call(this);
            this.frameBounds = window.lib.ClipAfficheurPts.prototype.frameBounds;
        };
        AfficheurPointage.prototype.majAffichagePts = function (valeur) {
            var pointage = valeur.toString();
            if (valeur < 1000) {
                pointage = "0" + pointage;
            }
            this['clipChiffre1'].gotoAndStop('chiffre' + pointage.substr(0, 1));
            this['clipChiffre2'].gotoAndStop('chiffre' + pointage.substr(1, 1));
            this['clipChiffre3'].gotoAndStop('chiffre' + pointage.substr(2, 1));
            this['clipChiffre4'].gotoAndStop('chiffre' + pointage.substr(3, 1));
        };
        AfficheurPointage.prototype.supprimerAfficheurPts = function () {
            this.supprimerObjetVisible();
        };
        return AfficheurPointage;
    }(ObjetVisible_1.ObjetVisible));
    exports.AfficheurPointage = AfficheurPointage;
});
//# sourceMappingURL=AfficheurPointage.js.map