import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { DragonBallService } from 'src/app/services/dragon-ball.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: false
})
export class FavoritesPage implements OnInit {

  Characters: Character [] = [];

  constructor(private DBZsvc: DragonBallService) { console.log("hi")}

  ionViewWillEnter() {
    this.getFavorites(); 
  }

  ngOnInit() {
    
  }


  getFavorites(): void{
    let IDS= this.DBZsvc.getFavorites();
    this.Characters = [];

    IDS.forEach((id, index) => {
      this.DBZsvc.getCharacterByID(id).subscribe({
        next: (res: any)=>{
          this.Characters.push(res);
        }
      })
      
    });

  }
  

}
