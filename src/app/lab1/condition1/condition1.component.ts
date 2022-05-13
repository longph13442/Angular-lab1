import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition1',
  templateUrl: './condition1.component.html',
  styleUrls: ['./condition1.component.css']
})
export class Condition1Component implements OnInit {
 @Input() Speed :any;
  constructor() { }

  ngOnInit(): void {
  }

}
