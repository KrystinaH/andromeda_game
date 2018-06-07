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
define(["require", "exports", "./ObjetDefilant"], function (require, exports, ObjetDefilant_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DecorArrierePlan = (function (_super) {
        __extends(DecorArrierePlan, _super);
        //Attributs
        //Constructeur
        function DecorArrierePlan(refScene, unX, unY) {
            return _super.call(this, refScene, unX, unY) || this;
        }
        //Méthodes
        DecorArrierePlan.prototype.dessiner = function () {
            window.lib.ClipDecorArrierePlan.call(this);
            this.frameBounds = window.lib.ClipDecorArrierePlan.prototype.frameBounds;
        };
        DecorArrierePlan.prototype.gererFinScene = function () {
        };
        return DecorArrierePlan;
    }(ObjetDefilant_1.ObjetDefilant));
    exports.DecorArrierePlan = DecorArrierePlan;
});
//# sourceMappingURL=DecorArrierePlan.js.map