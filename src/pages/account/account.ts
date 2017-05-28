import { Component } from '@angular/core';

//importing http support
//import { HTTP } from '@ionic-native/http';

//importing the account class from external decleration
import { Account } from './accountClass';
import { HTTP } from '@ionic-native/http';

//filling the account class with arbitriary data
const ACCOUNTS: Account[] = [
  { UserID: 11, Username:"Joe" , Email:"", Password:"Joe1985", TypeID: 1, Status: 0, SettingsID: 1},
  { UserID: 12, Username:"chris", Email:"", Password:"Chris123", TypeID: 1, Status: 0, SettingsID: 1 }
];

@Component({
  selector: 'page-account-ionic',
  templateUrl: 'account.html'
})

export class AccountPage {
  //declaring variables for the view
  accounts = ACCOUNTS;
  //http test variable
  posts: any;  

 //testing out http requests for future requests to php server 
 constructor(private http: HTTP){
    
    this.http.get('http://httpbin.org/ip', {}, {}).then(data=>{
    
    this.posts = data.data;
    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);
  });
    
  }  

}

