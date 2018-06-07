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
define(["require", "exports", "./Mechant"], function (require, exports, Mechant_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Antagoniste = (function (_super) {
        __extends(Antagoniste, _super);
        //Constructeur
        function Antagoniste(refScene, unX, unY, redimensionMax, vitesse, sens, refAvatar, refJeu, refTProjectiles) {
            var _this = _super.call(this, refScene, unX, unY, redimensionMax, vitesse, sens, refAvatar, refJeu) || this;
            //Attributs
            _this.detecterCollisionProjectile_lier = null;
            _this.detecterCollisionAvatar_lier = null;
            _this.refTProjectiles = null;
            _this.minuterieMort = null;
            _this.refTProjectiles = refTProjectiles;
            _this.gotoAndPlay('marche');
            _this.detecterCollisionProjectile_lier = _this.detecterCollisionProjectile.bind(_this);
            _this.addEventListener("tick", _this.detecterCollisionProjectile_lier);
            _this.detecterCollisionAvatar_lier = _this.detecterCollisionAvatar.bind(_this);
            _this.addEventListener("tick", _this.detecterCollisionAvatar_lier);
            return _this;
        }
        Antagoniste.prototype.dessiner = function () {
            window.lib.ClipAntagoniste.call(this);
            this.frameBounds = window.lib.ClipAntagoniste.prototype.frameBounds;
        };
        Antagoniste.prototype.detecterCollisionProjectile = function () {
            var monRect = this.getTransformedBounds();
            var enCollision = false;
            for (var i = 0; i < this.refTProjectiles.length && !enCollision; i++) {
                if (monRect.intersects(this.refTProjectiles[i].getTransformedBounds())) {
                    createjs.Sound.play('SonProjectileContact');
                    this.refJeu.supprimerUnProjectile(this.refTProjectiles[i]);
                    this.debuterMort();
                    this.refAvatar.gagnerDesPoints();
                    enCollision = true;
                }
            }
        };
        Antagoniste.prototype.detecterCollisionAvatar = function (evenement) {
            var toucheAlAvatar = this.refAvatar.enCollisionGrossiereAvec(this);
            if (toucheAlAvatar) {
                var indexPointTouche = this.refAvatar.enCollisionFineAvec(this);
                if (indexPointTouche != -1) {
                    this.refAvatar.gererCollision();
                }
            }
        };
        Antagoniste.prototype.debuterMort = function () {
            createjs.Sound.play('SonAntagonisteMort');
            this.gotoAndPlay("meurt");
            this.minuterieMort = window.setTimeout(this.terminerMort.bind(this), 500);
        };
        Antagoniste.prototype.terminerMort = function () {
            window.clearTimeout(this.minuterieMort);
            this.minuterieMort = null;
            this.refJeu.supprimerUnAntagoniste(this);
        };
        Antagoniste.prototype.gererFinScene = function () {
            this.refJeu.supprimerUnAntagoniste(this);
        };
        Antagoniste.prototype.supprimerAntagoniste = function () {
            this.removeEventListener("tick", this.detecterCollisionAvatar_lier);
            this.removeEventListener("tick", this.detecterCollisionProjectile_lier);
            this.supprimerMechant();
        };
        return Antagoniste;
    }(Mechant_1.Mechant));
    exports.Antagoniste = Antagoniste;
});
//# sourceMappingURL=Antagoniste.js.map