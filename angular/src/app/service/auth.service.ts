import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  user:any;
  authtoken:any;
  adminorsuperadmin:boolean=false;
  advertiserLogin:boolean=false;
  cleaner:boolean=false;


  //url:String="http://localhost:3000";
   url:String="http://tidymaster.projects.uom.lk:3000";



  constructor(
    private http: Http,
  ) { }
  registerUser(user) {
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/user/register", user, { headers: headers }).map(res => res.json());
  };

  loginUser(user) {
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/user/login", user, { headers: headers }).map(res => res.json());
  };

  storeData(token, userdata) {
    localStorage.setItem("tokenid", token);
    localStorage.setItem("user", JSON.stringify(userdata));
    this.authtoken = token;
    this.user = userdata;
  };

  getprofile() {
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.get(this.url + "/user/profile", { headers: headers }).map(res => res.json());

  };
  
  fetchtoken() {
    const token = localStorage.getItem("tokenid");
    this.authtoken = token;
  };

  logOut() {

    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    this.authtoken = null;
    this.user = null;
    localStorage.clear();
    return this.http.get(this.url + "/user/logout", { headers: headers }).map(res => res.json());
  }

  loggedIn() {
    return tokenNotExpired('tokenid');

  }

  postjob(job) {
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/customer/jobpost", job, { headers: headers }).map(res => res.json());
  }

  getalljobposts() {
    //this.fetchtoken();
    let headers = new Headers();
    //headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/cleaner/getalljobs", { headers: headers }).map(res => res.json());
  }

  getjobpost(postid) {
    //this.fetchtoken();
    let headers = new Headers();
    //headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/cleaner/viewjob", postid, { headers: headers }).map(res => res.json());
  }

  adminalljobposts() {
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/admin/adminalljobs", { headers: headers }).map(res => res.json());
  }

  acceptpost(review) {
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', 'jobpostreview');
    return this.http.post(this.url + "/admin/acceptpost", review, { headers: headers }).map(res => res.json());
  }

  rejectpost(review) {
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', 'jobpostreview');
    return this.http.post(this.url + "/admin/rejectpost", review, { headers: headers }).map(res => res.json());
  }

  pendingpost(review) {
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', 'jobpostreview');
    return this.http.post(this.url + "/admin/pendingpost", review, { headers: headers }).map(res => res.json());
  }

  isadmin() {
    var user = {

    }
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/admin/isadmin", user, { headers: headers }).map(res => res.json());
  }


  iscleaner() {
    var user = {
    }
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/cleaner/iscleaner", user, { headers: headers }).map(res => res.json());
  }


  issuperadmin() {
    var user = {
    }
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/admin/issuperadmin", user, { headers: headers }).map(res => res.json());
  }

  registerAdvertiser(user) {
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', 'registeradvertiser');
    return this.http.post(this.url + "/admin/specialuser", user, { headers: headers }).map(res => res.json());
  };

  registerAdmin(user) {
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', 'registeramin');
    return this.http.post(this.url + "/admin/specialuser", user, { headers: headers }).map(res => res.json());
  };

  registerSuperAdmin(user) {
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', 'registersuperadmin');
    return this.http.post(this.url + "/admin/specialuser", user, { headers: headers }).map(res => res.json());
  };

  loadprofpic() {
    var user = {

    }
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    headers.append('Authorization', this.authtoken);
    return this.http.post(this.url + "/admin/profpic", user, { headers: headers }).map(res => res.json());
  }

  searchUser(username) {
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', 'searchuser');
    return this.http.post(this.url + "/admin/searchusers", username, { headers: headers }).map(res => res.json());
  }

  searchAllUser() {
    const username = {};
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', 'searchuser');
    return this.http.post(this.url + "/admin/searchusersmob", username, { headers: headers }).map(res => res.json());
  }


  removeuser(user) {
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', 'complainview');
    return this.http.post(this.url + "/admin/removeuser", user, { headers: headers }).map(res => res.json());
  }

  warnuser(user) {
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', 'complainview');
    return this.http.post(this.url + "/admin/warnuser", user, { headers: headers }).map(res => res.json());
  }

  uncheckedcomplains() {
    var user = {}
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', 'complainview');
    return this.http.post(this.url + "/admin/viewuncheckedcomplains", user, { headers: headers }).map(res => res.json());
  }

  checkedcomplains() {
    var user = {}
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', 'complainview');
    return this.http.post(this.url + "/admin/viewcheckedcomplains", user, { headers: headers }).map(res => res.json());
  }

  complaineduserremove(user) {
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', 'complainview');
    return this.http.post(this.url + "/admin/complaineduserremove", user, { headers: headers }).map(res => res.json());
  }

  complaineduserwarn(user) {
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', 'complainview');
    return this.http.post(this.url + "/admin/complaineduserwarn", user, { headers: headers }).map(res => res.json());
  }

  addadvertiesment(addvertiesment) {
    this.fetchtoken();
    const formData: FormData = new FormData();
    formData.append('addvertiesment', addvertiesment.fileToUpload, addvertiesment.fileToUpload.name);
    formData.append('title', addvertiesment.title);
    formData.append('Authorization', this.authtoken);
    formData.append('advertiser', addvertiesment.addprovider);
    formData.append('startdate', addvertiesment.startdate);
    formData.append('enddate', addvertiesment.enddate);
    return this.http.post(this.url + "/admin/postadd", formData).map(res => res.json());
  }


  alladproviders() {
    this.fetchtoken();
    let headers = new Headers();
    var user = {}
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', '');
    return this.http.post(this.url + "/admin/getalladproviders", user, { headers: headers }).map(res => res.json());
  }

  getadvetisments() {
    var user = {}
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', '');
    return this.http.post(this.url + "/admin/getadvetisments", user, { headers: headers }).map(res => res.json());
  }

  deletead(adid, imgid) {
    this.fetchtoken();
    let headers = new Headers();
    var ads = {
      adid: adid,
      imageId: imgid
    }
    //alert(ads.imageId)
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', '');
    return this.http.post(this.url + "/admin/deletead", ads, { headers: headers }).map(res => res.json());
  }

  getuserprofile(username) {
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/admin/userprofile", username, { headers: headers }).map(res => res.json());
  };

  getAllAdsByMonth(){
  // alert("user.username");
    var user={};
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('content-Type','application/json');
    headers.append('accessresource', '');
    return this.http.post(this.url + "/advertiser/getAllAdsByMonth",user, { headers: headers }).map(res=>res.json());
  }

  iscustomer() {
    var user = {
    }
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/customer/iscustomer", user, { headers: headers }).map(res => res.json());
  }

  getappliedjobs() {
    var user = {
    }
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/cleaner/getappliedjobs",user, { headers: headers }).map(res => res.json());
  }

  getdonejobs() {
    var user = {
    }
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/cleaner/getdonejobs",user, { headers: headers }).map(res => res.json());
  }
  editimage(image){
    this.fetchtoken();
   // console.log(this.authtoken)
    const formData: FormData = new FormData();
    formData.append('Authorization',this.authtoken);
    formData.append('editprofpic', image.editimage,image.editimage.name);
    return this.http.post(this.url +"/user/profpicchange", formData).map(res=>res.json()); 
  };
  
  getAllAds(){
    var user={};
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('content-Type','application/json');
    headers.append('accessresource', '');
    return this.http.post(this.url + "/advertiser/getAllAds",user, { headers: headers }).map(res=>res.json());
  }

  editpassword(passworddata){
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', '');
    return this.http.post(this.url + "/user/editpassword", passworddata, { headers: headers }).map(res => res.json());
  }
  getnonpaidjobs() {
    //this.fetchtoken();
    let headers = new Headers();
    //headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/cleaner/getallnonpaidjobs", { headers: headers }).map(res => res.json());
  }
  getpaidjobs() {
    //this.fetchtoken();
    let headers = new Headers();
    //headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/cleaner/getallpaidjobs", { headers: headers }).map(res => res.json());
  }
  viewcompletedjob(){
    var user = {
    }
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/customer/viewcompletedjob",user, { headers: headers }).map(res => res.json());
  }
  isadvertiser() {
    var user = {
    }
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/advertiser/isadvertiser", user, { headers: headers }).map(res => res.json());
  }

  getDailyViews(id){
    // alert(id.id);
     var user={};
     this.fetchtoken();
     let headers = new Headers();
     headers.append('Authorization',this.authtoken);
     headers.append('content-Type','application/json');
     headers.append('accessresource', '');
     return this.http.post(this.url + "/advertiser/getDailyViews",id, { headers: headers }).map(res=>res.json());
   }

  

  viewcomplain(complain){
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', '');
    return this.http.post(this.url + "/admin/viewcomplain", complain, { headers: headers }).map(res => res.json());
  }

  viewcomplainaction(complain){
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', '');
    return this.http.post(this.url + "/admin/viewcomplainaction", complain, { headers: headers }).map(res => res.json());
  }

  viewadvertiesment(addvertiesment){
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', '');
    return this.http.post(this.url + "/admin/viewsingleadvertiesment", addvertiesment, { headers: headers }).map(res => res.json());
  }

  viewadmin(advertiesment){
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    headers.append('accessresource', '');
    return this.http.post(this.url + "/admin/viewadmin", advertiesment, { headers: headers }).map(res => res.json());
  }

  viewactivejob(){
    var user = {
    }
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/customer/viewactivejob",user, { headers: headers }).map(res => res.json());
  }


  viewcuspromotedjob(){
    var user = {
    }
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/customer/viewcuspromotedjob",user, { headers: headers }).map(res => res.json());
  }
    
    editprofile(userdata){
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/user/editprofile",userdata, { headers: headers }).map(res => res.json());
    }

  viewappliedcleaners(post){
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/customer/getappliedcleaners",post, { headers: headers }).map(res => res.json());
  }
  applyjob(postid){
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/cleaner/applyjob",postid, { headers: headers }).map(res => res.json());
  }
  runningjobs(){
    var user = {
    }
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/cleaner/cleanerrunningjobs", user, { headers: headers }).map(res => res.json());
  }


  getcatogory(){
    var user = {
    }
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/customer/viewcategory",user, { headers: headers }).map(res => res.json());  
  }
  
  fogetpass(user){
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/user/fogetpassword",user, { headers: headers }).map(res => res.json());
  }

  promotejob(post){
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/admin/promotejob",post, { headers: headers }).map(res => res.json());
  }

  getads(){
    var user = {
    }
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/user/displayadvertiesment",user, { headers: headers }).map(res => res.json());
  }

  viewcustomerprofile(customerid) {
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization', this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/customer/customerprofile", customerid, { headers: headers }).map(res => res.json());
  };
  countAdViews(adId){
    this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/advertiser/countViews",adId, { headers: headers }).map(res => res.json());
  }


 customerrunningjobs(){
    var user = {
    }
     this.fetchtoken();
    let headers = new Headers();
    headers.append('Authorization',this.authtoken);
    headers.append('content-Type', 'application/json');
    return this.http.post(this.url + "/customer/customerrunningjobs",user, { headers: headers }).map(res => res.json());
 }
 confirmcleaner(data){
  this.fetchtoken();
  let headers = new Headers();
  headers.append('Authorization',this.authtoken);
  headers.append('content-Type', 'application/json');
  return this.http.post(this.url + "/customer/selectcleanerforjob",data, { headers: headers }).map(res => res.json());
 }

}
   
   
   



