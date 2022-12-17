import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'https://restaurant-ui-49fb6-default-rtdb.firebaseio.com'
@Injectable({
  providedIn: 'root'
})
export class ApiHandleService implements OnInit {

  constructor(
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    
  }

  getAllProduct(){
     return this.http.get(`${baseUrl}/product.json`);
  }

}
