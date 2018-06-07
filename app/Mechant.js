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
    var Mechant = (function (_super) {
        __extends(Mechant, _super);
        //Constructeur
        function Mechant(refScene, unX, unY, redimensionMax, vitesse, sens, refAvatar, refJeu) {
            var _this = _super.call(this, refScene, unX, unY, vitesse, sens) || this;
            //Attributs
            _this.refAvatar = null;
            _this.refJeu = null;
            _this.redimensionMax = null;
            _this.redimensionMax = redimensionMax;
            _this.redimensionner();
            _this.refAvatar = refAvatar;
            _this.refJeu = refJeu;
            return _this;
        }
        Mechant.prototype.supprimerMechant = function () {
            this.supprimerObjetMobile();
        };
        Mechant.prototype.redimensionner = function () {
            var facteurDeRedimensionnement = this.redimensionMax * (this.y / window.lib.properties.height);
            this.scaleX = facteurDeRedimensionnement;
            this.scaleY = facteurDeRedimensionnement;
        };
        return Mechant;
    }(ObjetMobile_1.ObjetMobile));
    exports.Mechant = Mechant;
});
//# sourceMappingURL=Mechant.js.map