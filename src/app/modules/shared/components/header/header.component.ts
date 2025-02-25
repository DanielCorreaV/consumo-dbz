import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
  
})
export class HeaderComponent  implements OnInit {

  documentationURL= "https://web.dragonball-api.com/documentation";

  constructor() { }

  ngOnInit() {}

}
