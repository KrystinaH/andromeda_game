import {MorceauDecor} from "./MorceauDecor";
import {Jeu} from "./Jeu";

export class DecorDefilant{
    //Attributs
    private uneVitesse:number = null;
    private faireAvancer_lier:any = null;
    private tDecors:Array<MorceauDecor> = null;

    //Constructeur
    public constructor(refScene:createjs.Stage, unY:number, uneVitesse:number, niveauCourant:number)
    {
        this.faireAvancer_lier = this.faireAvancer.bind(this);
        this.uneVitesse = uneVitesse;
        this.tDecors = new Array();
        for(let i:number = 1; i <= 2; i++)
        {
            let unX = i * window.lib.properties.width;
            this.tDecors.push(new MorceauDecor(refScene, unX, unY, niveauCourant));
        }
        createjs.Ticker.addEventListener('tick', this.faireAvancer_lier);
    }

    //Méthodes
    private faireAvancer():void
    {
        for(let i:number = 0; i < this.tDecors.length; i++)
        {
            this.tDecors[i].deplacer(this.uneVitesse);
        }
    }

    public supprimerDecorDefilant():void
    {
        createjs.Ticker.removeEventListener('tick',this.faireAvancer_lier);
        while(this.tDecors.length != 0)
        {
            this.tDecors[0].supprimerMorceauDecor();
            this.tDecors[0] = null;
            this.tDecors.splice(0,1);
        }
    }
}

