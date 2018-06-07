import {ObjetDefilant} from "./ObjetDefilant";

export class DecorArrierePlan extends ObjetDefilant{
    //Attributs

    //Constructeur
    public constructor(refScene:createjs.Stage, unX:number, unY:number){
        super(refScene, unX, unY);
    }

    //Méthodes
    protected dessiner():void{
        window.lib.ClipDecorArrierePlan.call(this);
        this.frameBounds = window.lib.ClipDecorArrierePlan.prototype.frameBounds;
    }

    protected gererFinScene():void{

    }
}
