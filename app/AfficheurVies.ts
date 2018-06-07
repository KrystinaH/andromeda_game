import {ObjetVisible} from "./ObjetVisible";

export class AfficheurVies extends ObjetVisible {

    //Constructeur
    public constructor(refScene:createjs.Stage, unX:number, unY:number)
    {
        super(refScene, unX, unY);

    }

    protected dessiner():void
    {
        window.lib.ClipAfficheurVies.call(this);
        this.frameBounds = window.lib.ClipAfficheurVies.prototype.frameBounds;
    }

    public majAffichageVies(valeur:number):void
    {
        this['clipNbVies'].gotoAndStop("chiffre" + valeur)
    }

    public majAffichageEnergie(valeur:number):void
    {
        this.gotoAndStop(valeur + "unites");
    }

    public supprimerAfficheurVies():void
    {
        this.supprimerObjetVisible();
    }
}
