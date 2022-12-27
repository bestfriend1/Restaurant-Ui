import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  //FORM VARIABLESS
  formData!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.formInit();
  }


  // FORM CONTROLL ALL METHOD
  /***
   * formInit();
   * onSubmit();
   */

  formInit() {
    this.formData = this.fb.group({
      userName: [null, Validators.required],
      userEmail:  [null, [Validators.required, Validators.email]],
      phoneNumber: [null, Validators.required],
      userReq: [null, Validators.required]
    })
  };

  onSubmit() {
    if (this.formData.valid) {
      console.log(this.formData.value);
    } else {
      let formControl = this.formData.controls;
      let controls = Object.keys(formControl);
      controls.forEach((value) => {
        this.formData.controls[value].markAsTouched();
      });
    }
  };


  // async validation
  naEmail(control:FormControl):Promise <any> | Observable <any>{
    const res = new Promise <any>((resolve,reject) => {
      setTimeout(() => {
         if(control.value == 'autanber111@gmail.com'){
          resolve({'emailAsyncError':true})
         }else{
          resolve(null);
         }
      },2000);
    })
    return res;
  }





}
