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
    var PanneauFin = (function (_super) {
        __extends(PanneauFin, _super);
        //Constructeur
        function PanneauFin(refScene, unX, unY, scoreFinal, niveauGagne, refJeu) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            //Attributs
            _this.refJeu = null;
            _this.faireDebuterJeu_lier = null;
            _this.afficherRl_lier = null;
            _this.afficherUp_lier = null;
            _this.gotoAndStop(1);
            _this.stage.enableMouseOver(24);
            _this['txtScoreFinal'].text = "Score final: " + scoreFinal.toString();
            _this['txtScoreFinal'].font = "36px Prompt";
            if (!niveauGagne) {
                _this.gotoAndStop('echec');
            }
            _this.refJeu = refJeu;
            _this.faireDebuterJeu_lier = _this.faireDebuterJeu.bind(_this);
            _this.afficherUp_lier = _this.afficherUp.bind(_this);
            _this.afficherRl_lier = _this.afficherUp.bind(_this);
            _this['btnRejouer'].gotoAndStop(1);
            _this['btnRejouer'].addEventListener('click', _this.faireDebuterJeu_lier);
            _this['btnRejouer'].addEventListener('mouseover', _this.afficherRl_lier);
            _this['btnRejouer'].addEventListener('mouseout', _this.afficherUp_lier);
            return _this;
        }
        PanneauFin.prototype.dessiner = function () {
            window.lib.ClipPanneauFin.call(this);
            this.frameBounds = window.lib.ClipPanneauFin.prototype.frameBounds;
        };
        PanneauFin.prototype.afficherRl = function (evenement) {
            evenement.currentTarget.gotoAndStop('rl');
        };
        PanneauFin.prototype.afficherUp = function (evenement) {
            evenement.currentTarget.gotoAndStop('up');
        };
        PanneauFin.prototype.faireDebuterJeu = function () {
            this.refJeu.debuterJeu();
        };
        PanneauFin.prototype.supprimerPanneauFin = function () {
            this.stage.enableMouseOver(0);
            this['btnRejouer'].removeEventListener('click', this.faireDebuterJeu_lier);
            this['btnRejouer'].removeEventListener('mouseover', this.afficherRl_lier);
            this['btnRejouer'].removeEventListener('mouseout', this.afficherUp_lier);
            this.supprimerObjetVisible();
        };
        return PanneauFin;
    }(ObjetVisible_1.ObjetVisible));
    exports.PanneauFin = PanneauFin;
});
//# sourceMappingURL=PanneauFin.js.map