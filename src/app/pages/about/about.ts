import { Component } from '@angular/core';
import { PhotoService } from '../../services/photo-service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  aboutImage: string;
  constructor(private photo: PhotoService) {
    this.aboutImage = this.photo.static.about;
  }
}
