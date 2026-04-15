import { Component } from '@angular/core';
import { PhotoService } from '../../services/photo-service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contact: string;
  constructor(private photo: PhotoService) {
    this.contact = this.photo.static.contact;
  }
}
