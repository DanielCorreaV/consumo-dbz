import { Component, OnInit, inject } from '@angular/core';
import {Character} from 'src/app/interfaces/character';
import { DragonBallService } from 'src/app/services/dragon-ball.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {

  Characters: Character [] =[]; 
  params: any = {};
  character: any;
  disableScroll=false;
 

  constructor(private DBZsvc: DragonBallService) { console.log("hola")}

  ionViewWillEnter() {
    this.getCharacters(); 
  }

  ngOnInit() {
    this.params.page=0;
    
  }
    
  getCharacters(event?: any): void {
    this.params.page += 1;
  
    this.DBZsvc.getCharacters(this.params).subscribe({
      next: (res: any) => {
        //console.log(res);
        
        res.items.forEach((character: any) => {
          this.Characters.push(character);
        });
  
        if (event) event.target.complete();
      },
  
      error: (error: any) => {
        if (event) event.target.complete();
      }
    });
  }
  

  searchCharacters(){
    this.params.page =1;

    this.DBZsvc.getCharacters(this.params).subscribe({

      next: (res: any)=>{
        //console.log(res);
        this.Characters = res;
        this.disableScroll=true;
      },

      error: (error: any)=>{
        
      }
      
    })
  }

}
