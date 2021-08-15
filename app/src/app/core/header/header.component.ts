import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  get username(): string | null {
    if (!localStorage.getItem('username')) { return null; }

    return localStorage.getItem('username');
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    })
  }
}
