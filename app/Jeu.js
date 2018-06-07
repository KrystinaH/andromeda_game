define(["require", "exports", "./DecorFixe", "./DecorDefilant", "./Avatar", "./Projectile", "./Antagoniste", "./Obstacle", "./AfficheurVies", "./AfficheurPointage", "./PanneauIntro", "./PanneauNiveau", "./PanneauFin"], function (require, exports, DecorFixe_1, DecorDefilant_1, Avatar_1, Projectile_1, Antagoniste_1, Obstacle_1, AfficheurVies_1, AfficheurPointage_1, PanneauIntro_1, PanneauNiveau_1, PanneauFin_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Jeu = (function () {
        //Constructeur
        function Jeu(refScene) {
            //Attributs
            this.refScene = null;
            this.leDecorFixe = null;
            this.leDecorDefilant = null;
            this.lAvatar = null;
            this.lesViesAvatar = 2;
            this.lEnergieAvatar = 5;
            this.tProjectiles = new Array();
            this.tAntagonistes = new Array();
            this.tObstacles = new Array();
            this.lAfficheurDeVies = null;
            this.lAfficheurPts = null;
            this.lePanneauIntro = null;
            this.lePanneauNiveau = null;
            this.lePanneauFin = null;
            this.minuterieAntagoniste = null;
            this.minuterieObstacle = null;
            this.minuteriePanneauNiveau = null;
            this.niveauCourant = 1;
            this.nbNiveaux = 2;
            this.scoreFinal = 0;
            this.objectifsNiveaux = null;
            this.trameSonore = null;
            this.refScene = refScene;
            this.lePanneauIntro = new PanneauIntro_1.PanneauIntro(this.refScene, 0, 0, this);
            this.objectifsNiveaux = new Array(this.nbNiveaux);
            this.objectifsNiveaux[0] = 2500;
            this.objectifsNiveaux[1] = 5000;
        }
        //Méthodes
        //Déroulement de la partie
        Jeu.prototype.retournerObjectifCourant = function () {
            return this.objectifsNiveaux[this.niveauCourant - 1];
        };
        Jeu.prototype.retournerNiveauCourant = function () {
            return this.niveauCourant;
        };
        Jeu.prototype.retournerNbNiveaux = function () {
            return this.nbNiveaux;
        };
        Jeu.prototype.debuterJeu = function () {
            this.niveauCourant = 1;
            if (this.lePanneauIntro != null) {
                this.supprimerPanneauIntro();
            }
            if (this.lePanneauFin != null) {
                this.supprimerPanneauFin();
            }
            this.trameSonore = createjs.Sound.play("SonTrameSonore", { interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1 });
            this.trameSonore.volume = 0.7;
            this.lePanneauNiveau = new PanneauNiveau_1.PanneauNiveau(this.refScene, 0, 0, this);
            this.minuteriePanneauNiveau = window.setInterval(this.debuterNiveau.bind(this), 1500);
            createjs.WebAudioPlugin.context.resume();
        };
        Jeu.prototype.debuterNiveau = function () {
            window.clearInterval(this.minuteriePanneauNiveau);
            this.minuteriePanneauNiveau = null;
            this.leDecorFixe = new DecorFixe_1.DecorFixe(this.refScene, 0, 0, this.niveauCourant);
            this.leDecorDefilant = new DecorDefilant_1.DecorDefilant(this.refScene, 1, 2, this.niveauCourant);
            this.lAfficheurDeVies = new AfficheurVies_1.AfficheurVies(this.refScene, 25, 25);
            this.lAfficheurDeVies.majAffichageVies(this.lesViesAvatar);
            this.lAfficheurDeVies.majAffichageEnergie(this.lEnergieAvatar);
            this.lAfficheurPts = new AfficheurPointage_1.AfficheurPointage(this.refScene, 500, 550);
            this.lAvatar = new Avatar_1.Avatar(this.refScene, 100, 500, this, 1, this.lAfficheurDeVies, this.lAfficheurPts, this.lesViesAvatar, this.lEnergieAvatar);
            this.minuterieAntagoniste = window.setInterval(this.creerAntagoniste.bind(this), 1000);
            this.minuterieObstacle = window.setInterval(this.creerObstacle.bind(this), 1000);
            createjs.Ticker.addEventListener("tick", this.classerObjetsEnProfondeur.bind(this));
        };
        Jeu.prototype.terminerNiveau = function (nbViesAvatar, nbUnitesEnergieAvatar) {
            this.niveauCourant++;
            this.lesViesAvatar = nbViesAvatar;
            this.lEnergieAvatar = nbUnitesEnergieAvatar;
            this.supprimerLesElementsNiveau();
            this.lePanneauNiveau = new PanneauNiveau_1.PanneauNiveau(this.refScene, 0, 0, this);
            this.lePanneauNiveau.gotoAndStop('jour' + this.niveauCourant);
            this.minuteriePanneauNiveau = window.setInterval(this.debuterNiveau.bind(this), 1500);
        };
        Jeu.prototype.supprimerLesElementsNiveau = function () {
            //@TODO Vérifier pourquoi une erreur de tickEnabled survient
            window.clearInterval(this.minuterieAntagoniste);
            this.minuterieAntagoniste = null;
            window.clearInterval(this.minuterieObstacle);
            this.minuterieObstacle = null;
            this.scoreFinal += this.lAvatar.retournerPointage();
            this.leDecorFixe.supprimerDecorFixe();
            this.leDecorFixe = null;
            this.leDecorDefilant.supprimerDecorDefilant();
            this.leDecorDefilant = null;
            this.lAfficheurDeVies.supprimerAfficheurVies();
            this.lAfficheurDeVies = null;
            this.lAfficheurPts.supprimerAfficheurPts();
            this.lAfficheurPts = null;
            this.lAvatar.supprimerAvatar();
            this.lAvatar = null;
            this.supprimerLesAntagonistes();
            this.supprimerLesObstacles();
            this.supprimerLesProjectiles();
        };
        Jeu.prototype.terminerPartie = function (partieGagne) {
            this.supprimerLesElementsNiveau();
            createjs.Tween.get(this.trameSonore).to({ volume: 0 }, 200);
            this.lePanneauFin = new PanneauFin_1.PanneauFin(this.refScene, 0, 0, this.scoreFinal, partieGagne, this);
            if (partieGagne) {
                var sonReussite = createjs.Sound.play('SonReussite');
                sonReussite.volume = 2;
            }
            else {
                createjs.Sound.play('SonPerte');
            }
        };
        //Interfaces du jeu
        Jeu.prototype.supprimerPanneauIntro = function () {
            this.lePanneauIntro.supprimerPanneauIntro();
            this.lePanneauIntro = null;
        };
        Jeu.prototype.supprimerPanneauNiveau = function () {
            this.lePanneauNiveau.supprimerPanneauNiveau();
            this.lePanneauNiveau = null;
        };
        Jeu.prototype.supprimerPanneauFin = function () {
            this.lePanneauFin.supprimerPanneauFin();
            this.lePanneauFin = null;
        };
        //Projectiles
        Jeu.prototype.creerProjectile = function (unX, unY) {
            var unProjectile = new Projectile_1.Projectile(this.refScene, unX, unY, 500, -1, this);
            this.tProjectiles.push(unProjectile);
        };
        Jeu.prototype.supprimerUnProjectile = function (refProjectile) {
            var indexProjectile = this.tProjectiles.indexOf(refProjectile);
            if (indexProjectile != -1) {
                this.tProjectiles[indexProjectile].supprimerProjectile();
                this.tProjectiles.splice(indexProjectile, 1);
                refProjectile = null;
            }
        };
        Jeu.prototype.supprimerLesProjectiles = function () {
            while (this.tProjectiles.length > 0) {
                this.supprimerUnProjectile(this.tProjectiles[0]);
            }
        };
        //Antagonistes
        Jeu.prototype.creerAntagoniste = function () {
            if (this.tAntagonistes.length < 8) {
                var unYRandom = Math.floor((Math.random() * 300) + 250);
                var unAntagoniste = new Antagoniste_1.Antagoniste(this.refScene, 900, unYRandom, 1, 100, 1, this.lAvatar, this, this.tProjectiles);
                this.tAntagonistes.push(unAntagoniste);
            }
        };
        Jeu.prototype.supprimerUnAntagoniste = function (refAntagoniste) {
            var indexAntagoniste = this.tAntagonistes.lastIndexOf(refAntagoniste);
            if (indexAntagoniste != -1) {
                this.tAntagonistes[indexAntagoniste].supprimerAntagoniste();
                this.tAntagonistes.splice(indexAntagoniste, 1);
                refAntagoniste = null;
            }
        };
        Jeu.prototype.supprimerLesAntagonistes = function () {
            while (this.tAntagonistes.length > 0) {
                this.supprimerUnAntagoniste(this.tAntagonistes[0]);
            }
        };
        //Obstacles
        Jeu.prototype.creerObstacle = function () {
            if (this.tObstacles.length < 8) {
                var unYRandom = Math.floor((Math.random() * 300) + 250);
                var unObstacle = new Obstacle_1.Obstacle(this.refScene, 900, unYRandom, 1, 50, 1, this.lAvatar, this);
                this.tObstacles.push(unObstacle);
            }
        };
        Jeu.prototype.supprimerUnObstacle = function (refObstacle) {
            var indexObstacle = this.tObstacles.indexOf(refObstacle);
            if (indexObstacle != -1) {
                this.tObstacles[indexObstacle].supprimerObstacle();
                this.tObstacles.splice(indexObstacle, 1);
                refObstacle = null;
            }
        };
        Jeu.prototype.supprimerLesObstacles = function () {
            while (this.tObstacles.length > 0) {
                this.supprimerUnObstacle(this.tObstacles[0]);
            }
        };
        //Affichage des éléments de la scène
        Jeu.prototype.classerObjetsEnProfondeur = function () {
            this.refScene.sortChildren(this.comparerY.bind(this));
        };
        Jeu.prototype.comparerY = function (a, b) {
            return a.y - b.y;
        };
        return Jeu;
    }());
    exports.Jeu = Jeu;
});
//# sourceMappingURL=Jeu.js.map