import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {
  @Input('students') Student:any;
  constructor() { }

  ngOnInit(): void {
  }

}
