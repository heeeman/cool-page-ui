import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string = '';
  private id;
  private readonly TOKEN_STORAGE_ID = 'ieqwrpojsnkflnduskdasdfeadsfs'

  constructor() { 
      this.id = Math.random();

  }

  get token(): string {
      console.log('getter token' , this.id)
      if(this._token) {
        return this._token
      }
      return this.restoreToken();
  }
  set token(value: string) {
      console.log('setter token' , this.id)
      this.saveToken(value);
      this._token = value;
  }

  private saveToken(token: string): void {
    // todo Umbau auf Session Cookie, dabei aber CSRF beachten. Möglicherweise mit einem synchronizer token
    window.sessionStorage.setItem(this.TOKEN_STORAGE_ID, token);
  }

  private restoreToken(): string {
    this._token = window.sessionStorage.getItem(this.TOKEN_STORAGE_ID);
    return this._token;
  }
}
