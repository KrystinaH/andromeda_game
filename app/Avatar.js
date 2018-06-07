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
    var Avatar = (function (_super) {
        __extends(Avatar, _super);
        //Constructeur
        function Avatar(refScene, unX, unY, refJeu, redimensionMax, refAfficheurVies, refAfficheurPts, nbVies, nbUnitesEnergie) {
            var _this = _super.call(this, refScene, unX, unY) || this;
            //Attributs
            _this.tTouches = [false, false, false, false, false];
            // Top Rigth Bottom Left Space
            // 38   39    40    37    32
            // W    A     S     D
            // 87   68    83    65
            _this.refJeu = null;
            _this.faireCreerProjectile_lier = null;
            _this.estInvincible = false;
            _this.redimensionMax = null;
            _this.nbVies = null;
            _this.nbUnitesEnergie = null;
            _this.nbPoints = 0;
            _this.tPointsContact = null;
            _this.refAfficheurVies = null;
            _this.refAfficheurPts = null;
            _this.minuterieDeplacement = null;
            _this.minuterieInvincibilite = null;
            _this.minuterieMort = null;
            _this.refJeu = refJeu;
            _this.nbVies = nbVies;
            _this.nbUnitesEnergie = nbUnitesEnergie;
            _this.refAfficheurVies = refAfficheurVies;
            _this.refAfficheurPts = refAfficheurPts;
            _this.refAfficheurVies.majAffichageVies(_this.nbVies);
            _this.tPointsContact = new Array();
            for (var i = 0; i < 4; i++) {
                _this.tPointsContact[i] = _this['p' + i];
            }
            window.onkeydown = _this.gererToucheEnfoncee.bind(_this);
            window.onkeyup = _this.gererToucheRelachee.bind(_this);
            _this.redimensionMax = redimensionMax;
            _this.redimensionner();
            _this.faireCreerProjectile_lier = _this.faireCreerProjectile.bind(_this);
            _this['haut'].addEventListener("lancer", _this.faireCreerProjectile_lier);
            return _this;
        }
        //Méthodes
        Avatar.prototype.dessiner = function () {
            window.lib.ClipAvatar.call(this);
            this.frameBounds = window.lib.ClipAvatar.prototype.frameBounds;
        };
        Avatar.prototype.gagnerDesPoints = function () {
            this.nbPoints += 100;
            this.refAfficheurPts.majAffichagePts(this.nbPoints);
            if (this.nbPoints == this.refJeu.retournerObjectifCourant()) {
                if (this.refJeu.retournerNiveauCourant() < this.refJeu.retournerNbNiveaux()) {
                    this.refJeu.terminerNiveau(this.nbVies, this.nbUnitesEnergie);
                }
                else {
                    this.refJeu.terminerPartie(true);
                }
            }
        };
        Avatar.prototype.gererCollision = function () {
            if (!this.estInvincible) {
                this.perdreUneUniteEnergie();
                if (this.nbVies > 0) {
                    this.activerInvincibilite();
                    createjs.Sound.play('SonAvatarBlesse');
                }
            }
        };
        Avatar.prototype.perdreUneVie = function () {
            this.nbVies -= 1;
            this.refAfficheurVies.majAffichageVies(this.nbVies);
        };
        Avatar.prototype.perdreUneUniteEnergie = function () {
            this.nbUnitesEnergie -= 1;
            this.refAfficheurVies.majAffichageEnergie(this.nbUnitesEnergie);
            if (this.nbUnitesEnergie == 0) {
                this.perdreUneVie();
                if (this.nbVies == 0) {
                    createjs.Sound.play('SonAvatarMort');
                    this.gotoAndPlay('meurt');
                    this.minuterieMort = window.setTimeout(this.faireTerminerPartie.bind(this), 2000);
                }
                else {
                    this.nbUnitesEnergie = 5;
                    this.refAfficheurVies.majAffichageEnergie(this.nbUnitesEnergie);
                }
            }
        };
        Avatar.prototype.faireTerminerPartie = function () {
            window.clearTimeout(this.minuterieMort);
            this.minuterieMort = null;
            this.refJeu.terminerPartie(false);
        };
        Avatar.prototype.retournerPointage = function () {
            return this.nbPoints;
        };
        Avatar.prototype.activerInvincibilite = function () {
            this.estInvincible = true;
            this.gotoAndPlay('blesse');
            if (this.minuterieInvincibilite == null) {
                this.minuterieInvincibilite = window.setInterval(this.desactiverInvincibilite.bind(this), 1500);
            }
        };
        Avatar.prototype.desactiverInvincibilite = function () {
            this.estInvincible = false;
            this.gotoAndStop('normal');
            this['haut'].gotoAndStop('fixe');
            this['bas'].gotoAndStop('fixe');
            window.clearInterval(this.minuterieInvincibilite);
            this.minuterieInvincibilite = null;
        };
        Avatar.prototype.enCollisionGrossiereAvec = function (refDemandeur) {
            if (Math.abs(this.y - refDemandeur.y) < 30 && this.nbVies > 0) {
                var monRect = this.getTransformedBounds();
                var rectDemandeur = refDemandeur.getTransformedBounds();
                var enCollision = monRect.intersects(rectDemandeur);
                return enCollision;
            }
            return false;
        };
        Avatar.prototype.enCollisionFineAvec = function (refDemandeur) {
            var indexPointTouche = -1;
            for (var i = 0; i < this.tPointsContact.length && indexPointTouche == -1; i++) {
                var monPoint = this.tPointsContact[i];
                var monPointLocalAuDemandeur = monPoint.parent.localToLocal(monPoint.x, monPoint.y, refDemandeur);
                if (refDemandeur.hitTest(monPointLocalAuDemandeur.x, monPointLocalAuDemandeur.y)) {
                    indexPointTouche = i;
                }
            }
            return indexPointTouche;
        };
        Avatar.prototype.faireCreerProjectile = function () {
            var facteurDeRedimensionnement = this.y / window.lib.properties.height;
            this.scaleX = facteurDeRedimensionnement;
            this.scaleY = facteurDeRedimensionnement;
            this.refJeu.creerProjectile(this.x + (this.getTransformedBounds().width / 2), this.y - (this.getTransformedBounds().height / 2));
        };
        Avatar.prototype.gererToucheEnfoncee = function (evenement) {
            if (this.nbVies > 0) {
                switch (evenement.keyCode) {
                    case 38:
                    case 87:
                        this.tTouches[0] = true;
                        evenement.preventDefault();
                        break;
                    case 39:
                    case 68:
                        this.tTouches[1] = true;
                        evenement.preventDefault();
                        break;
                    case 40:
                    case 83:
                        this.tTouches[2] = true;
                        evenement.preventDefault();
                        break;
                    case 37:
                    case 65:
                        this.tTouches[3] = true;
                        evenement.preventDefault();
                        break;
                    case 32:
                        this.tTouches[4] = true;
                        evenement.preventDefault();
                        break;
                }
                if (this.minuterieDeplacement == null) {
                    this.minuterieDeplacement = window.setInterval(this.faireBouger.bind(this), 1000 / 60);
                }
                this.majHabillage();
            }
        };
        Avatar.prototype.gererToucheRelachee = function (evenement) {
            switch (evenement.keyCode) {
                case 38:
                case 87:
                    this.tTouches[0] = false;
                    break;
                case 39:
                case 68:
                    this.tTouches[1] = false;
                    break;
                case 40:
                case 83:
                    this.tTouches[2] = false;
                    break;
                case 37:
                case 65:
                    this.tTouches[3] = false;
                    break;
                case 32:
                    this.tTouches[4] = false;
                    break;
            }
            if (this.tTouches == [false, false, false, false]) {
                window.clearInterval(this.minuterieDeplacement);
                this.minuterieDeplacement = null;
            }
            this.majHabillage();
        };
        Avatar.prototype.faireBouger = function () {
            if (this.tTouches[0]) {
                //Haut
                if (this.y > Avatar.limite.haut) {
                    this.y -= 5;
                }
            }
            if (this.tTouches[1]) {
                //Droite
                if (this.x < Avatar.limite.droite) {
                    this.x += 5;
                }
            }
            if (this.tTouches[2]) {
                //Bas
                if (this.y < Avatar.limite.bas) {
                    this.y += 5;
                }
            }
            if (this.tTouches[3]) {
                //Gauche
                if (this.x > Avatar.limite.gauche) {
                    this.x -= 5;
                }
            }
            this.redimensionner();
        };
        Avatar.prototype.majHabillage = function () {
            // Déplacement
            if (this.tTouches[0] || this.tTouches[1] || this.tTouches[2] || this.tTouches[3]) {
                if (this['bas'].currentLabel != "marche") {
                    this['bas'].gotoAndPlay('marche');
                }
                if (this['haut'].currentLabel != 'marche') {
                    this['haut'].gotoAndPlay('marche');
                }
            }
            else {
                if (this['bas'].currentLabel != "fixe") {
                    this['bas'].gotoAndStop('fixe');
                }
                if (this['haut'].currentLabel != 'fixe') {
                    this['haut'].gotoAndStop('fixe');
                }
            }
            // Tir
            if (this.tTouches[4]) {
                if (this['haut'].currentLabel != "lance") {
                    this['haut'].gotoAndPlay("lance");
                }
            }
        };
        Avatar.prototype.redimensionner = function () {
            var facteurDeRedimensionnement = this.redimensionMax * (this.y / window.lib.properties.height);
            this.scaleX = facteurDeRedimensionnement;
            this.scaleY = facteurDeRedimensionnement;
        };
        Avatar.prototype.supprimerAvatar = function () {
            this.supprimerObjetVisible();
        };
        return Avatar;
    }(ObjetVisible_1.ObjetVisible));
    Avatar.limite = {
        haut: 250,
        bas: 550,
        gauche: 0,
        droite: 800
    };
    exports.Avatar = Avatar;
});
//# sourceMappingURL=Avatar.js.map