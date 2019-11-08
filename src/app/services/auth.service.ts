import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth, private router: Router) { }

  userform: FormGroup = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    password: new FormControl('', Validators.compose([Validators.minLength(6), Validators.required]))
  })

  initializeFormGroup() {
    this.userform.setValue({
      email: '',
      password: ''
    })
  }

  getAuth() {
    return this.afauth.authState.pipe(auth => auth)
  }

  signup(user) {
    this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password)
    .then((success) => {
      this.router.navigate(['/login'])
    })
    .catch((error) => {
      alert(error)
    })
  }

  signin(user) {
    this.afauth.auth.signInWithEmailAndPassword(user.email, user.password)
    .then((success) => {
      this.router.navigate(['/dashboard'])
    })
    .catch((error) => {
      alert(error)
    })
  }

  signout() {
    this.afauth.auth.signOut()
    .then((success) => {
      this.router.navigate(['/login'])
    })
    .catch((error) => {
      alert(error)
    })
  }

}
