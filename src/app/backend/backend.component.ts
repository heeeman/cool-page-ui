import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.scss']
})
export class BackendComponent implements OnInit {

  serverResponse: string = 'nothing received';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  callBackend(url: String):void {
    const header = new HttpHeaders({
      'responseType' : 'text',
      'Content-Type': 'text/plain',
  });

  const call = environment.data_server_url + '/' + url;
  console.log('url backend : ' + call);
    this.http.get(call, { headers: header }).subscribe(res => {
        this.serverResponse = 'test ' + res['text'];
        console.log(res);
    },
    err => {
    console.log(err);
    })
  }

}
