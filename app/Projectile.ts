import {ObjetMobile} from "./ObjetMobile";
import {Jeu} from "./Jeu";

export class Projectile extends ObjetMobile{
    //Attributs
    private refJeu:Jeu = null;
    private gererFinScene_lier:any = null;

    //Constructeur
    public constructor(refScene:createjs.Stage, unX:number, unY:number, vitesse:number, sens:number, refJeu:Jeu)
    {
        super(refScene, unX, unY, vitesse, sens);
        this.refJeu = refJeu;
        this.gererFinScene_lier = this.gererFinScene.bind(this);
        this.addEventListener("tick", this.gererFinScene_lier);
        createjs.Sound.play('SonProjectileLance');
    }

    //Méthodes
    protected dessiner():void
    {
        window.lib.ClipProjectile.call(this);
        this.frameBounds = window.lib.ClipProjectile.prototype.frameBounds;
    }

    protected gererFinScene():void
    {
        let rectLimiteCourant:createjs.Rectangle = this.getTransformedBounds();
        if(rectLimiteCourant.x >= window.lib.properties.width)
        {
            this.refJeu.supprimerUnProjectile(this);
        }
    }

    public supprimerProjectile():void
    {
        this.removeEventListener("tick", this.gererFinScene_lier);
        this.supprimerObjetMobile();
    }
}
