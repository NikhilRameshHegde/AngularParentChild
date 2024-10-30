// This is the parent component

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchild';

  EnterName=""
  EnterAge=""
  EnterStatus=""
  EnterGender=""
  EnterWeight=""
  EnterHeight=""
  parentData1=""
  parentData2=""
  parentData3=""
  parentData4=""
  parentData5=""
  parentData6=""

  transferData() {
    this.parentData1=this.EnterName
    this.parentData2=this.EnterAge
    this.parentData3=this.EnterStatus
    this.parentData4=this.EnterGender
    this.parentData5=this.EnterWeight
    this.parentData6=this.EnterHeight
  }

  value=""
// is passed by $event
  sendData(value:string) {
    this.value=value
  }
}