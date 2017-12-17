import { Injectable } from '@angular/core';

@Injectable()
export class MyServiceService {

  constructor() { }

  _data:any[];
  data:any = [
    {
      'name':'Mujtaba Bhat',
      'email':'mujidude@gmail.com',
      'password':'Mujatabbhat@123'
    },
    {
      'name':'Mujtaba Hussain Bhat',
      'email':'mujidude@gmail.com',
      'password':'Mujatabbhat@123'
    }
  ]
  getEmpData(){
    return this.data;
  }
  addData(data:any){
    this.data.push(
    {
      name:data.name,
      email:data.email,
      password:data.password

    })
  }
  delete(i:number){
   let Edata=this.data.splice(i, 1);
   console.log("deleted value are========>",Edata);
   

  }

}
