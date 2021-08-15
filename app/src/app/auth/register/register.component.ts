import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { matchingPasswords } from '../../shared/custom-validators/register';
import { setInputBorderColor } from '../../shared/utils/inputBorderColor';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  form: FormGroup;
  errorMessage: string | undefined;
  setInputBorderColor = setInputBorderColor

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      username: ['',[Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$')]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required, matchingPasswords()]]
    })
  }

  register(): void{
    if(this.form.invalid){ return; }

    const { username, email, number , password } = this.form.value;
    this.authService.register({ username, email , number, password }).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errorMessage = err.error.text;
        this.form.reset();
      }
    })
  }

}
