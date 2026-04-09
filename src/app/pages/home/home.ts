import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HomeHeader } from '../../components/home-header/home-header';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule, HomeHeader],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  faCoffee = faCoffee;
  bars = faBars;
}
