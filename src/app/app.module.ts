import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { AdminComponent } from './users/admin/admin.component';

const appRoutes: Routes = [
  {path: '', component: TemplateDrivenComponent},
  {path: 'users', component: UsersComponent, children: [
    {path: 'admin', component: AdminComponent}
  ]},
  {path: 'servers', component: ServersComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    UsersComponent,
    HomeComponent,
    ServersComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
