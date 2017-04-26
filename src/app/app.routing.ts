import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
// import { AuthGuard } from './core/guards/index';
//Layouts
// import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  {
    path: 'app',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: './main/main.module#MainModule'
      }
    ]
    // canActivate: [AuthGuard]
  },{
    path: '**',
    redirectTo: 'app'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
