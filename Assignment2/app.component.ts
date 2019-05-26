import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  isUserName = false;

  setBtnVisibility()
  {
    if(typeof(this.userName) != 'undefined' && this.userName != null && this.userName.length > 0){
      console.log(this.isUserName);
      this.isUserName = true;
    }
    else{
      console.log(this.isUserName);
      this.isUserName = false;
    }
  }

  resetUserName(){
    this.userName = '';
    this.setBtnVisibility();
  }

}
