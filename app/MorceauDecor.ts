import {ObjetVisible} from "./ObjetVisible";
import {Jeu} from "./Jeu";

export class MorceauDecor extends ObjetVisible{

    //Constructeur
    public constructor(refScene:createjs.Stage, unX:number, unY:number, niveauCourant:number)
    {
        super(refScene, unX, unY);
        this.gotoAndStop('decor' + niveauCourant);
    }

    //Méthodes
    public deplacer(vitesse:number):void
    {
        this.x -= vitesse;
        if(this.x < 0)
        {
            this.x += (2 * window.lib.properties.width);
        }
    }

    protected dessiner():void
    {
        window.lib.ClipDecorDefilant.call(this);
        this.frameBounds = window.lib.ClipDecorDefilant.prototype.frameBounds;
    }

    public supprimerMorceauDecor():void
    {
        //@TODO Est-ce la bonne méthode pour le supprimer?
        this.parent.removeChild(this);
    }
}
