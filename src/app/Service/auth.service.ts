import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private andularFireAuth: AngularFireAuth) { }

  signUp= (email:string, password: string)=>{
    return this.andularFireAuth.createUserWithEmailAndPassword(email,password);
  }

  signIn = (email:string, password:string)=>{
    return this.andularFireAuth.signInWithEmailAndPassword(email,password);
  }

  getUser(){
    return this.andularFireAuth.authState;
  }

  signOut(){
    return this.andularFireAuth.signOut();
  }
}
