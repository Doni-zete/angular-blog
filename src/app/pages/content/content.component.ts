import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://t.ctcdn.com.br/b63_BJhAvkyOF0zKWSfv11SKlCQ=/1400x788/smart/i529935.png';
  contentTitle: string = 'Noticias de Konoha';
  contentDescription: string = 'Esperando pelo kage';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
    this.id = value.get("id")
    )
  }
  setValuesToComponent(id:string){
    const result = dataFake.filter(article => article.id.toString() ==  id )

    if(!result){
      this.contentTitle = result.title
    }
  }
}
