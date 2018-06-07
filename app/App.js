define(["require", "exports", "./Jeu"], function (require, exports, Jeu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        // Méthodes
        function App() {
            // Attributs
            this.scene = null;
            this.jeu = null;
            // Télécharger les médias et initialiser l'animation.
            window.init(this);
        }
        App.prototype.initialiser = function (refScene) {
            // Initialisation des attributs relatifs à l'animation ---------------------------------------
            this.scene = refScene; // Récupérer la référence de la scène nouvellement créée
            createjs.Ticker.framerate = 30; // Vitesse de l'animation (peut être modifiée si nécessaire)
            // -------------------------------------------------------------------------------------------
            // Initialisation des objets du lieu 0
            this.jeu = new Jeu_1.Jeu(this.scene);
        };
        return App;
    }()); // fin classe
    exports.App = App;
});
//# sourceMappingURL=App.js.map