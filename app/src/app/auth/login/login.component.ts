import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { setInputBorderColor } from '../../shared/utils/inputBorderColor'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent{
  form: FormGroup;
  errorMessage: string | null = null;
  

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  login(): void{
    if(this.form.invalid){ return; }

    const {email, password } = this.form.value;
    this.authService.login({email,password}).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        this.errorMessage = err.error.text;
        this.form.reset();
      }
    })
  }

  setInputBorderColor(name: string): object | null {
    return setInputBorderColor(this.form,name);
  }

}
