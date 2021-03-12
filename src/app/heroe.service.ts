import { Injectable } from '@angular/core';
import { HEROES } from './constantes/heroes.constante';
import {Heroe} from './interfaces/heroe.interfaz';

@Injectable({   
  providedIn: 'root'
})
export class HeroeService {

  constructor() { }

  getHeroes():Heroe[]{
    return HEROES;
  }
}
