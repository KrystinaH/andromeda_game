import {ObjetVisible} from "./ObjetVisible";
import {Jeu} from "./Jeu";
import {AfficheurVies} from "./AfficheurVies";
import {AfficheurPointage} from "./AfficheurPointage";

export class Avatar extends ObjetVisible {
    //Attributs
    private tTouches: Array<Boolean> = [false, false, false, false, false];
    // Top Rigth Bottom Left Space
    // 38   39    40    37    32
    // W    A     S     D
    // 87   68    83    65
    private refJeu: Jeu = null;
    private static limite: { haut: number, bas: number, gauche: number, droite: number } = {
        haut: 250,
        bas: 550,
        gauche: 0,
        droite: 800
    };
    private faireCreerProjectile_lier: any = null;
    private estInvincible: boolean = false;
    private redimensionMax: number = null;
    private nbVies: number = null;
    private nbUnitesEnergie: number = null;
    private nbPoints: number = 0;
    private tPointsContact: Array<createjs.MovieClip> = null;
    private refAfficheurVies: AfficheurVies = null;
    private refAfficheurPts: AfficheurPointage = null;
    private minuterieDeplacement: number = null;
    private minuterieInvincibilite: number = null;
    private minuterieMort: number = null;

    //Constructeur
    public constructor(refScene: createjs.Stage, unX: number, unY: number, refJeu: Jeu, redimensionMax: number, refAfficheurVies: AfficheurVies, refAfficheurPts: AfficheurPointage, nbVies:number, nbUnitesEnergie:number) {
        super(refScene, unX, unY);
        this.refJeu = refJeu;
        this.nbVies = nbVies;
        this.nbUnitesEnergie = nbUnitesEnergie;
        this.refAfficheurVies = refAfficheurVies;
        this.refAfficheurPts = refAfficheurPts;
        this.refAfficheurVies.majAffichageVies(this.nbVies);
        this.tPointsContact = new Array();
        for (let i: number = 0; i < 4; i++) {
            this.tPointsContact[i] = this['p' + i];
        }
        window.onkeydown = this.gererToucheEnfoncee.bind(this);
        window.onkeyup = this.gererToucheRelachee.bind(this);
        this.redimensionMax = redimensionMax;
        this.redimensionner();
        this.faireCreerProjectile_lier = this.faireCreerProjectile.bind(this);
        this['haut'].addEventListener("lancer", this.faireCreerProjectile_lier);
    }

    //Méthodes
    protected dessiner(): void {
        window.lib.ClipAvatar.call(this);
        this.frameBounds = window.lib.ClipAvatar.prototype.frameBounds;
    }

    public gagnerDesPoints(): void {
        this.nbPoints += 100;
        this.refAfficheurPts.majAffichagePts(this.nbPoints);
        if(this.nbPoints == this.refJeu.retournerObjectifCourant())
        {
            if(this.refJeu.retournerNiveauCourant() < this.refJeu.retournerNbNiveaux())
            {
                this.refJeu.terminerNiveau(this.nbVies, this.nbUnitesEnergie);
            }
            else
            {
                this.refJeu.terminerPartie(true);
            }
        }

    }

    public gererCollision(): void {
        if (!this.estInvincible) {
            this.perdreUneUniteEnergie();
            if(this.nbVies > 0)
            {
                this.activerInvincibilite();
                createjs.Sound.play('SonAvatarBlesse');
            }
        }
    }

    private perdreUneVie(): void {
        this.nbVies -= 1;
        this.refAfficheurVies.majAffichageVies(this.nbVies);
    }

    private perdreUneUniteEnergie(): void {

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
    }

    private faireTerminerPartie():void
    {
        window.clearTimeout(this.minuterieMort);
        this.minuterieMort = null;
        this.refJeu.terminerPartie(false);
    }

    public retournerPointage():number
    {
        return this.nbPoints;
    }

    private activerInvincibilite():void
    {

        this.estInvincible = true;
        this.gotoAndPlay('blesse');
        if(this.minuterieInvincibilite == null)
        {
            this.minuterieInvincibilite = window.setInterval(this.desactiverInvincibilite.bind(this), 1500);
        }
    }

    private desactiverInvincibilite():void
    {
        this.estInvincible = false;
        this.gotoAndStop('normal');
        this['haut'].gotoAndStop('fixe');
        this['bas'].gotoAndStop('fixe');
        window.clearInterval(this.minuterieInvincibilite);
        this.minuterieInvincibilite = null;
    }

    public enCollisionGrossiereAvec(refDemandeur:createjs.MovieClip):boolean
    {
        if(Math.abs(this.y - refDemandeur.y) < 30 && this.nbVies > 0)
        {
            let monRect = this.getTransformedBounds();
            let rectDemandeur = refDemandeur.getTransformedBounds();
            let enCollision = monRect.intersects(rectDemandeur);
            return enCollision;
        }
        return false;
    }

    public enCollisionFineAvec(refDemandeur:createjs.MovieClip):number
    {
        let indexPointTouche:number = -1;
        for(let i:number = 0; i < this.tPointsContact.length && indexPointTouche == -1; i++)
        {
            let monPoint:createjs.MovieClip = this.tPointsContact[i];
            let monPointLocalAuDemandeur:createjs.Point = monPoint.parent.localToLocal(monPoint.x, monPoint.y, refDemandeur);
            if(refDemandeur.hitTest(monPointLocalAuDemandeur.x, monPointLocalAuDemandeur.y))
            {
                indexPointTouche = i;
            }
        }
        return indexPointTouche;
    }

    private faireCreerProjectile():void
    {
        let facteurDeRedimensionnement = this.y/window.lib.properties.height;
        this.scaleX = facteurDeRedimensionnement;
        this.scaleY = facteurDeRedimensionnement;
        this.refJeu.creerProjectile(this.x + (this.getTransformedBounds().width/2), this.y - (this.getTransformedBounds().height/2));
    }

    private gererToucheEnfoncee(evenement:KeyboardEvent):void
    {
        if(this.nbVies > 0)
        {
            switch (evenement.keyCode)
            {
                case 38 : case 87 :
                    this.tTouches[0] = true;
                    evenement.preventDefault();
                    break;
                case 39 : case 68 :
                    this.tTouches[1] = true;
                    evenement.preventDefault();
                    break;
                case 40 : case 83 :
                    this.tTouches[2] = true;
                    evenement.preventDefault();
                    break;
                case 37 : case 65 :
                    this.tTouches[3] = true;
                    evenement.preventDefault();
                    break;
                case 32 :
                    this.tTouches[4] = true;
                    evenement.preventDefault();
                    break;
            }

            if(this.minuterieDeplacement == null)
            {
                this.minuterieDeplacement = window.setInterval(this.faireBouger.bind(this), 1000/60);
            }
            this.majHabillage();
        }
    }

    private gererToucheRelachee(evenement:KeyboardEvent):void
    {
        switch (evenement.keyCode)
        {
            case 38 : case 87 :
                this.tTouches[0] = false;
                break;
            case 39 : case 68 :
                this.tTouches[1] = false;
                break;
            case 40 : case 83 :
                this.tTouches[2] = false;
                break;
            case 37 : case 65 :
                this.tTouches[3] = false;
                break;
            case 32 :
                this.tTouches[4] = false;
                break;
        }

        if(this.tTouches == [false, false, false, false])
        {
            window.clearInterval(this.minuterieDeplacement);
            this.minuterieDeplacement = null;
        }

        this.majHabillage();
    }

    private faireBouger():void
    {
        if(this.tTouches[0])
        {
            //Haut
            if(this.y > Avatar.limite.haut)
            {
                this.y -=5;
            }
        }
        if(this.tTouches[1])
        {
            //Droite
            if(this.x < Avatar.limite.droite)
            {
                this.x +=5;
            }
        }
        if(this.tTouches[2])
        {
            //Bas
            if(this.y < Avatar.limite.bas)
            {
                this.y +=5;
            }
        }
        if(this.tTouches[3])
        {
            //Gauche
            if(this.x > Avatar.limite.gauche)
            {
                this.x -=5;
            }
        }

        this.redimensionner();
    }

    private majHabillage():void
    {
        // Déplacement
        if(this.tTouches[0] || this.tTouches[1] || this.tTouches[2] || this.tTouches[3])
        {
            if(this['bas'].currentLabel != "marche")
            {
                this['bas'].gotoAndPlay('marche');
            }
            if(this['haut'].currentLabel != 'marche')
            {
                this['haut'].gotoAndPlay('marche');
            }
        }
        else{
            if(this['bas'].currentLabel != "fixe")
            {
                this['bas'].gotoAndStop('fixe');
            }
            if(this['haut'].currentLabel != 'fixe')
            {
                this['haut'].gotoAndStop('fixe');
            }
        }
        // Tir
        if(this.tTouches[4])
        {
            if(this['haut'].currentLabel != "lance")
            {
                this['haut'].gotoAndPlay("lance");
            }
        }
    }

    private redimensionner():void{
        let facteurDeRedimensionnement = this.redimensionMax * (this.y/window.lib.properties.height);
        this.scaleX = facteurDeRedimensionnement;
        this.scaleY = facteurDeRedimensionnement;
    }

    public supprimerAvatar():void
    {
        this.supprimerObjetVisible();
    }
}