import { Directive, HostListener, ElementRef, HostBinding, Input } from '@angular/core';
import { DragDropService } from '../services/drag-drop.service';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  @HostBinding('draggable') 
  get draggable() {
    return true;
  }

  @Input() dragData;

  @HostListener('dragstart', ['$event']) 
  onDragStart(ev) {
    // console.log('drag start', event);
    //ev.dataTransfer.effectAllowed = "move";
    ev.dataTransfer.dragEffect = "move";
    ev.dataTransfer.setData('text', this.el.nativeElement.innerHTML);
    this.dragDropService.dragData = this.dragData;
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(ev) {
    //ev.stopPropagation();
    console.log(ev.target, 'enter');
  }

  @HostListener('dragend', ['$event'])
  ondragend() {
    //console.log('dragend', event);
  }

  constructor(private el: ElementRef, private dragDropService : DragDropService) { 
    //console.log(el);
  }
}
