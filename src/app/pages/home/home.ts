import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HomeHeader } from '../../components/home-header/home-header';
import { HomeSpeciality } from '../../components/home-speciality/home-speciality';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule, HomeHeader, HomeSpeciality],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  faCoffee = faCoffee;
  bars = faBars;
}
