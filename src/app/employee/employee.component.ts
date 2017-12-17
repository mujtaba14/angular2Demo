import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'
import {MyServiceService} from '../my-service.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  myForm: any;
  EmpArr:any[];
  //data:any;
 
  constructor(private fb: FormBuilder,private _myService:MyServiceService) {
    _myService.getEmpData().subscribe(result => this.EmpArr = JSON.parse(result.data)
    // this.myForm = this.fb.group({
    //   'name': ['', Validators.required],
    //   'email': ['', Validators.required],
    //   'password': ['', Validators.required]
    // });
     )}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
      password: ['', [Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]]
    });
    //this.EmpArr = this._myService.getEmpData();
    // console.log("enployee values========================>",this.EmpArr);

  }

  editEmp(data:any){
    if(data){
      this.myForm =this.fb.group({
        name: [data.name, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
        email: [data.email, [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]],
        password: [data.password, [Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')]]
      })
    }
  }

  register(data:any){
   this._myService.addData(this.myForm.value);
  //  console.log("values are=================>",this.myForm.value);
    }
    removeData(i:number){
      let test=this._myService.delete(i);
      console.log("the values are==================>",test);

    }
  

}
