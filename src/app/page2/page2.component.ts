import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from "../page1/nav/nav.component";

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
navbarOpen: any;

}

