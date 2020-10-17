import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackendComponent } from './backend/backend.component'
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { AuthGuard } from './auth-button/auth.guard'

const routes: Routes = [
  {path: 'login', component: AuthButtonComponent},
  {path: 'backend', component: BackendComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
