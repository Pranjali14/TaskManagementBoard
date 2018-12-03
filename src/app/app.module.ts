import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { CardComponent } from './components/card/card.component';
import { DragDirective } from './directives/drag.directive';
import { DropDirective } from './directives/drop.directive';
import { DragDropService } from './services/drag-drop.service';
import { DataService } from './services/data.service';
import { AddCardComponent } from './components/add-card/add-card.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    DragDirective,
    DropDirective,
    AddCardComponent,
    AddListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DragDropService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
