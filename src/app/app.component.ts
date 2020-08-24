import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstdemo';
  message ="";
  myfunction(value)
  {
    if(value.length < 8 )
     this.message="it is short";
    else
      this.message="it is correct" ;
      console.log(value);
  }

 
  
}
