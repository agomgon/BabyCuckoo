import { Component, OnInit, Input } from '@angular/core';
import { HelpCard } from '../../model/helpcard';

@Component({
  selector: 'app-customcard',
  templateUrl: './customcard.component.html',
  styleUrls: ['./customcard.component.scss']
})
export class CustomcardComponent implements OnInit {
  private cardInfo : HelpCard;

  constructor() { 
  }

  ngOnInit() {
  }

  @Input()
  set innerCardInfo(input: HelpCard){
    this.cardInfo = input;
  }
}
