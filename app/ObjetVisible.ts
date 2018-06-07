export abstract class ObjetVisible extends createjs.MovieClip{

    //Constructeur
    public constructor(refScene:createjs.Stage, unX:number, unY:number)
    {
        super();
        this.dessiner();
        this.gotoAndStop(0);
        refScene.addChild(this);
        this.x = unX;
        this.y = unY;
    }

    //Méthodes
    protected supprimerObjetVisible():void{
        this.parent.removeChild(this);
    }

    protected abstract dessiner():void;
}