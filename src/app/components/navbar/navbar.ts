import { Component } from '@angular/core';
import { PhotoService } from '../../services/photo-service';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  logo: string;
  bars = faBars;
  links: string[] = ['home', 'doctors', 'about', 'contact'];
  constructor(private photo: PhotoService) {
    this.logo = this.photo.static.logo;
  }
}
