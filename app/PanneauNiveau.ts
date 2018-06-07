import {ObjetVisible} from "./ObjetVisible";
import {Jeu} from "./Jeu";

export class PanneauNiveau extends ObjetVisible{
    //Attributs
    private disparaitre_lier:any = null;
    private refJeu:Jeu = null;

    //Constructeur
    public constructor(refScene:createjs.Stage, unX:number, unY:number, refJeu:Jeu)
    {
        super(refScene, unX, unY);
        this.refJeu = refJeu;
        this.alpha = 1;
        this.disparaitre_lier = this.disparaitre.bind(this);
        this.addEventListener('tick', this.disparaitre_lier);
        this['txtObjectif'].text = "Objectif: " + this.refJeu.retournerObjectifCourant().toString();
        this['txtObjectif'].font = "36px Prompt";
    }

    protected dessiner():void
    {
        window.lib.ClipPanneauNiveau.call(this);
        this.frameBounds = window.lib.ClipPanneauNiveau.prototype.frameBounds;
    }

    public disparaitre():void
    {
        if(this.alpha > 0)
        {
            this.alpha -= 0.01;
        }
        else
        {
            this.refJeu.supprimerPanneauNiveau();
        }
    }

    public supprimerPanneauNiveau():void
    {
        this.removeEventListener('tick', this.disparaitre_lier);
        this.supprimerObjetVisible();
    }
}