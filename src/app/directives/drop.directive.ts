import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { DragDropService } from '../services/drag-drop.service';

@Directive({
  selector: '[appDrop]'
})
export class DropDirective {

  @HostListener('drop', ['$event'])
  drop(event) {
    console.log('dropped', event);
    event.preventDefault();
    const node = event.dataTransfer.getData('text');
    this.onDrop.emit(this.dragDropService.dragData);
    this.dragDropService.dragData = null;
  } 

  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  } 

  @Output() onDrop: EventEmitter<any> = new EventEmitter();;
  constructor(private el: ElementRef, private dragDropService: DragDropService) { }

}
