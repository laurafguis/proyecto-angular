import { Component, OnInit } from '@angular/core';
import { Imagen } from './data/imagen.model';
import data from './data/data.json'; // Importar el archivo JSON

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listaImagenes: Array<Imagen> = []; 
  imagenSeleccionada: Imagen | null = null; // Imagen seleccionada para el visor e info
  mouseX: number = 0; // Coordenada X del mouse
  mouseY: number = 0; // Coordenada Y del mouse


  constructor() { 
    this.listaImagenes = data as Array<Imagen>;
    this.imagenSeleccionada =  this.listaImagenes[0]; // Seleccionar la primera por defecto
    
    console.log("Ejecutando constructor (PADRE)");// Asignar el array de imágenes
  }
  ngAfterViewInit(): void {
    console.log('Componente (PADRE), vista creada.');
  }

  ngOnInit(): void {
    console.log("Componente Iniciado (PADRE)");// A
   
  }

  seleccionarImagen(i: Imagen): void {
    this.imagenSeleccionada = i;
    console.log("Imagen seleccionada:", i);
  }

  actualizarCoordenadas(coordenadas: { x: number; y: number }): void {
    this.mouseX = coordenadas.x;
    this.mouseY = coordenadas.y;
  }

}