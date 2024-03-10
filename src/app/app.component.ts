import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './portfolio-website/about/about.component';
import { ContactComponent } from './portfolio-website/contact/contact.component';
import { FooterComponent } from './portfolio-website/footer/footer.component';
import { HomeComponent } from './portfolio-website/home/home.component';
import { NavbarComponent } from './portfolio-website/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AboutComponent,ContactComponent,FooterComponent,HomeComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-portfolio';
}
