import { Component, Input, OnInit } from '@angular/core';
import { Imagen } from 'src/app/data/imagen.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() imagen: Imagen | null = null; // Recibe la imagen seleccionada
  @Input() mouseX: number = 0; // Coordenada X del mouse
  @Input() mouseY: number = 0; // Coordenada Y del mouse


  constructor() { }

  ngOnInit(): void {
  }

}
