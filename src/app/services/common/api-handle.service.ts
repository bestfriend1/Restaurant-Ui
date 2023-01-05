import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'https://restaurant-ui-49fb6-default-rtdb.firebaseio.com'
@Injectable({
  providedIn: 'root'
})
export class ApiHandleService implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {

  }

  getAllProduct() {
    return this.http.get(`${baseUrl}/product/data.json`);
  }
  //USER HTTP REQUEST
  addUser(userData: any) {
    return this.http.post(`${baseUrl}/users.json`, userData);
  }

  getAllUser() {
    return this.http.get<any>(`${baseUrl}/users.json`);
  }
  deleteUser(userId: any) {
    return this.http.delete(`${baseUrl}/users/${userId}.json`);
  }
  updateUser(userId: any, updateData: any) {
    return this.http.put(`${baseUrl}/users/${userId}.json`, updateData);
  }


}
