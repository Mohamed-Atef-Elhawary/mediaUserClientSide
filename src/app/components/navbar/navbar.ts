import { Component, computed } from '@angular/core';
import { PhotoService } from '../../services/photo-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth-service';
import { AuthView } from '../../types/authType';
import { OuterPage } from '../../pages/outer-page/outer-page';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  logo: string;
  logo1: string;
  bars = faBars;
  links: string[] = ['home', 'doctors', 'about', 'contact'];
  constructor(
    private photo: PhotoService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.logo = this.photo.static.logo;
    this.logo1 = this.photo.static.logo1;
  }
  show() {
    console.log('from navbar', this.authView());
  }

  authView = computed(() => {
    return this.authService.authView();
  });

  update(state: AuthView) {
    this.authService.authView.set(state);
    this.router.navigate(['register', state]);
    this.show();
  }
}
