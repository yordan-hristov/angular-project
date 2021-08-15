import { Component} from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent{
  userInfo: {
    email: string,
    username: string,
    number: string
  }

  constructor(private userService: UserService) {
    this.userInfo= {
      email: this.userService.user!.email,
      username: this.userService.user!.username,
      number: this.userService.user!.number!
    };
   }

}
