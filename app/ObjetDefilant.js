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
    var ObjetDefilant = (function (_super) {
        __extends(ObjetDefilant, _super);
        //Constructeur
        function ObjetDefilant(refScene, unX, unY, redimensionMax, sens, vitesse) {
            return _super.call(this, refScene, unX, unY, redimensionMax, sens, vitesse) || this;
        }
        //Méthodes
        ObjetDefilant.prototype.replacer = function () {
            this.x -= (window.lib.properties.width + this.getTransformedBounds().width);
        };
        return ObjetDefilant;
    }(ObjetMobile_1.ObjetMobile));
    exports.ObjetDefilant = ObjetDefilant;
});
//# sourceMappingURL=ObjetDefilant.js.map