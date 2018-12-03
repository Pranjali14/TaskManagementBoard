import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() data;
  @Input() type: string;
  cardData: any;
  ngOnInit() {
    this.cardData = {'data': this.data, 'listId': this.type};
  }

}
