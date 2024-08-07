import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [NavComponent, HeroComponent, AboutComponent],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

}
