import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome = 'Danniel Oliveira';
  dataAniversario = new Date(1993, 2, 4);
  preco = 12855.32;
  troco = 0.57392;

}
