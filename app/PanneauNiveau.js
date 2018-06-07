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
    var PanneauNiveau = (function (_super) {
        __extends(PanneauNiveau, _super);
        //Constructeur
        function PanneauNiveau(refScene, unX, unY, refJeu) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            //Attributs
            _this.disparaitre_lier = null;
            _this.refJeu = null;
            _this.refJeu = refJeu;
            _this.alpha = 1;
            _this.disparaitre_lier = _this.disparaitre.bind(_this);
            _this.addEventListener('tick', _this.disparaitre_lier);
            _this['txtObjectif'].text = "Objectif: " + _this.refJeu.retournerObjectifCourant().toString();
            _this['txtObjectif'].font = "36px Prompt";
            return _this;
        }
        PanneauNiveau.prototype.dessiner = function () {
            window.lib.ClipPanneauNiveau.call(this);
            this.frameBounds = window.lib.ClipPanneauNiveau.prototype.frameBounds;
        };
        PanneauNiveau.prototype.disparaitre = function () {
            if (this.alpha > 0) {
                this.alpha -= 0.01;
            }
            else {
                this.refJeu.supprimerPanneauNiveau();
            }
        };
        PanneauNiveau.prototype.supprimerPanneauNiveau = function () {
            this.removeEventListener('tick', this.disparaitre_lier);
            this.supprimerObjetVisible();
        };
        return PanneauNiveau;
    }(ObjetVisible_1.ObjetVisible));
    exports.PanneauNiveau = PanneauNiveau;
});
//# sourceMappingURL=PanneauNiveau.js.map