import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { RouterLink } from '@angular/router';
import { PhotoService } from '../../services/photo-service';

@Component({
  selector: 'app-outer-page',
  imports: [RouterLink],
  templateUrl: './outer-page.html',
  styleUrl: './outer-page.css',
})
export class OuterPage {
  outerPhoto: string;
  constructor(
    private auth: AuthService,
    private photo: PhotoService,
  ) {
    this.outerPhoto = this.photo.static.outer;
    console.log('from outer ', this.auth.authView());
  }
}
