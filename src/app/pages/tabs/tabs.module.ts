import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { QuickplayPageModule } from '../quickplay/quickplay.module';
import { ProgrammedplayPageModule } from '../programmedplay/programmedplay.module';
import { HelpPageModule } from '../help/help.module';
import { AboutPageModule } from '../about/about.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    QuickplayPageModule,
    ProgrammedplayPageModule,
    AboutPageModule,
    HelpPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
