import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  isUserName = false;
  toggleBtnText = 'Show';
  toggle = 'block';
  clickLog = [];
  clickCount = 0;

  setBackColor(logRecord){
    if(this.clickLog.indexOf(logRecord) > 4){
      return 'blue';
    }
  }

  togglePanel(){
    this.clickCount++;
    if(this.toggle === 'block'){
      this.toggle = 'none';
      this.toggleBtnText = 'Hide';
      this.clickLog.push('Panel showed. Count click: ' + this.clickCount);
    }
    else{
      this.toggle = 'block';
      this.toggleBtnText = 'Show';
      this.clickLog.push('Panel hided. Count click: ' + this.clickCount);
    }
  }

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
