import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NgxLoaderService } from '../../services/common/ngx-loader.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  //FORM VARIABLESS
  formData!: FormGroup;
  users: any;
  usersId: any;


  constructor(
    private fb: FormBuilder,
    private ngxLoader: NgxLoaderService
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
      userEmail: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, Validators.required],
      userReq: [null, Validators.required]
    })
  };

  onSubmit() {
    if (this.formData.valid) {
      console.log(this.formData.value);
    } else {
      this.formData.markAllAsTouched();
    }
  };






}
