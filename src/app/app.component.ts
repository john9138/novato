import { Component, Input } from '@angular/core';
import { text } from '@angular/core/src/render3/instructions';
import { Text } from '@angular/compiler';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'kevin';
  b1 = "primero"
  b2 = "segundo"
  b3 = "tercero"
  respuesta = "hola soy ";
  rpta2 = ""
  sumar = ""
  total: number = 0
total1:number=0
resultado=0

  boton1() {
    this.rpta2 = "";
    this.rpta2 = this.respuesta + this.b1;
  }

  boton2() {
    this.rpta2 = "";
    this.rpta2 = this.respuesta + this.b2;
  }

  boton3() {
    this.rpta2 = "";
    this.rpta2 = this.respuesta + this.b3;
  }
  boton6() {
    this.total = 0
    this.total = 5 + 2

    this.sumar = "la suma es" + this.total;
  }
  boton7() {
    this.total = 0
    this.total = 5 + 2

    this.sumar = "la suma es" + this.total;
  }
 
}