import { Component, OnInit } from '@angular/core';
import {Heroe} from '../Heroe';
import {HEROES} from '../constanteheroes';

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
  heroes:Heroe[]=HEROES;
  // obtiene el item seleccionado en la lista (? -> es para opcional)
  heroeSeleccionado?:Heroe ;
  constructor() { }

  ngOnInit(): void {
  }

  clicItemSeleccionado(heroe:Heroe) : void {
    this.heroeSeleccionado = heroe;
  }
}
