import { Component, computed, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { ApiUserInfo } from '../../interfaces/api-user-info';
import { ToastrService } from 'ngx-toastr';
import { toastConfig } from '../../config/toastConfig';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';
@Component({
  selector: 'app-profile',
  imports: [DatePipe, RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  // userInfo = signal<ApiUserInfo | null>(null);
  constructor(
    private userService: UserService,
    private auth: AuthService,
    private toastr: ToastrService,
  ) {}

  userInfo = computed(() => {
    return this.auth.userInfo();
  });
  ngOnInit() {
    this.userService.profile().subscribe({
      next: (res) => {
        this.auth.userDataSetser(res.data);
        // console.log('userInfo', this.userInfo());
      },
      error: (err) => {
        this.toastr.error(
          'Please check your connection or try again later.',
          'Error',
          toastConfig.errorConfig,
        );
        console.log(err);
      },
    });
  }
}
