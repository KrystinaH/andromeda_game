import {ObjetVisible} from "./ObjetVisible";
import {Jeu} from "./Jeu";

export class PanneauIntro extends ObjetVisible {
    //Attributs
    private refJeu:Jeu = null;
    private gererBoutonsSuivPrec_lier:any = null;
    private faireDebuterJeu_lier:any = null;
    private afficheRl_lier:any = null;
    private afficherUp_lier:any = null;

    //Constructeur
    public constructor(refScene:createjs.Stage, unX:number, unY:number, refJeu:Jeu)
    {
        super(refScene, unX, unY);
        this.stage.enableMouseOver(24);
        this.refJeu = refJeu;
        this['txtHistoire'].font = "18px Prompt";
        this['txtMouvements'].font = "16px Prompt";
        this['txtAntagonistes'].font = "16px Prompt";
        this['txtObstacles'].font = "16px Prompt";
        this.gererBoutonsSuivPrec_lier = this.gererBoutonsSuivPrec.bind(this);
        this.faireDebuterJeu_lier = this.faireDebuterJeu.bind(this);
        this.afficheRl_lier = this.afficherRl.bind(this);
        this.afficherUp_lier = this.afficherUp.bind(this);
        this['btnSuivant'].addEventListener('click', this.gererBoutonsSuivPrec_lier);
        this['btnSuivant'].addEventListener('mouseover', this.afficheRl_lier);
        this['btnSuivant'].addEventListener('mouseout', this.afficherUp_lier);
        this['btnPrecedent'].addEventListener('click', this.gererBoutonsSuivPrec_lier);
        this['btnPrecedent'].addEventListener('mouseover', this.afficheRl_lier);
        this['btnPrecedent'].addEventListener('mouseout', this.afficherUp_lier);
        this['btnJouer'].addEventListener('click', this.faireDebuterJeu_lier);
        this['btnJouer'].addEventListener('mouseover', this.afficheRl_lier);
        this['btnJouer'].addEventListener('mouseout', this.afficherUp_lier);
    }

    protected dessiner():void
    {
        window.lib.ClipPanneauIntro.call(this);
        this.frameBounds = window.lib.ClipPanneauIntro.prototype.frameBounds;
    }

    private gererBoutonsSuivPrec():void
    {
        if (this.currentLabel == 'histoire') {
            this.gotoAndStop('instructions');
        }
        else
        {
            this.gotoAndStop('histoire');
        }
    }

    private faireDebuterJeu():void
    {
        this.refJeu.debuterJeu();
    }

    private afficherRl(evenement):void
    {
        evenement.currentTarget.gotoAndStop('rl');
    }

    private afficherUp(evenement):void
    {
        evenement.currentTarget.gotoAndStop('up');
    }

    public supprimerPanneauIntro():void
    {
        this.stage.enableMouseOver(0);
        this['btnSuivant'].removeEventListener('click', this.gererBoutonsSuivPrec_lier);
        this['btnSuivant'].removeEventListener('mouseover', this.afficheRl_lier);
        this['btnSuivant'].removeEventListener('mouseout', this.afficherUp_lier);
        this['btnPrecedent'].removeEventListener('click', this.gererBoutonsSuivPrec_lier);
        this['btnPrecedent'].removeEventListener('mouseover', this.afficheRl_lier);
        this['btnPrecedent'].removeEventListener('mouseout', this.afficherUp_lier);
        this['btnJouer'].removeEventListener('click', this.faireDebuterJeu_lier);
        this['btnJouer'].removeEventListener('mouseover', this.afficheRl_lier);
        this['btnJouer'].removeEventListener('mouseout', this.afficherUp_lier);
        this.supprimerObjetVisible();
    }
}
