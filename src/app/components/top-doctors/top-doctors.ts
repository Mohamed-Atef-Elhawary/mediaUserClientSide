import { Component, signal, OnInit } from '@angular/core';
import { DoctorData } from '../../interfaces/doctor-data';
import { DoctorService } from '../../services/doctor-service';

@Component({
  selector: 'app-top-doctors',
  imports: [],
  templateUrl: './top-doctors.html',
  styleUrl: './top-doctors.css',
})
export class TopDoctors implements OnInit {
  allDoctors = signal<DoctorData[]>([]);
  constructor(private docotr: DoctorService) {}

  ngOnInit(): void {
    this.docotr.doctors().subscribe({
      next: (response) => {
        this.allDoctors.update((data) => response.data);
      },
    });
  }
}
