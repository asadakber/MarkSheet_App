import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.authservice.initializeFormGroup()
    this.authservice.userform.reset()
  }

  onSubmit() {
    if(this.authservice.userform.valid) {
      this.authservice.signup(this.authservice.userform.value)
      this.authservice.initializeFormGroup()
      this.authservice.userform.reset()
    }
  }

}
