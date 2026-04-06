import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {

  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  register() {
    console.log(this.user);
  }
}