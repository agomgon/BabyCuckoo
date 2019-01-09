import { Component } from '@angular/core';
import { Platform, Config, ConfigToken } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { config } from 'rxjs';
import { CONFIG } from '../../providers/app-config';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(public platform: Platform,
    private translateService: TranslateService){
      this.platform.ready().then(() => {
        let aux = this.translateService.getBrowserLang();
       
        if(aux===undefined || aux!==CONFIG.LANGUAGE_SPANISH){
          this.translateService.setDefaultLang(CONFIG.LANGUAGE_DEFAULT);
          this.translateService.use(CONFIG.LANGUAGE_DEFAULT);
        }else{
          this.translateService.setDefaultLang(aux);
        }
      });
  }
}
