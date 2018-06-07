import {ObjetVisible} from "./ObjetVisible";

export abstract class ObjetMobile extends ObjetVisible{

    //Attributs
    private vitesse:number = 100;
    private sens:number = 1;
    private avancer_lier:any = null;

    //Constructeur
    public constructor(refScene:createjs.Stage, unX:number, unY:number, vitesse:number, sens:number){
        super(refScene, unX, unY);
        this.vitesse = vitesse;
        this.sens = sens;
        this.avancer_lier = this.avancer.bind(this);
        this.addEventListener("tick", this.avancer_lier);
    }

    //Méthodes
    private avancer(evenement):void{
        this.x -= (evenement.delta/1000)*(this.vitesse * this.sens);
        let rectLimiteCourant:createjs.Rectangle = this.getTransformedBounds();
        if(rectLimiteCourant.x <= -100)
        {
            this.gererFinScene();
        }
    }

    protected abstract gererFinScene():void;

    public supprimerObjetMobile():void
    {
        this.removeEventListener("tick", this.avancer_lier);
        this.supprimerObjetVisible();
    }
}