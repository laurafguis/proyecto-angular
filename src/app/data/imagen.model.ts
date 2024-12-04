export class Imagen {
  url: string; // URL de la imagen
  descripcion: string; // Descripción de la imagen
  tamanyo: {
    ancho: number; // Ancho de la imagen
    alto: number; // Alto de la imagen
  };

  
  constructor(url: string, descripcion: string, ancho: number, alto: number) {
    this.url = url;
    this.descripcion = descripcion;
    this.tamanyo = { ancho, alto };
  }
}