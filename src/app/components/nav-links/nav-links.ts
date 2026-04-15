import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-links',
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive, RouterLinkActive],
  templateUrl: './nav-links.html',
  styleUrl: './nav-links.css',
})
export class NavLinks {
  homeIcon = faHouse;
  doctorIcon = faUserDoctor;
  aboutIcon = faAddressBook;
  contactIcon = faEnvelope;
}
