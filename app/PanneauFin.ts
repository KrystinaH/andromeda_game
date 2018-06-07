import {ObjetVisible} from "./ObjetVisible";
import {Jeu} from "./Jeu";

export class PanneauFin extends ObjetVisible{
    //Attributs
    private refJeu:Jeu = null;
    private faireDebuterJeu_lier:any = null;
    private afficherRl_lier:any = null;
    private afficherUp_lier:any = null;

    //Constructeur
    public constructor(refScene:createjs.Stage, unX:number, unY:number, scoreFinal:number, niveauGagne:boolean, refJeu:Jeu)
    {
        super(refScene, unX, unY);
        this.gotoAndStop(1);
        this.stage.enableMouseOver(24);
        this['txtScoreFinal'].text = "Score final: " + scoreFinal.toString();
        this['txtScoreFinal'].font = "36px Prompt";
        if(!niveauGagne)
        {
            this.gotoAndStop('echec');
        }
        this.refJeu = refJeu;
        this.faireDebuterJeu_lier = this.faireDebuterJeu.bind(this);
        this.afficherUp_lier = this.afficherUp.bind(this);
        this.afficherRl_lier = this.afficherUp.bind(this);
        this['btnRejouer'].gotoAndStop(1);
        this['btnRejouer'].addEventListener('click', this.faireDebuterJeu_lier);
        this['btnRejouer'].addEventListener('mouseover', this.afficherRl_lier);
        this['btnRejouer'].addEventListener('mouseout', this.afficherUp_lier);
    }

    protected dessiner():void
    {
        window.lib.ClipPanneauFin.call(this);
        this.frameBounds = window.lib.ClipPanneauFin.prototype.frameBounds;
    }

    private afficherRl(evenement):void
    {
        evenement.currentTarget.gotoAndStop('rl');
    }

    private afficherUp(evenement):void
    {
        evenement.currentTarget.gotoAndStop('up');
    }

    private faireDebuterJeu():void
    {
        this.refJeu.debuterJeu();
    }

    public supprimerPanneauFin():void
    {
        this.stage.enableMouseOver(0);
        this['btnRejouer'].removeEventListener('click', this.faireDebuterJeu_lier);
        this['btnRejouer'].removeEventListener('mouseover', this.afficherRl_lier);
        this['btnRejouer'].removeEventListener('mouseout', this.afficherUp_lier);
        this.supprimerObjetVisible();
    }
}