import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { HttpModule }    from '@angular/http';

import {DataService} from './services/data.service';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { AdminComponent } from './users/admin/admin.component';

const appRoutes: Routes = [
  {path: '', component: FormComponent},
  {path: 'users', component: UsersComponent, children: [
    {path: 'admin', component: AdminComponent}
  ]},
  {path: 'servers', component: ServersComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UsersComponent,
    HomeComponent,
    ServersComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
