import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'proyectoAngular';
  constructor(){}

  pantalla1 = "";
  pantalla2 = "";

  num1(){
    this.pantalla1 = this.pantalla1 + "1";
  }

  num2(){
    this.pantalla1 = this.pantalla1 + "2";
  }

  num3(){
    this.pantalla1 = this.pantalla1 + "3";
  }
  
  num4(){
    this.pantalla1 = this.pantalla1 + "4";
  }

  num5(){
    this.pantalla1 = this.pantalla1 + "5";
  }
  
  num6(){
    this.pantalla1 = this.pantalla1 + "6";
  }

  num7(){
    this.pantalla1 = this.pantalla1 + "7";
  }

  num8(){
    this.pantalla1 = this.pantalla1 + "8";
  }

  num9(){
    this.pantalla1 = this.pantalla1 + "9";
  }

  num0(){
    this.pantalla1 = this.pantalla1 + "0";
  }

  


}
