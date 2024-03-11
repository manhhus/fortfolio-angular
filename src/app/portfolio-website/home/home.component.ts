import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import { AboutComponent } from '../about/about.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,MatCardModule,AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
