import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss']
})
export class BackendComponent implements OnInit {

  serverResponse: any = 'nothing received';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  callBackend():void {
    const header = new HttpHeaders({
      'responseType' : 'text',
      'Content-Type': 'text/plain',
  });


    this.http.get('https://cool-page.herokuapp.com:443/',{ headers: header }).subscribe(res => {
      // this.http.get('http://localhost:5000',{ headers: header }).subscribe(res => {
        this.serverResponse = res;
        console.log(res);
    },
    err => {
    console.log(err);
    })
  }

}
