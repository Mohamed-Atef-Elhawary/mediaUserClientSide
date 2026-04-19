import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { AppointmentResponse } from '../../interfaces/appointment-response';

import { ToastrService } from 'ngx-toastr';
import { toastConfig } from '../../config/toastConfig';
import { DatePipe } from '@angular/common';
import { PhotoService } from '../../services/photo-service';

@Component({
  selector: 'app-my-appointment',
  imports: [DatePipe],
  templateUrl: './my-appointment.html',
  styleUrl: './my-appointment.css',
})
export class MyAppointment implements OnInit {
  myAppointments: WritableSignal<AppointmentResponse[]> = signal<AppointmentResponse[]>([]);
  emptyImage: string;
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private photo: PhotoService,
  ) {
    this.emptyImage = this.photo.static.empty;
  }
  ngOnInit(): void {
    this.userService.appointmentsList().subscribe({
      next: (res) => {
        if (res.data) {
          this.myAppointments.set(res.data);
        }
      },
      error: (err) => {
        this.toastr.error(err.message, 'Error', toastConfig.errorConfig);
        console.log(err);
      },
    });
  }
  getAppointmentDate(date: string): Date {
    return new Date(Number(date));
  }
}
