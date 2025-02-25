import { Component, EventEmitter, Input, NgModule, OnInit, Output, inject, input } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { DragonBallService } from 'src/app/services/dragon-ball.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  standalone: false
})

export class CharacterCardComponent  implements OnInit {
  DBZsvc = inject(DragonBallService);
  favoriteContent: string="";
  favoriteClass: string="";

  constructor() { }

  ngOnInit() {
    this.isFavorite()
  }

  @Input() isfav: boolean = false;
  @Input() character: Character ={
    id: 0,
    name: 'jaja',
    image: '',
    ki: '',
    gender: '',
    race: '',
    maxKi: '',
    description: '',
    affiliation: ''
  }
  

  isFavorite() {
    
    let isfav= this.DBZsvc.isFavorite(this.character.id);
    if(isfav){
      this.favoriteContent="REMOVER";
      this.favoriteClass='remover';
      
    }else{
      this.favoriteContent="AÑADIR"
      this.favoriteClass='añadir';
      
    }


  }

}
