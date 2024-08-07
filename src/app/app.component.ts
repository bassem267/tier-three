import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";
import { Page3Component } from "./page3/page3.component";
import { Page4Component } from "./page4/page4.component";
import { Page5Component } from "./page5/page5.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Page1Component, Page2Component, Page3Component, Page5Component, Page4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tier-three';
}
