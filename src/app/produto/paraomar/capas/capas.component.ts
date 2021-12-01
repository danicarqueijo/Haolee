import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capas',
  templateUrl: './capas.component.html',
  styleUrls: ['./capas.component.scss']
})
export class CapasComponent implements OnInit {
  capas: any = [
      {
      pathImage: 'assets/capa/Antologia-Poetica-Cecilia-Meireles-1940462.jpg',
      name: 'Capa abc',
      preco: 'R$100',
      }
   ];

  constructor() { }

  ngOnInit(): void {
  }

}
