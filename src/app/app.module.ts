import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MyServiceService} from './my-service.service'
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


const routeApp :Routes = [
{path:'home',component:HomeComponent},
{path:'employee',component:EmployeeComponent},
{path:'',redirectTo:'/ home',pathMatch:'full'},
{path:'**',component:PageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeApp),
    HttpClientModule,
    HttpModule
    
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
