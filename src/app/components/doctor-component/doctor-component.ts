import { Component, input } from '@angular/core';

@Component({
  selector: 'app-doctor-component',
  imports: [],
  templateUrl: './doctor-component.html',
  styleUrl: './doctor-component.css',
})
export class DoctorComponent {
  docId = input.required<string>();
}
