import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CONFIG } from '../../providers/app-config';

@Component({
  selector: 'app-programmedplay',
  templateUrl: './programmedplay.page.html',
  styleUrls: ['./programmedplay.page.scss'],
})
export class ProgrammedplayPage implements OnInit {
  private playDuration: number = 1;
  private MIN_DURATION: number = CONFIG.TIME_MINDURATION;
  private MAX_DURATION: number = CONFIG.TIME_MAXDURATION;

  constructor(public navCtrl: NavController) { 
  }

  ngOnInit() {
  }

  public onPlayClicked() : void{
    this.navCtrl.navigateForward(CONFIG.ROUTER_PLAYER + (this.playDuration*60) + "/" + CONFIG.TIME_DEFAULTRANDOM);
  }
}
