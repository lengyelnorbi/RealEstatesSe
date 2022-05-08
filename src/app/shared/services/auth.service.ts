import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user_id: string = "";

  setUserId(uid: string){
    this.user_id = uid;
  }

  getUserId(){
    return this.user_id;
  }

  constructor(private auth: AngularFireAuth) { }

  signup(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.auth.signOut();
  }

  isUserLoggedIn(){
    return this.auth.user;
  }
}
