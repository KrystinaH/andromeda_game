import {ObjetMobile} from "./ObjetMobile";

export abstract class ObjetDefilant extends ObjetMobile{

    //Constructeur
    public constructor(refScene:createjs.Stage, unX:number, unY:number, redimensionMax:number, sens:number, vitesse:number){
        super(refScene, unX, unY, redimensionMax, sens, vitesse);
    }

    //Méthodes
    protected replacer():void{
        this.x -= (window.lib.properties.width + this.getTransformedBounds().width);
    }
}
