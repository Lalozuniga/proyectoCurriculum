import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  async signInAuth(p: string, u: string, m: string) {

    try {
      const res = await firebase.auth().createUserWithEmailAndPassword(m, p);
      if (res.user) {
        await res.user.updateProfile({
          displayName:u
        });
        await res.user.sendEmailVerification;
      }
    } catch (e) {
      console.log('error inesperado');
    }
  }
  mailVer(m:string) {

  }
  passCheck(p1:string, p2:string) {

  }

  constructor() { }
}

