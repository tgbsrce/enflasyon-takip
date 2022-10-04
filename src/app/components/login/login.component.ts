import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  showPassword: boolean | undefined;
  userCredentials: any = { userName: '', password: '' };
  userFormGroup = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
  });
  constructor() {}
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(): void {
    this.userFormGroup.valueChanges.subscribe((value) => {
      this.userCredentials = { ...value };
    });
  }
  submitForm(): void {}
}
