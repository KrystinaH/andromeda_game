import {ObjetMobile} from "./ObjetMobile";
import {Avatar} from "./Avatar";
import {Projectile} from "./Projectile";
import {Jeu} from "./Jeu";

export abstract class Mechant extends ObjetMobile{
    //Attributs
    protected refAvatar:Avatar = null;
    protected refJeu:Jeu = null;
    private redimensionMax:number = null;

    //Constructeur
    public constructor(refScene:createjs.Stage, unX:number, unY:number, redimensionMax:number, vitesse:number, sens:number, refAvatar:Avatar, refJeu:Jeu) {
        super(refScene, unX, unY, vitesse, sens);
        this.redimensionMax = redimensionMax;
        this.redimensionner();
        this.refAvatar = refAvatar;
        this.refJeu = refJeu;
    }

    public supprimerMechant():void
    {
        this.supprimerObjetMobile();
    }

    protected redimensionner():void{
        let facteurDeRedimensionnement = this.redimensionMax * (this.y/window.lib.properties.height);
        this.scaleX = facteurDeRedimensionnement;
        this.scaleY = facteurDeRedimensionnement;
    }
}
