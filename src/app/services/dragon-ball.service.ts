import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})
export class DragonBallService {
  private Favorites="favorites";
  http= inject(HttpClient);

  getCharacters(params: any){
    return this.http.get(environment.baseUrl+environment.character,{params});
  }

  getCharacterByID(id: string){
    return this.http.get(environment.baseUrl+environment.character + id);
  }
  constructor() { }

  addToFavorites(item: any): void {
    const array = this.getFavorites(); 
    array.push(item); 
    localStorage.setItem(this.Favorites, JSON.stringify(array)); 
    //console.log("Item added to favorites");
  }

  removeFromFavorites(id: number): void {
    const array = this.getFavorites(); 
    const index = array.indexOf(id);
    if (index !== -1) {
      array.splice(index, 1); 
      localStorage.setItem(this.Favorites, JSON.stringify(array));
      //console.log("Item removed from favorites");
    }
  }

  getFavorites(): any[] {
    const data = localStorage.getItem(this.Favorites);
    //console.log("Favorites obtained")
    //console.log(data)
    return data ? JSON.parse(data) : []; 
  }

  isFavorite(id: number): boolean {
    const array = this.getFavorites();
    return array.includes(id);
  }

  admFavorites(id: number){
    const isfav= this.isFavorite(id);
    if(isfav){
      this.removeFromFavorites(id);
    }else{
      this.addToFavorites(id);
    }

  }

}
