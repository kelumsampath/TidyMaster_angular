import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  user:any;
  authtoken:any;

  constructor(
    private http:Http,
  ) { }
  registerUser(user){
    let headers = new Headers();
    headers.append('content-Type','application/json');
    return this.http.post("http://localhost:3000/user/register",user,{headers:headers}).map(res=>res.json());
  };

  loginUser(user){
    let headers = new Headers();
    headers.append('content-Type','application/json');
    return this.http.post("http://localhost:3000/user/login",user,{headers:headers}).map(res=>res.json());
  };

  storeData(token,userdata){
    localStorage.setItem("tokenid",token);
    localStorage.setItem("user",JSON.stringify(userdata));
    this.authtoken = token;
    this.user = userdata;
  };

getprofile(){
  this.fetchtoken();
  let headers = new Headers();
  headers.append('Authorization',this.authtoken);
  headers.append('content-Type','application/json');
  return this.http.get("http://localhost:3000/user/profile",{headers:headers}).map(res=>res.json());
  
};
fetchtoken(){
  const token = localStorage.getItem("tokenid");
  this.authtoken = token;
};

logOut(){

  this.fetchtoken();
  let headers = new Headers();
  headers.append('Authorization',this.authtoken);
  headers.append('content-Type','application/json');
  this.authtoken = null;
  this.user = null;
  localStorage.clear();
  return this.http.get("http://localhost:3000/user/logout",{headers:headers}).map(res=>res.json()); 
}

loggedIn(){
  return tokenNotExpired('tokenid');
  
}

postjob(job){
  this.fetchtoken();
  let headers = new Headers();
  headers.append('Authorization',this.authtoken);
  headers.append('content-Type','application/json');
  return this.http.post("http://localhost:3000/customer/jobpost",job,{headers:headers}).map(res=>res.json());
}

getalljobposts(){
  //this.fetchtoken();
  let headers = new Headers();
  //headers.append('Authorization',this.authtoken);
  headers.append('content-Type','application/json');
  return this.http.post("http://localhost:3000/cleaner/getalljobs",{headers:headers}).map(res=>res.json());
}

getjobpost(postid){
  //this.fetchtoken();
  let headers = new Headers();
  //headers.append('Authorization',this.authtoken);
  headers.append('content-Type','application/json');
  return this.http.post("http://localhost:3000/cleaner/viewjob",postid,{headers:headers}).map(res=>res.json());
}

adminalljobposts(){
  this.fetchtoken();
  let headers = new Headers();
  headers.append('Authorization',this.authtoken);
  headers.append('content-Type','application/json');
  return this.http.post("http://localhost:3000/admin/adminalljobs",{headers:headers}).map(res=>res.json());
}

acceptpost(review){
  this.fetchtoken();
  let headers = new Headers();
  headers.append('Authorization',this.authtoken);
  headers.append('content-Type','application/json');
  return this.http.post("http://localhost:3000/admin/acceptpost",review,{headers:headers}).map(res=>res.json());
}

rejectpost(review){
  this.fetchtoken();
  let headers = new Headers();
  headers.append('Authorization',this.authtoken);
  headers.append('content-Type','application/json');
  return this.http.post("http://localhost:3000/admin/rejectpost",review,{headers:headers}).map(res=>res.json());
}

pendingpost(review){
  this.fetchtoken();
  let headers = new Headers();
  headers.append('Authorization',this.authtoken);
  headers.append('content-Type','application/json');
  return this.http.post("http://localhost:3000/admin/pendingpost",review,{headers:headers}).map(res=>res.json());
}

isadmin(){
  var user={

  }
  this.fetchtoken();
  let headers = new Headers();
  headers.append('Authorization',this.authtoken);
  headers.append('content-Type','application/json');
  return this.http.post("http://localhost:3000/admin/isadmin",user,{headers:headers}).map(res=>res.json());
}

iscleaner(){
  var user={

  }
  this.fetchtoken();
  let headers = new Headers();
  headers.append('Authorization',this.authtoken);
  headers.append('content-Type','application/json');
  return this.http.post("http://localhost:3000/cleaner/iscleaner",user,{headers:headers}).map(res=>res.json());
}

}
