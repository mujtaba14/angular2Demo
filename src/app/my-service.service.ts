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
  delete(i:number){
  //  let Edata=this.data.splice(i, 1);
  //  console.log("deleted value are========>",Edata);
   

  }

}
