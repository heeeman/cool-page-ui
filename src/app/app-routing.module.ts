import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendComponent } from './backend/backend.component'
import { AuthButtonComponent } from './auth-button/auth-button.component';

const routes: Routes = [
  {path: 'login', component: AuthButtonComponent},
  {path: 'backend', component: BackendComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
