import { DetalleHeroesService } from './../detalle-heroes.service';
import { Heroe } from './../interfaces/heroe.interfaz';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styleUrls: ['./detalle-heroe.component.css']
})
export class DetalleHeroeComponent implements OnInit {

  constructor() { }

  @Input() heroe?: Heroe;
  @Input() parametroEntrada?: string;
  ngOnInit(): void {
  }

}
