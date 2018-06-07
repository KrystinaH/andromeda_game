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
    var PanneauIntro = (function (_super) {
        __extends(PanneauIntro, _super);
        //Constructeur
        function PanneauIntro(refScene, unX, unY, refJeu) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            //Attributs
            _this.refJeu = null;
            _this.gererBoutonsSuivPrec_lier = null;
            _this.faireDebuterJeu_lier = null;
            _this.afficheRl_lier = null;
            _this.afficherUp_lier = null;
            _this.stage.enableMouseOver(24);
            _this.refJeu = refJeu;
            _this['txtHistoire'].font = "18px Prompt";
            _this['txtMouvements'].font = "16px Prompt";
            _this['txtAntagonistes'].font = "16px Prompt";
            _this['txtObstacles'].font = "16px Prompt";
            _this.gererBoutonsSuivPrec_lier = _this.gererBoutonsSuivPrec.bind(_this);
            _this.faireDebuterJeu_lier = _this.faireDebuterJeu.bind(_this);
            _this.afficheRl_lier = _this.afficherRl.bind(_this);
            _this.afficherUp_lier = _this.afficherUp.bind(_this);
            _this['btnSuivant'].addEventListener('click', _this.gererBoutonsSuivPrec_lier);
            _this['btnSuivant'].addEventListener('mouseover', _this.afficheRl_lier);
            _this['btnSuivant'].addEventListener('mouseout', _this.afficherUp_lier);
            _this['btnPrecedent'].addEventListener('click', _this.gererBoutonsSuivPrec_lier);
            _this['btnPrecedent'].addEventListener('mouseover', _this.afficheRl_lier);
            _this['btnPrecedent'].addEventListener('mouseout', _this.afficherUp_lier);
            _this['btnJouer'].addEventListener('click', _this.faireDebuterJeu_lier);
            _this['btnJouer'].addEventListener('mouseover', _this.afficheRl_lier);
            _this['btnJouer'].addEventListener('mouseout', _this.afficherUp_lier);
            return _this;
        }
        PanneauIntro.prototype.dessiner = function () {
            window.lib.ClipPanneauIntro.call(this);
            this.frameBounds = window.lib.ClipPanneauIntro.prototype.frameBounds;
        };
        PanneauIntro.prototype.gererBoutonsSuivPrec = function () {
            if (this.currentLabel == 'histoire') {
                this.gotoAndStop('instructions');
            }
            else {
                this.gotoAndStop('histoire');
            }
        };
        PanneauIntro.prototype.faireDebuterJeu = function () {
            this.refJeu.debuterJeu();
        };
        PanneauIntro.prototype.afficherRl = function (evenement) {
            evenement.currentTarget.gotoAndStop('rl');
        };
        PanneauIntro.prototype.afficherUp = function (evenement) {
            evenement.currentTarget.gotoAndStop('up');
        };
        PanneauIntro.prototype.supprimerPanneauIntro = function () {
            this.stage.enableMouseOver(0);
            this['btnSuivant'].removeEventListener('click', this.gererBoutonsSuivPrec_lier);
            this['btnSuivant'].removeEventListener('mouseover', this.afficheRl_lier);
            this['btnSuivant'].removeEventListener('mouseout', this.afficherUp_lier);
            this['btnPrecedent'].removeEventListener('click', this.gererBoutonsSuivPrec_lier);
            this['btnPrecedent'].removeEventListener('mouseover', this.afficheRl_lier);
            this['btnPrecedent'].removeEventListener('mouseout', this.afficherUp_lier);
            this['btnJouer'].removeEventListener('click', this.faireDebuterJeu_lier);
            this['btnJouer'].removeEventListener('mouseover', this.afficheRl_lier);
            this['btnJouer'].removeEventListener('mouseout', this.afficherUp_lier);
            this.supprimerObjetVisible();
        };
        return PanneauIntro;
    }(ObjetVisible_1.ObjetVisible));
    exports.PanneauIntro = PanneauIntro;
});
//# sourceMappingURL=PanneauIntro.js.map