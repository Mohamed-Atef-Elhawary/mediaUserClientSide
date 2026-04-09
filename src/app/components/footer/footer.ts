import { Component } from '@angular/core';
import { PhotoService } from '../../services/photo-service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  logo: string;
  constructor(private photo: PhotoService) {
    this.logo = this.photo.static.logo;
  }
}
