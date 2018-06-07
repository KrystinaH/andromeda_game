import {Jeu} from "./Jeu";
import {Avatar} from "./Avatar";
import {Mechant} from "./Mechant";
import {Projectile} from "./Projectile";

export class Obstacle extends Mechant{
    //Attributs
    private minuteriePoison:number = null;
    private detecterCollisionAvatar_lier:any = null;
    private estInvincible:boolean = false;

    //Constructeur
    public constructor(refScene:createjs.Stage, unX:number, unY:number, redimensionMax:number, vitesse:number, sens:number, refAvatar:Avatar, refJeu:Jeu) {
        super(refScene, unX, unY, redimensionMax, vitesse, sens, refAvatar, refJeu);
        this.detecterCollisionAvatar_lier = this.detecterCollisionAvatar.bind(this);
        this.addEventListener("tick", this.detecterCollisionAvatar_lier);
    }

    protected dessiner():void
    {
        window.lib.ClipObstacle.call(this);
        this.frameBounds = window.lib.ClipObstacle.prototype.frameBounds;
    }

    protected gererFinScene():void
    {
        this.refJeu.supprimerUnObstacle(this);
    }

    private detecterCollisionAvatar(evenement:createjs.Event):void
    {
        let toucheAlAvatar:boolean = this.refAvatar.enCollisionGrossiereAvec(this);
        if(toucheAlAvatar)
        {
            this.refAvatar.gererCollision();
            if(!this.estInvincible)
            {
                this.debuterPoison();
                this.estInvincible = true;
            }
        }
    }

    private debuterPoison():void
    {
        this.gotoAndPlay("poison");
        createjs.Sound.play('SonPoison');
        this.minuteriePoison = window.setTimeout(this.terminerPoison.bind(this), 400);
    }

    private terminerPoison():void
    {
        window.clearTimeout(this.minuteriePoison);
        this.minuteriePoison = null;
        this.refJeu.supprimerUnObstacle(this);
    }

    public supprimerObstacle():void{
        this.removeEventListener("tick", this.detecterCollisionAvatar_lier);
        this.supprimerMechant();
    }
}
