import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

//   //items = [{'type': 'todo', 'list': [{'title': Math.random()*1,}, {
//     'title': Math.random()*1,
//   },{
//     'title': Math.random()*1,
//   },{
//     'title':Math.random()*1,
//   }
//   ]},{'type': 'pending','list': [{
//     'title': Math.random()*1,
//   }, {
//     'title': Math.random()*1,
//   },{
//     'title': Math.random()*1,
//   },{
//     'title':Math.random()*1,
//   }
//   ]},
//   {'type': 'done','list': [{
//     'title': Math.random()*1,
//   }, {
//     'title': Math.random()*1,
//   },{
//     'title': Math.random()*1,
//   },{
//     'title':Math.random()*1,
//   }
//   ]}
// ];
items;
 constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBoardData().subscribe((data) => {
        this.items = data;
        console.log(this.items);
      }
    );
  }

  pushItem(event, i) {
    // getting the index of the state list from where the item is dragged
    const currentIndex = this.items.map((item) => item.listId);
    // the index of the list where the item is dropped
    const dropIndex = i;
    // pushing the item to the new location
    this.items[dropIndex].list.push(event.data);

    //getting the list from where the item is dragged
    const removeList = this.items[currentIndex.indexOf(event.listId)].list;
    console.log(removeList);
    const index= removeList.map((item) => item.id).indexOf(event.data.id);
    //removing the item from the list
    removeList.splice(index, 1);
  }

  addListItem(event, index) {
    this.items[index].list.push({'id':new Date().getTime(), 'title': event});
  }

  addList(listTitle) {
    this.items.push({'listTitle': listTitle, 'listId': new Date().getTime(), 'list':[]});
  }

}
