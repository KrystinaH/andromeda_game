"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PetitMonde_1 = require("./app/PetitMonde");
var app = {
    // Attributs
    stage: null,
    exportRoot: null,
    petitMonde: null,
    // Méthodes
    initialiserAnimation: function () {
        window.init(this); // Initialiser l'animation avec le méthode générée par Animate CC.
    },
    initialiser: function (refStage, refExportRoot) {
        // Initialisation des attributs relatifs à l'animation ------------------------------------------------------------------
        this.stage = refStage; // Récupérer la références de la scène nouvellement créée
        this.exportRoot = refExportRoot; // Récupérer la référence du scénario principale
        this.stage.enableMouseOver(24); // Activer les mouseover 24 fois par seconde sur la scène
        this.exportRoot.gotoAndStop(0); // Placer la tête de lecture au lieu 0 du scénario principal de l'animation
        // ----------------------------------------------------------------------------------------------------------------------
        // Initialisation des objets du lieu 0
        document.getElementById('btDebuter').addEventListener("click", this.faireDebuterPetitMonde.bind(this));
        document.getElementById('btArreter').addEventListener("click", this.faireArreterPetitMonde.bind(this));
    },
    faireDebuterPetitMonde: function () {
        if (this.petitMonde == null) {
            this.petitMonde = new PetitMonde_1.PetitMonde(this.exportRoot, this.stage);
        }
    },
    faireArreterPetitMonde: function () {
        if (this.petitMonde != null) {
            this.petitMonde.supprimerPetitMonde();
            this.petitMonde = null;
        }
    }
};
app.initialiserAnimation();
