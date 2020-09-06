import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  callBackend():void {
    this.http.get('https://cool-page.herokuapp.com:443/',{ responseType: 'text' }).subscribe(res => {
        this.serverResponse = res;
        console.log(res);
    },
    err => {
    console.log(err);
    })
  }

}
