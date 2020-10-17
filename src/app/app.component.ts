import { Component } from '@angular/core';
import { AuthService } from './auth-button/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cool-page-ui';

  constructor(public authService: AuthService){}
}
