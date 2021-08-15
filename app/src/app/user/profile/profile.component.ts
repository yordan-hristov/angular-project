import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{
  get id(): string {
    return localStorage.getItem('id')!;
  }
  get isAdmin(): boolean {
    return localStorage.getItem('role') == 'admin';
  }

  user: IUser | undefined;

  constructor(private userService: UserService) {
    this.userService.getUser(this.id).subscribe({
      next: (user) => this.user = user
    })
   }

}
