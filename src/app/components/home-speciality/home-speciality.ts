import { Component } from '@angular/core';
import { PhotoService } from '../../services/photo-service';

@Component({
  selector: 'app-home-speciality',
  imports: [],
  templateUrl: './home-speciality.html',
  styleUrl: './home-speciality.css',
})
export class HomeSpeciality {
  staticSpecialityIcon: { [key: string]: string };
  constructor(private photo: PhotoService) {
    this.staticSpecialityIcon = this.photo.staticSpecialityIcon;
  }
}
