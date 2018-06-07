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
define(["require", "exports", "./ObjetMobile"], function (require, exports, ObjetMobile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Projectile = (function (_super) {
        __extends(Projectile, _super);
        //Constructeur
        function Projectile(refScene, unX, unY, vitesse, sens, refJeu) {
            var _this = _super.call(this, refScene, unX, unY, vitesse, sens) || this;
            //Attributs
            _this.refJeu = null;
            _this.gererFinScene_lier = null;
            _this.refJeu = refJeu;
            _this.gererFinScene_lier = _this.gererFinScene.bind(_this);
            _this.addEventListener("tick", _this.gererFinScene_lier);
            createjs.Sound.play('SonProjectileLance');
            return _this;
        }
        //Méthodes
        Projectile.prototype.dessiner = function () {
            window.lib.ClipProjectile.call(this);
            this.frameBounds = window.lib.ClipProjectile.prototype.frameBounds;
        };
        Projectile.prototype.gererFinScene = function () {
            var rectLimiteCourant = this.getTransformedBounds();
            if (rectLimiteCourant.x >= window.lib.properties.width) {
                this.refJeu.supprimerUnProjectile(this);
            }
        };
        Projectile.prototype.supprimerProjectile = function () {
            this.removeEventListener("tick", this.gererFinScene_lier);
            this.supprimerObjetMobile();
        };
        return Projectile;
    }(ObjetMobile_1.ObjetMobile));
    exports.Projectile = Projectile;
});
//# sourceMappingURL=Projectile.js.map