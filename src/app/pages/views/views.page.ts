import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interfaces/character';
import { DragonBallService } from 'src/app/services/dragon-ball.service';

@Component({
  selector: 'app-views',
  templateUrl: './views.page.html',
  styleUrls: ['./views.page.scss'],
  standalone: false,
})
export class ViewsPage implements OnInit {

  characterID: string = "";
  route =inject(ActivatedRoute);
  DBZsvc= inject(DragonBallService);
  isitFavorite: boolean = false;
  favoriteClass="";
  favoriteContent=""
  character: Character={
    id: 0,
    name: "",
    ki: "",
    maxKi: "",
    race: "",
    gender: "",
    description: "",
    image: "",
    affiliation: ""
  };

  constructor() {
    this.characterID= this.route.snapshot.paramMap.get("id") || "";
   }

  ngOnInit() {
    this.getCharacterByID(this.characterID);
  }

  getCharacterByID(id: string):any{
    this.DBZsvc.getCharacterByID(id).subscribe({
      next: (res: any)=>{
        this.character=res;
        this.isFavorite();
      }
      
      
    })
  }

  goBack(){
    window.history.back();
  }

  admFavorites(){
    this.DBZsvc.admFavorites(this.character.id);
    this.isFavorite();
  }

  isFavorite() {
    
    let isfav= this.DBZsvc.isFavorite(this.character.id);
    if(isfav){
      this.favoriteContent="⭐ Remover de Favoritos";
      this.favoriteClass='not-favorite-button';
      
    }else{
      this.favoriteContent="⭐ Añadir a Favoritos"
      this.favoriteClass='favorite-button';
      
    }


  }

}
