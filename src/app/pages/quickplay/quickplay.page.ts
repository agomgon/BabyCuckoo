import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CONFIG } from '../../providers/app-config';

@Component({
  selector: 'app-quickplay',
  templateUrl: 'quickplay.page.html',
  styleUrls: ['quickplay.page.scss']
})
export class QuickplayPage {
  constructor(private navCtrl: NavController,
    private translateService: TranslateService){
  }

  public onPlayClicked() : void{
    this.navCtrl.navigateForward("/player/" + CONFIG.TIME_DEFAULTPLAYING + "/" + CONFIG.TIME_DEFAULTRANDOM); //TODO: a variables globales
  }
}
