import {ObjetVisible} from "./ObjetVisible";

export class AfficheurPointage extends ObjetVisible {

    //Constructeur
    public constructor(refScene:createjs.Stage, unX:number, unY:number)
    {
        super(refScene, unX, unY);
    }

    protected dessiner():void
    {
        window.lib.ClipAfficheurPts.call(this);
        this.frameBounds = window.lib.ClipAfficheurPts.prototype.frameBounds;
    }

    public majAffichagePts(valeur:number):void
    {
        let pointage:string = valeur.toString();
        if(valeur < 1000)
        {
            pointage = "0"+pointage;
        }
        this['clipChiffre1'].gotoAndStop('chiffre' + pointage.substr(0,1));
        this['clipChiffre2'].gotoAndStop('chiffre' + pointage.substr(1,1));
        this['clipChiffre3'].gotoAndStop('chiffre' + pointage.substr(2,1));
        this['clipChiffre4'].gotoAndStop('chiffre' + pointage.substr(3,1));
    }

    public supprimerAfficheurPts():void
    {
        this.supprimerObjetVisible();
    }
}
