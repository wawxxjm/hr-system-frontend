import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userIdentity = 'notLogin';

  uname = 'username';
  pwd = 'password';

  constructor() { }

  ngOnInit(): void {
  }

  checkLoginInfo(): void{
    if (this.uname === '1' && this.pwd === '1'){
      this.userIdentity = 'normal';
      console.log(this.userIdentity);
    }
    else if (this.uname === '2' && this.pwd === '2'){
      this.userIdentity = 'hr';
    }
    else {
      this.userIdentity = 'notLogin';
    }
  }

  logOut(): void{
    this.userIdentity = 'notLogin';
  }
}
