import { Component, Input, OnInit } from '@angular/core';
// nhận dưx liệu
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('Name') Name :any;
  constructor() { }

  ngOnInit(): void {
  }

}
