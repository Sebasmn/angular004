import { HeroeService } from './../heroe.service';
import { Component, OnInit } from '@angular/core';
import {Heroe} from '../interfaces/heroe.interfaz';
//import {HEROES} from '../constantes/heroes.constante';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})  
export class HeroesComponent implements OnInit {

  heroe:Heroe = {
    id: 1,
    nombre: "Superman",
  }
  //heroes:Heroe[]=HEROES;
  heroes: Heroe[] = [];
  // obtiene el item seleccionado en la lista (? -> es para opcional)
  heroeSeleccionado?:Heroe ;
  parametro:string ='jhon doe';
  //realizar una inyeccion de dependencias
  constructor(private heroeService:HeroeService) {
    //this.getHeroesComponent();
   }

  ngOnInit(): void {
    //llamar al metodo para recuperar los datos del componente
    this.getHeroesComponent();
  }

  clicItemSeleccionado(heroe:Heroe) : void {
    this.heroeSeleccionado = heroe;
  }

  //permite recuperar los datos de la constante (HEROES) usando
  //el método creado en el servicio
  getHeroesComponent():void{
    this.heroes = this.heroeService.getHeroes();
  }
}
