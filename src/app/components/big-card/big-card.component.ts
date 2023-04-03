import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {

  photoCover:String ="https://criticalhits.com.br/wp-content/uploads/2019/01/naruto-uzumaki_qabz.png";
  @Input()
  cardTiTle: String = 'teta';
  @Input()
  cardDescription: String = '';

  constructor() {}

  ngOnInit(): void {}
}
