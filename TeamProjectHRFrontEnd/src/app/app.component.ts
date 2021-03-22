import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeamProjectHRFrontEnd';

  isRegistering = false;
  token = 'Enter your token here';

  submitToken(): void{
    if(this.token==='111'){
      this.isRegistering = true;
    }
    else{
      alert('Token not exist');
    }
  }
}
