import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }
  //my loacal json server
  apiurl='http://localhost:3000/user';

  //register the user
  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }
  //get the user by key
  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
  //get all users
  Getall(){
    return this.http.get(this.apiurl);
  }
  //update the user
  updateuser(id:any,inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }
  //get the user role
  getuserrole(){
    return this.http.get('http://localhost:3000/role');
  }
  //check for is logged in
  isloggedin(){
    return sessionStorage.getItem('username')!=null;
  }
  //get roles
  getrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  // get all customers
  GetAllCustomer(){
    return this.http.get('http://localhost:3000/customer');
  }
  //access by its role
  Getaccessbyrole(role:any,menu:any){
    return this.http.get('http://localhost:3000/roleaccess?role='+role+'&menu='+menu)
  }
}
