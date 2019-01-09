import { HelpCard } from "../model/helpcard";
import { CONFIG } from "./app-config";
import { TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";

export class CardDetailProvider {
    public static getCardArray(translater: TranslateService) : Observable<any>{
        let observable : Observable<any>;
        //when the developer seeks for the data provider, he/she will find the key here in
        //a one way look. So we put this string here.
        observable = translater.get(CONFIG.KEY_HELP_MESSAGES);
        return observable;
    }

    public static map2HelpCardArray(input:any){
        let result : HelpCard[];
        if(input !== undefined && input.length > 0){
            result = [];
            for(let index=0; index<input.length; index++){
                let auxHelpCard = new HelpCard();

                let aux = input[index].toString().split('#');
                auxHelpCard.cardTitle = (index+1).toString();
                auxHelpCard.cardImage = aux[1];
                auxHelpCard.cardText = aux[0];

                result.push(auxHelpCard);
            }
        }

        return result;
    }
}