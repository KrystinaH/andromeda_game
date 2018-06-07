import {ObjetVisible} from "./ObjetVisible";

export class DecorFixe extends ObjetVisible{

    //Constructeur
    public constructor(refScene:createjs.Stage, unX:number, unY:number, niveauCourant:number){
        super(refScene, unX, unY);
        this.gotoAndStop('decorFixe' + niveauCourant);
    }

    //Méthodes
    protected dessiner():void{
        window.lib.ClipDecorFixe.call(this);
        this.frameBounds = window.lib.ClipDecorFixe.prototype.frameBounds;
    }

    public supprimerDecorFixe():void
    {
        this.supprimerObjetVisible();
    }
}
