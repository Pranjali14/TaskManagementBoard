import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {

  @Output() addListItem: EventEmitter<any> = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }

  showTextArea =false;
  text="";
  addCard() {
    if(this.text) {
      this.showTextArea = false;
      this.addListItem.emit(this.text);
      this.text = "";
    }
  }
}
