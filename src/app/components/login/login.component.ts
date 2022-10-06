import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/filters.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  showPassword: boolean | undefined;

  userCredentials: any = { username: '', password: '' };
  userFormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  constructor(private authService: AuthService) {}
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  ngOnInit(): void {
    this.userFormGroup.valueChanges.subscribe((value) => {
      this.userCredentials = { ...value };
    });
  }
  submitForm(): void {}

  onSubmit() {
    if (this.userFormGroup.valid) {
      this.authService.login(this.userFormGroup.value as User);
    }
  }
}
