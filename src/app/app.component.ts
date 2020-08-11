import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  month = 0;
  day = 0;
  carName = "";
  color=false;
  colorName="";
  
  monthValue = (value) => {
    let val = parseInt(value);
    this.month = val;
  }

  dayValue = (value) => {
    let val = parseInt(value);
    this.day = val;
  }
  haveColor(){
    this.color = !this.color;
  }
  colorNameFunc=(val) =>{
    this.colorName = val;
  }

  generateName(){
    

    this.carName = "";
    if(this.color){
      this.carName += `The ${this.colorName}`;
      this.carName += this.dayNames[this.day-1];
    }
    else{this.carName +=this.monthNames[this.month-1];
      this.carName += this.dayNames[this.day-1];}
    
  }
  monthNames = [
  "The Agressive",
  "The Mighty",
  "The Powerful",
  "The Mad",
  "The Furious",
  "The Destroying" ,
  "The Agressive",
  "The Mighty",
  "The Powerful",
  "The Mad",
  "The Furious",
  "The Destroying" ,
  ]

  dayNames = [
    " Wolf",
    " Beer",
    " Tiger",
    " Lion",
    " Shark",
    " Titan",
    " Giant",
    " Machine",
    " Monster",
    " Godzilla",
    " Shakal",
    " Cobra",
    " Snake",
    " T-Rex",
    " Cunami",
    " Tornado",
    " Conqueror",
    " Imperator",
    " Rocket",
    " Bomb",
    " Tiger",
    " Lion",
    " Shark",
    " Titan",
    " Giant",
    " Machine",
    " Monster",
    " Godzilla",
    " Shakal",
    " Cobra",
    " Snake"
  ]

}
