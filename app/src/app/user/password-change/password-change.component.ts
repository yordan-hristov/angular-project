import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { matchingPasswords } from 'src/app/shared/custom-validators/register';
import { setInputBorderColor } from '../../shared/utils/inputBorderColor'
import { UserService } from '../user.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit{
  form: FormGroup;
  message: string | null = null;
  errorMessage: string | null = null;
  setInputBorderColor = setInputBorderColor;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.form = this.fb.group({
      oldPassword: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required, matchingPasswords()]],
    });
  }

  ngOnInit(): void{
    this.form.get('password')!.valueChanges.subscribe((res) => {
      this.form.get('rePassword')?.updateValueAndValidity();
    })
  }

  onSubmit() {
    if(this.form.invalid){ return; }

    this.errorMessage = null;
    this.message = null;

    const { oldPassword, password} = this.form.value;
    const userId = localStorage.getItem('id')!;

    this.userService.changePassword(userId, { oldPassword, password }).subscribe({
      next: () => {
        this.userService.getUser(userId).subscribe();
        this.message = 'Password successfully changed'
      },
      error: (err) => this.errorMessage = err.error.text
    })

    this.form.reset();
  }
}
