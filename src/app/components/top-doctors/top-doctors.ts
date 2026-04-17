import { Component, signal, OnInit, computed } from '@angular/core';
import { DoctorData } from '../../interfaces/doctor-data';
import { DoctorService } from '../../services/doctor-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-doctors',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './top-doctors.html',
  styleUrl: './top-doctors.css',
})
export class TopDoctors implements OnInit {
  availableIcon = faCircleCheck;
  notAvailableIcon = faCircleXmark;
  constructor(private docotr: DoctorService) {}

  allDoctors = computed(() => {
    return this.docotr.allDoctors();
  });
  ngOnInit(): void {
    this.docotr.doctors().subscribe({
      next: (response) => {
        this.docotr.allDoctors.set(response.data);
      },
    });
  }
}
