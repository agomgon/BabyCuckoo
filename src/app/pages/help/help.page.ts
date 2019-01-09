import { Component } from '@angular/core';
import { HelpCard } from '../../model/helpcard';
import { CardDetailProvider } from '../../providers/CardDetailProvider';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-help',
  templateUrl: 'help.page.html',
  styleUrls: ['help.page.scss']
})
export class HelpPage {
  private translater: TranslateService;
  private cardArray: HelpCard[];

  constructor(translater: TranslateService){
    this.translater = translater;
  }

  ngOnInit(){
    CardDetailProvider.getCardArray(this.translater).subscribe(res => {
        this.cardArray = CardDetailProvider.map2HelpCardArray(res);
    });
  }
}
