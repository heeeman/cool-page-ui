import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-auth-button',
  templateUrl: './auth-button.component.html',
  styleUrls: ['./auth-button.component.scss']
})
export class AuthButtonComponent implements OnInit {

  private gapiSetup;
  private authInstance;
  private user;
  private error;

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  // async ngOnInit() {
  //   if (await this.checkIfUserAuthenticated()) {
  //     this.user = this.authInstance.currentUser.get();
  //   }
  // }

  async initGoogleAuth(): Promise<void> {
    //  Create a new Promise where the resolve 
    // function is the callback passed to gapi.load
    const pload = new Promise((resolve) => {
      gapi.load('auth2', resolve);
    });

    // When the first promise resolves, it means we have gapi
    // loaded and that we can call gapi.init
    return pload.then(async () => {
      await gapi.auth2
        .init({ client_id: '895516263986-ul98qe2757g4p0tn41kh9ah57j2re8dg.apps.googleusercontent.com' })
        .then(auth => {
          this.gapiSetup = true;
          this.authInstance = auth;
        });
    });
  }

  async authenticate(): Promise<gapi.auth2.GoogleUser> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }

    // Resolve or reject signin Promise
    return new Promise(async () => {
      await this.authInstance.signIn().then(
        user => {this.user = user; 

            const authRes = user.getAuthResponse();
            const profile = user.getBasicProfile();

            console.log('logged in with : ', user);
            console.log('logged name : ', profile.Ad);
            console.log('logged mail : ', profile.$t);
            console.log('id token : ', authRes.id_token);

            // send id token to backend

            const header = new HttpHeaders({'Content-Type': 'text/plain'});

            console.log(' my server is : ' + environment.data_server_url);

            // this.http.post<any>('http://localhost:5000/login/token/', authRes.id_token, {headers: header}).subscribe(res => {
              this.http.post<any>(environment.data_server_url + '/login/token/', authRes.id_token, {headers: header}).subscribe(res => {

              console.log(res);
              this.authService.token = res.token;
          },
          err => {
          console.log(err);
          })




          },
        error => this.error = error);
    });
  }

  async checkIfUserAuthenticated(): Promise<boolean> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }

    return this.authInstance.isSignedIn.get();
  }

}
