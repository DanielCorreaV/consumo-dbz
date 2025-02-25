import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewsPageRoutingModule } from './views-routing.module';

import { ViewsPage } from './views.page';
import { SharedModule } from 'src/app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewsPageRoutingModule,
    SharedModule
  ],
  declarations: [ViewsPage]
})
export class ViewsPageModule {}
