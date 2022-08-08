import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroesBorrados: string[] = [];

  constructor() { 
    console.log('constuctor')
  }
  borrarHeroe(){
    const heroeBorrado = this.heroes.shift()
    console.log(heroeBorrado)
    if (heroeBorrado != undefined) {
      this.heroesBorrados.push(heroeBorrado)
    }
  }
}



