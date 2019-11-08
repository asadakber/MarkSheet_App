import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MarksheetService } from '../../services/marksheet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isLoggedIn: boolean;
  loggedinUser: string

  constructor(private authservice: AuthService,private route: ActivatedRoute,private marksheetservice: MarksheetService) { }

  ngOnInit() {
    this.authservice.getAuth().subscribe(auth => {
      if(auth) {
        this.isLoggedIn = true;
        this.loggedinUser = auth.email
      } else {
        this.isLoggedIn = false
      }
    })
 
  }

  onSubmit() {
    this.authservice.signout()
  }

}
