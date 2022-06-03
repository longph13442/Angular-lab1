import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() users :any
  @Output() handleRemove: EventEmitter<any>
  @Output() handleEdit : EventEmitter<any>
  constructor() { 
    this.handleEdit = new EventEmitter();
    this.handleRemove = new EventEmitter();
  }

  ngOnInit(): void {
  }
  onEdit(id:any){
    this.handleEdit.emit(id)
  }
  onRemove(id:any){
    this.handleRemove.emit(id);
  }

}
