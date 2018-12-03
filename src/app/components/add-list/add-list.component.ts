import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  @Output() addList: EventEmitter<any> = new EventEmitter(); 
  constructor() { }

  showTextArea = false;
  listTitle = "";
  ngOnInit() {
  }

  addNewList() {
    this.addList.emit(this.listTitle);
    this.listTitle="";
  }

}
