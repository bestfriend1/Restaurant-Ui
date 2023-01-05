import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiHandleService } from '../../services/common/api-handle.service';
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
    private apiHandle: ApiHandleService,
    private ngxLoader: NgxLoaderService
  ) {

  }

  ngOnInit(): void {
    this.formInit();
    this.getAllUser();
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
      this.ngxLoader.onShowLoader();
      this.apiHandle.addUser(this.formData.value).subscribe((res) => {
        if (res) {
          this.ngxLoader.onHideLoader();
          this.formInit();
          this.getAllUser()
        }
      },
        (err) => {
          if (err) {
            console.log(err);
            this.ngxLoader.onHideLoader();
          }
        }
      )
    } else {
      this.formData.markAllAsTouched();
    }
  };


  //HTTP REQUEST HANDLE
  getAllUser() {
    this.ngxLoader.onShowLoader();
    this.apiHandle.getAllUser().subscribe((res) => {
      if (res) {
        this.users = Object.values(res);
        this.usersId = Object.keys(res);
        // console.log(this.users);
        this.ngxLoader.onHideLoader();
      }else{
        this.ngxLoader.onHideLoader();
      }
    },
      (err) => {
        if (err) {
          // console.log(err);
          this.ngxLoader.onHideLoader();
        }
      }
    )
  }




}
