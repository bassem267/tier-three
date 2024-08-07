import { Component } from '@angular/core';
import { NavComponent } from "./nav/nav.component";
import { HeroComponent } from "./hero/hero.component";
import { AboutComponent } from "./about/about.component";
import { ActionsComponent } from "./actions/actions.component";
import { PricingComponent } from "./pricing/pricing.component";
import { EndingComponent } from "./ending/ending.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [NavComponent, HeroComponent, AboutComponent, ActionsComponent, PricingComponent, EndingComponent, FooterComponent],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

}
