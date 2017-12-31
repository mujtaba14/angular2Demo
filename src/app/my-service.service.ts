import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MyServiceService {

  constructor(private http:Http) { }

  _data:any[];
  response:any ={};
  error:string;
  // data:any = [
  //   {
  //     'name':'Mujtaba Bhat',
  //     'email':'mujidude@gmail.com',
  //     'password':'Mujatabbhat@123'
  //   },
  //   {
  //     'name':'Mujtaba Hussain Bhat',
  //     'email':'mujidude@gmail.com',
  //     'password':'Mujatabbhat@123'
  //   }
  // ]
  getEmpData(){
    //return this.data;
    return this.http
    .get('http://localhost:3000/getEmpData')
    .map(x => x.json())
  }
  addData(data:any){
    // this.data.push(
    // {
    //   name:data.name,
    //   email:data.email,
    //   password:data.password

    // })

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    this.http.post('http://localhost:3000/addEmpData', data, {headers}).subscribe(
      data =>{

      }
    );
  }
  removeData(i: number) {
    // this._data.splice(i, 1);
    //this.toastr.warning(`Record updated successfully `);
    if (window.confirm('Are you want to delete this item')) {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      this.http.post('http://localhost:3000/removeData', { i: i }, { headers }).subscribe(data => {
         console.log(data.json());
       // this.response = data.json();

      })
    }
  }

  updateEmp(_data:any,index:number){
    _data.index = index;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('http://localhost:3000/updateEmp',  _data , { headers }).subscribe(data => {
      console.log(data.json());
      if (data.json().code == "error") {
        this.error = "Name should be unique";
      }
    // this.response = data.json();

   })

  }

}
