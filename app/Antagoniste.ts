import {Jeu} from "./Jeu";
import {Avatar} from "./Avatar";
import {Mechant} from "./Mechant";
import {Projectile} from "./Projectile";

export class Antagoniste extends Mechant{
    //Attributs
    private detecterCollisionProjectile_lier:any = null;
    private detecterCollisionAvatar_lier:any = null;
    protected refTProjectiles:Array<Projectile> = null;
    private minuterieMort:number = null;

    //Constructeur
    public constructor(refScene:createjs.Stage, unX:number, unY:number, redimensionMax:number, vitesse:number, sens:number, refAvatar:Avatar, refJeu:Jeu, refTProjectiles:Array<Projectile>)
    {
        super(refScene, unX, unY, redimensionMax, vitesse, sens, refAvatar, refJeu);
        this.refTProjectiles = refTProjectiles;
        this.gotoAndPlay('marche');
        this.detecterCollisionProjectile_lier = this.detecterCollisionProjectile.bind(this);
        this.addEventListener("tick", this.detecterCollisionProjectile_lier);
        this.detecterCollisionAvatar_lier = this.detecterCollisionAvatar.bind(this);
        this.addEventListener("tick", this.detecterCollisionAvatar_lier);
    }

    protected dessiner():void{
        window.lib.ClipAntagoniste.call(this);
        this.frameBounds = window.lib.ClipAntagoniste.prototype.frameBounds;
    }

    private detecterCollisionProjectile():void{
        let monRect = this.getTransformedBounds();
        let enCollision:Boolean = false;
        for(let i = 0; i < this.refTProjectiles.length && !enCollision; i++)
        {
            if(monRect.intersects(this.refTProjectiles[i].getTransformedBounds()))
            {
                createjs.Sound.play('SonProjectileContact');
                this.refJeu.supprimerUnProjectile(this.refTProjectiles[i]);
                this.debuterMort();
                this.refAvatar.gagnerDesPoints();
                enCollision = true;
            }
        }
    }

    private detecterCollisionAvatar(evenement:createjs.Event):void
    {
        let toucheAlAvatar:boolean = this.refAvatar.enCollisionGrossiereAvec(this);
        if(toucheAlAvatar)
        {
            let indexPointTouche:number = this.refAvatar.enCollisionFineAvec(this);
            if(indexPointTouche != -1)
            {
                this.refAvatar.gererCollision();
            }
        }
    }

    private debuterMort():void
    {
        createjs.Sound.play('SonAntagonisteMort');
        this.gotoAndPlay("meurt");
        this.minuterieMort = window.setTimeout(this.terminerMort.bind(this), 500);
    }

    private terminerMort():void
    {
        window.clearTimeout(this.minuterieMort);
        this.minuterieMort = null;
        this.refJeu.supprimerUnAntagoniste(this);
    }

    protected gererFinScene():void
    {
        this.refJeu.supprimerUnAntagoniste(this);
    }

    public supprimerAntagoniste():void{
        this.removeEventListener("tick", this.detecterCollisionAvatar_lier);
        this.removeEventListener("tick", this.detecterCollisionProjectile_lier);
        this.supprimerMechant();
    }
}
