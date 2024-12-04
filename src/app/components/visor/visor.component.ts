import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Imagen } from 'src/app/data/imagen.model';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }

  @ViewChild('noImage') noImageTemplate!: TemplateRef<any>; // Referencia a la plantilla


  @Input() imagen: Imagen | null = null; // Recibe la imagen seleccionada
  @Output() mouseMove = new EventEmitter<{ x: number; y: number }>(); // Emite las coordenadas del mouse


  ngAfterViewInit(): void {
    console.log(this.noImageTemplate); // Accedes a la plantilla desde el código
  }

  // Manejar el movimiento del mouse
  onMouseMove(event: MouseEvent): void {
    const x = event.offsetX; // Coordenada X dentro de la imagen
    const y = event.offsetY; // Coordenada Y dentro de la imagen
    this.mouseMove.emit({ x, y }); // Emitir las coordenadas al AppComponent
  }

}
