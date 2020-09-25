import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

    this.http.get(environment.data_server_url + '/',{ headers: header }).subscribe(res => {
      // this.http.get('http://localhost:5000',{ headers: header }).subscribe(res => {
        this.serverResponse = res;
        console.log(res);
    },
    err => {
    console.log(err);
    })
  }

}
