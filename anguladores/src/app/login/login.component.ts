import { Component, OnInit } from '@angular/core';

export class Credentials {

  public user = '';
  public password = '';

  public validateLogin(): boolean {
    return this.user !== '' && this.password !== '';
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public credentials: Credentials;

  constructor() { }

  ngOnInit() {
   this.credentials = new Credentials();
  }


  public login(): void {
    console.log('Usario: ', this.credentials.user);
    console.log('password: ', this.credentials.password);
  }

}


