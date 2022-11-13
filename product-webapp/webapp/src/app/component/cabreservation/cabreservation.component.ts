import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserformComponent } from '../userform/userform.component';

@Component({
  selector: 'app-cabreservation',
  templateUrl: './cabreservation.component.html',
  styleUrls: ['./cabreservation.component.css']
})
export class CabreservationComponent implements OnInit {
  mindate:Date=new Date();
  constructor(public dailog: MatDialogRef<UserformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  userForm=new FormGroup({
    title:new FormControl(""),
    firstName:new FormControl(""),
    lastName:new FormControl(""),
    email:new FormControl(""),
    phoneNo:new FormControl(""),
    startDate:new FormControl('',[Validators.required,startdatevalidator]),
      endDate:new FormControl('',[Validators.required,startdatevalidator,enddatevalidator]),
      time:new FormControl("")
     
  })
  ngOnInit(): void {
    this.userForm.get("email")?.setValue(localStorage.getItem("email"));
  }

  pay()
  {
    //console.log(this.userForm.value)
    this.data.userEmailId=this.userForm.value.email;
    this.data.startDate=this.userForm.value.startDate;
    this.data.endDate=this.userForm.value.endDate;
    this.data.phoneNumber=this.userForm.value.phoneNo;
    this.data.title=this.userForm.value.title;
    this.data.firstName=this.userForm.value.firstName;
    this.data.lastName=this.userForm.value.lastName;


    console.log(this.data)
  }

}
export function startdatevalidator(control:AbstractControl)
{
  let today : Date = new Date();
  
  if(control.value && new Date(control.value) >= today)
  {
  
    return null;
  }
  else{
    return { myError1:false}
  }
}
export function enddatevalidator(control:AbstractControl)
{
 console.log(control.parent?.value.startDate);
  if(new Date(control.value) >= new Date(control.parent?.value.startDate))
  {
    return null;
  }
  else{
    return { myError2:false}
  }


}

  


