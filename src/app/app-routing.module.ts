import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TestSwitchComponent } from './test-switch/test-switch.component';
import { AppLoginComponent } from './app-login/app-login.component';



const routes: Routes = [
  { path: 'heroes', component: TestSwitchComponent },
  { path: 'login', component: AppLoginComponent },
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**',   redirectTo: '/heroes', pathMatch: 'full' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
