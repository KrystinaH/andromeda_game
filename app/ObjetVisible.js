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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ObjetVisible = (function (_super) {
        __extends(ObjetVisible, _super);
        //Constructeur
        function ObjetVisible(refScene, unX, unY) {
            var _this = _super.call(this) || this;
            _this.dessiner();
            _this.gotoAndStop(0);
            refScene.addChild(_this);
            _this.x = unX;
            _this.y = unY;
            return _this;
        }
        //Méthodes
        ObjetVisible.prototype.supprimerObjetVisible = function () {
            this.parent.removeChild(this);
        };
        return ObjetVisible;
    }(createjs.MovieClip));
    exports.ObjetVisible = ObjetVisible;
});
//# sourceMappingURL=ObjetVisible.js.map