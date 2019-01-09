import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CustomcardComponent } from './customcard/customcard.component';

@NgModule({
  declarations: [
    CustomcardComponent
  ],
  exports: [
    CustomcardComponent,
  ],
  imports: [
    IonicModule
  ]
})
export class ComponentsModule {}