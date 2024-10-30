import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Output() // Child is sending output
  public sendData=new EventEmitter<string>()
  
  childMessage() {
    this.sendData.emit("This is for UST Akatsuki")
  }
}