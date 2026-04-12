import { Component } from '@angular/core';
import { PhotoService } from '../../services/photo-service';

@Component({
  selector: 'app-home-speciality',
  imports: [],
  templateUrl: './home-speciality.html',
  styleUrl: './home-speciality.css',
})
export class HomeSpeciality {
  speciality: { [key: string]: string };
  specialityKeys: string[];
  constructor(private photo: PhotoService) {
    this.speciality = {
      Cardiology: this.photo.staticSpecialityIcon.heart,
      Orthopedics: this.photo.staticSpecialityIcon.bones,
      Ophthalmology: this.photo.staticSpecialityIcon.eye,
      Dentistry: this.photo.staticSpecialityIcon.dental,
      Neurology: this.photo.staticSpecialityIcon.brain,
      Pediatrics: this.photo.staticSpecialityIcon.children,
    };
    this.specialityKeys = Object.keys(this.speciality);
  }
}
