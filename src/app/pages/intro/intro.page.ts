import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: false
})
export class IntroPage implements OnInit {

  router = inject(Router)

  ionViewWillEnter() {
    setTimeout(()=>{
      this.router.navigateByUrl("home");
    },12500);
    
  }

  ngOnInit() {
  }

}
