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
  operador = "";

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

  borrar(){
    this.pantalla1="";
    this.pantalla2="";
  }

  borrar1(){
    this.pantalla1="";
 
    
  }
  
  suma(){
    this.pantalla2=this.pantalla1;
    this.pantalla1="";
    this.operador="suma";
  }
  
  resta(){
    this.pantalla2=this.pantalla1;
    this.pantalla1="";
    this.operador="resta";
  }
  
  multiplica(){
    this.pantalla2=this.pantalla1;
    this.pantalla1="";
    this.operador="multiplica";
  }
  
  divide(){
    this.pantalla2=this.pantalla1;
    this.pantalla1="";
    this.operador="divide";
  }
  
  resultado(){
    let valor1=Number(this.pantalla1);
    let valor2=Number(this.pantalla2);
  
    if(this.operador =="suma"){
      let suma = Number(valor1) + Number(valor2);
      this.pantalla1 = suma.toString();
    }else if(this.operador=="resta"){
      let suma = Number(valor2) - Number(valor1);
      this.pantalla1 = suma.toString();
    }else if(this.operador=="multiplica"){
      let suma = Number(valor1) * Number(valor2);
      this.pantalla1 = suma.toString();
    }else if(this.operador=="divide"){
      let suma = Number(valor2) / Number(valor1);
      this.pantalla1 = suma.toString();
    }
  }

  


}
