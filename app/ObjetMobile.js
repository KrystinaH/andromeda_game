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
    var ObjetMobile = (function (_super) {
        __extends(ObjetMobile, _super);
        //Constructeur
        function ObjetMobile(refScene, unX, unY, vitesse, sens) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            //Attributs
            _this.vitesse = 100;
            _this.sens = 1;
            _this.avancer_lier = null;
            _this.vitesse = vitesse;
            _this.sens = sens;
            _this.avancer_lier = _this.avancer.bind(_this);
            _this.addEventListener("tick", _this.avancer_lier);
            return _this;
        }
        //Méthodes
        ObjetMobile.prototype.avancer = function (evenement) {
            this.x -= (evenement.delta / 1000) * (this.vitesse * this.sens);
            var rectLimiteCourant = this.getTransformedBounds();
            if (rectLimiteCourant.x <= -100) {
                this.gererFinScene();
            }
        };
        ObjetMobile.prototype.supprimerObjetMobile = function () {
            this.removeEventListener("tick", this.avancer_lier);
            this.supprimerObjetVisible();
        };
        return ObjetMobile;
    }(ObjetVisible_1.ObjetVisible));
    exports.ObjetMobile = ObjetMobile;
});
//# sourceMappingURL=ObjetMobile.js.map