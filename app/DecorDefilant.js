define(["require", "exports", "./MorceauDecor"], function (require, exports, MorceauDecor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DecorDefilant = (function () {
        //Constructeur
        function DecorDefilant(refScene, unY, uneVitesse, niveauCourant) {
            //Attributs
            this.uneVitesse = null;
            this.faireAvancer_lier = null;
            this.tDecors = null;
            this.faireAvancer_lier = this.faireAvancer.bind(this);
            this.uneVitesse = uneVitesse;
            this.tDecors = new Array();
            for (var i = 1; i <= 2; i++) {
                var unX = i * window.lib.properties.width;
                this.tDecors.push(new MorceauDecor_1.MorceauDecor(refScene, unX, unY, niveauCourant));
            }
            createjs.Ticker.addEventListener('tick', this.faireAvancer_lier);
        }
        //Méthodes
        DecorDefilant.prototype.faireAvancer = function () {
            for (var i = 0; i < this.tDecors.length; i++) {
                this.tDecors[i].deplacer(this.uneVitesse);
            }
        };
        DecorDefilant.prototype.supprimerDecorDefilant = function () {
            createjs.Ticker.removeEventListener('tick', this.faireAvancer_lier);
            while (this.tDecors.length != 0) {
                this.tDecors[0].supprimerMorceauDecor();
                this.tDecors[0] = null;
                this.tDecors.splice(0, 1);
            }
        };
        return DecorDefilant;
    }());
    exports.DecorDefilant = DecorDefilant;
});
//# sourceMappingURL=DecorDefilant.js.map