import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string ="https://t.ctcdn.com.br/b63_BJhAvkyOF0zKWSfv11SKlCQ=/1400x788/smart/i529935.png"
  contentTitle: string="Noticias de Konoha"
  contentDescription: string="Esperando pelo kage"
  private id

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
