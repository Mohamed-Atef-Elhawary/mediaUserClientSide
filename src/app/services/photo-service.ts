import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  static = {
    logo: 'logo.png',
    headerPhoto: 'homeHeader.png',
    headerDisc: 'headerDisc.png',
  };
  staticSpecialityIcon = {
    heart: 'heartHealth.png',
    bones: 'bones.png',
    eye: 'eyecare.png',
    dental: 'DentalCare.png',
    brain: 'brain.png',
    children: 'ch.png',
    general: 'Generalphysician.svg',
    gastroenterlogist: 'nn.png',
  };
}
