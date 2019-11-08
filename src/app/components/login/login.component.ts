import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
    this.authservice.initializeFormGroup()
    this.authservice.userform.reset()
  }

  onSubmit() {
    if(this.authservice.userform.valid) {
      this.authservice.signin(this.authservice.userform.value)
      this.authservice.initializeFormGroup()
      this.authservice.userform.reset()
    }
  }

}
