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
    var Obstacle = (function (_super) {
        __extends(Obstacle, _super);
        //Constructeur
        function Obstacle(refScene, unX, unY, redimensionMax, vitesse, sens, refAvatar, refJeu) {
            var _this = _super.call(this, refScene, unX, unY, redimensionMax, vitesse, sens, refAvatar, refJeu) || this;
            //Attributs
            _this.minuteriePoison = null;
            _this.detecterCollisionAvatar_lier = null;
            _this.estInvincible = false;
            _this.detecterCollisionAvatar_lier = _this.detecterCollisionAvatar.bind(_this);
            _this.addEventListener("tick", _this.detecterCollisionAvatar_lier);
            return _this;
        }
        Obstacle.prototype.dessiner = function () {
            window.lib.ClipObstacle.call(this);
            this.frameBounds = window.lib.ClipObstacle.prototype.frameBounds;
        };
        Obstacle.prototype.gererFinScene = function () {
            this.refJeu.supprimerUnObstacle(this);
        };
        Obstacle.prototype.detecterCollisionAvatar = function (evenement) {
            var toucheAlAvatar = this.refAvatar.enCollisionGrossiereAvec(this);
            if (toucheAlAvatar) {
                this.refAvatar.gererCollision();
                if (!this.estInvincible) {
                    this.debuterPoison();
                    this.estInvincible = true;
                }
            }
        };
        Obstacle.prototype.debuterPoison = function () {
            this.gotoAndPlay("poison");
            createjs.Sound.play('SonPoison');
            this.minuteriePoison = window.setTimeout(this.terminerPoison.bind(this), 400);
        };
        Obstacle.prototype.terminerPoison = function () {
            window.clearTimeout(this.minuteriePoison);
            this.minuteriePoison = null;
            this.refJeu.supprimerUnObstacle(this);
        };
        Obstacle.prototype.supprimerObstacle = function () {
            this.removeEventListener("tick", this.detecterCollisionAvatar_lier);
            this.supprimerMechant();
        };
        return Obstacle;
    }(Mechant_1.Mechant));
    exports.Obstacle = Obstacle;
});
//# sourceMappingURL=Obstacle.js.map