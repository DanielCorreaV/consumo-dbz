import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/modules/shared/components/header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterModule } from '@angular/router';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { FooterComponent } from './components/footer/footer.component';


  
@NgModule({
  declarations: [HeaderComponent, CharacterCardComponent, FooterComponent],
  imports: [
    CommonModule, IonicModule, RouterLink, RouterModule
  ],
  exports: [HeaderComponent, RouterModule, CharacterCardComponent, FooterComponent]
})
export class SharedModule { }
