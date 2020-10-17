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

  comments: string[] = [];
  commentInput: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(environment.data_server_url + '/comment').subscribe(res => {
      this.comments = res['comments'];
    });
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

  addComment(): void {
    if (this.commentInput) {      
      this.http.post(environment.data_server_url + '/comment', {comment: this.commentInput}).subscribe();
    }
    this.commentInput = '';

   }

}
