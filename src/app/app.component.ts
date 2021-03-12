import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit, DoCheck{
  title = 'Ejercicio: 4 con Angular';

  datos:number = 20;
  //eventos del ciclo de vida de un componente
  constructor(){
    console.log('Constructor- el valor de datos es: ${this.datos}');
  }
  ngOnChanges():void{
    console.log('Constructor- el valor de datos es: ${this.datos}');
  }
  ngOnInit():void{
    console.log('Constructor- el valor de datos es: ${this.datos}');
  }
  ngDoCheck():void{
    console.log('Constructor- el valor de datos es: ${this.datos}');
  }
  ngAfterContentInit():void{
    console.log('Constructor- el valor de datos es: ${this.datos}');
  }
  ngAfterContentChecked():void{
    console.log('Constructor- el valor de datos es: ${this.datos}');
  }
  ngAfterViewInit():void{
    console.log('Constructor- el valor de datos es: ${this.datos}');
  }
  ngAfterViewChecked():void{
    console.log('Constructor- el valor de datos es: ${this.datos}');
  }
  ngOnDestroy():void{
    console.log('Constructor- el valor de datos es: ${this.datos}');
  }

  sumarNumero():void{
    this.datos += 10;
  }

  restarNumero():void{
    this.datos -= 10;
  }
}
