import {DecorFixe} from "./DecorFixe";
import {DecorDefilant} from "./DecorDefilant";
import {Avatar} from "./Avatar";
import {Projectile} from "./Projectile";
import {Antagoniste} from "./Antagoniste";
import {Obstacle} from "./Obstacle";
import {AfficheurVies} from "./AfficheurVies";
import {AfficheurPointage} from "./AfficheurPointage";
import {PanneauIntro} from "./PanneauIntro";
import {PanneauNiveau} from "./PanneauNiveau";
import {PanneauFin} from "./PanneauFin";

export class Jeu{
    //Attributs
    private refScene:createjs.Stage = null;
    private leDecorFixe:DecorFixe = null;
    private leDecorDefilant:DecorDefilant = null;
    private lAvatar:Avatar = null;
    private lesViesAvatar:number = 2;
    private lEnergieAvatar:number = 5;
    private tProjectiles:Array<Projectile> = new Array();
    private tAntagonistes:Array<Antagoniste> = new Array();
    private tObstacles:Array<Obstacle> = new Array();
    private lAfficheurDeVies:AfficheurVies = null;
    private lAfficheurPts:AfficheurPointage = null;
    private lePanneauIntro:PanneauIntro = null;
    private lePanneauNiveau:PanneauNiveau = null;
    private lePanneauFin:PanneauFin = null;
    private minuterieAntagoniste:number = null;
    private minuterieObstacle:number = null;
    private minuteriePanneauNiveau:number = null;
    private niveauCourant:number = 1;
    private nbNiveaux:number = 2;
    private scoreFinal:number = 0;
    private objectifsNiveaux:Array<number> = null;
    private trameSonore:createjs.Sound = null;

    //Constructeur
    public constructor(refScene:createjs.Stage)
    {
        this.refScene = refScene;
        this.lePanneauIntro = new PanneauIntro(this.refScene, 0, 0, this);
        this.objectifsNiveaux = new Array(this.nbNiveaux);
        this.objectifsNiveaux[0] = 2500;
        this.objectifsNiveaux[1] = 5000;
    }

    //Méthodes
    //Déroulement de la partie
    public retournerObjectifCourant():number
    {
        return this.objectifsNiveaux[this.niveauCourant - 1];
    }

    public retournerNiveauCourant():number
    {
        return this.niveauCourant;
    }

    public retournerNbNiveaux():number
    {
        return this.nbNiveaux;
    }

    public debuterJeu():void
    {
        this.niveauCourant = 1;
        if(this.lePanneauIntro != null)
        {
            this.supprimerPanneauIntro();
        }
        if(this.lePanneauFin != null)
        {
            this.supprimerPanneauFin();
        }
        this.trameSonore = createjs.Sound.play("SonTrameSonore", {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
        this.trameSonore.volume = 0.7;
        this.lePanneauNiveau = new PanneauNiveau(this.refScene, 0, 0, this);
        this.minuteriePanneauNiveau = window.setInterval(this.debuterNiveau.bind(this), 1500);
        createjs.WebAudioPlugin.context.resume();
    }

    public debuterNiveau():void
    {
        window.clearInterval(this.minuteriePanneauNiveau);
        this.minuteriePanneauNiveau = null;
        this.leDecorFixe = new DecorFixe(this.refScene, 0, 0, this.niveauCourant);
        this.leDecorDefilant = new DecorDefilant(this.refScene, 1, 2, this.niveauCourant);
        this.lAfficheurDeVies = new AfficheurVies(this.refScene, 25, 25);
        this.lAfficheurDeVies.majAffichageVies(this.lesViesAvatar);
        this.lAfficheurDeVies.majAffichageEnergie(this.lEnergieAvatar);
        this.lAfficheurPts = new AfficheurPointage(this.refScene, 500, 550);
        this.lAvatar = new Avatar(this.refScene, 100, 500, this, 1, this.lAfficheurDeVies, this.lAfficheurPts, this.lesViesAvatar, this.lEnergieAvatar);
        this.minuterieAntagoniste = window.setInterval(this.creerAntagoniste.bind(this), 1000);
        this.minuterieObstacle = window.setInterval(this.creerObstacle.bind(this), 1000);
        createjs.Ticker.addEventListener("tick", this.classerObjetsEnProfondeur.bind(this));
    }

    public terminerNiveau(nbViesAvatar:number, nbUnitesEnergieAvatar:number):void
    {
        this.niveauCourant++;
        this.lesViesAvatar = nbViesAvatar;
        this.lEnergieAvatar = nbUnitesEnergieAvatar;
        this.supprimerLesElementsNiveau();
        this.lePanneauNiveau = new PanneauNiveau(this.refScene, 0, 0, this);
        this.lePanneauNiveau.gotoAndStop('jour'+this.niveauCourant);
        this.minuteriePanneauNiveau = window.setInterval(this.debuterNiveau.bind(this), 1500);
    }

    private supprimerLesElementsNiveau():void
    {
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
    }

    public terminerPartie(partieGagne:boolean):void
    {
        this.supprimerLesElementsNiveau();
        createjs.Tween.get(this.trameSonore).to({volume:0}, 200);
        this.lePanneauFin = new PanneauFin(this.refScene, 0, 0, this.scoreFinal, partieGagne, this)
        if(partieGagne)
        {
            let sonReussite = createjs.Sound.play('SonReussite');
            sonReussite.volume = 2;
        }
        else
        {
            createjs.Sound.play('SonPerte');
        }
    }

    //Interfaces du jeu
    private supprimerPanneauIntro():void
    {
        this.lePanneauIntro.supprimerPanneauIntro();
        this.lePanneauIntro = null;
    }

    public supprimerPanneauNiveau():void
    {
        this.lePanneauNiveau.supprimerPanneauNiveau();
        this.lePanneauNiveau = null;
    }

    private supprimerPanneauFin():void
    {
        this.lePanneauFin.supprimerPanneauFin();
        this.lePanneauFin = null;
    }

    //Projectiles
    public creerProjectile(unX:number, unY:number):void
    {
        let unProjectile:Projectile = new Projectile(this.refScene, unX, unY, 500, -1, this);
        this.tProjectiles.push(unProjectile);
    }

    public supprimerUnProjectile(refProjectile:Projectile):void
    {
        let indexProjectile:number = this.tProjectiles.indexOf(refProjectile);
        if(indexProjectile != -1)
        {
            this.tProjectiles[indexProjectile].supprimerProjectile();
            this.tProjectiles.splice(indexProjectile, 1);
            refProjectile = null;
        }
    }

    public supprimerLesProjectiles():void{
        while(this.tProjectiles.length > 0)
        {
            this.supprimerUnProjectile(this.tProjectiles[0]);
        }
    }

    //Antagonistes
    private creerAntagoniste():void
    {
        if(this.tAntagonistes.length < 8)
        {
            let unYRandom:number = Math.floor((Math.random() * 300) + 250);
            let unAntagoniste:Antagoniste = new Antagoniste(this.refScene, 900, unYRandom, 1, 100, 1, this.lAvatar, this, this.tProjectiles);
            this.tAntagonistes.push(unAntagoniste);
        }
    }

    public supprimerUnAntagoniste(refAntagoniste:Antagoniste):void
    {
        let indexAntagoniste:number = this.tAntagonistes.lastIndexOf(refAntagoniste);
        if(indexAntagoniste != -1)
        {
            this.tAntagonistes[indexAntagoniste].supprimerAntagoniste();
            this.tAntagonistes.splice(indexAntagoniste, 1);
            refAntagoniste = null;
        }
    }

    public supprimerLesAntagonistes():void
    {
        while(this.tAntagonistes.length > 0)
        {
            this.supprimerUnAntagoniste(this.tAntagonistes[0]);
        }
    }

    //Obstacles
    private creerObstacle():void
    {
        if(this.tObstacles.length < 8)
        {
            let unYRandom:number = Math.floor((Math.random() * 300) + 250);
            let unObstacle:Obstacle = new Obstacle(this.refScene, 900, unYRandom, 1, 50, 1, this.lAvatar, this);
            this.tObstacles.push(unObstacle);
        }
    }

    public supprimerUnObstacle(refObstacle:Obstacle):void
    {
        let indexObstacle:number = this.tObstacles.indexOf(refObstacle);
        if(indexObstacle != -1)
        {
            this.tObstacles[indexObstacle].supprimerObstacle();
            this.tObstacles.splice(indexObstacle, 1);
            refObstacle = null;
        }
    }

    public supprimerLesObstacles():void{
        while(this.tObstacles.length > 0)
        {
            this.supprimerUnObstacle(this.tObstacles[0]);
        }
    }

    //Affichage des éléments de la scène
    private classerObjetsEnProfondeur():void{
        this.refScene.sortChildren(this.comparerY.bind(this));
    }

    private comparerY(a:createjs.MovieClip, b:createjs.MovieClip):number{
        return a.y-b.y
    }
}
