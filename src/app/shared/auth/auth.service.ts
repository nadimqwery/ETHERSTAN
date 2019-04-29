import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: User;
  constructor(public afAuth: AngularFireAuth, public router: Router) {

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
  }


  async  login(email: string, password: string) {

    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['home']);
    } catch (e) {
      return 'Invaid Email/Password';
    }
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }

  async register(email: string, password: string) {
    try {
      await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      this.router.navigate(['home']);
    } catch (e) {
      return e;
    }
  }

   sleep(milliseconds) {
    const start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
  resetPassword(email: string) {

    return this.afAuth.auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error));
  }




}



