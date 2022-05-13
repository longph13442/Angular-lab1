import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition2',
  templateUrl: './condition2.component.html',
  styleUrls: ['./condition2.component.css']
})
export class Condition2Component implements OnInit {
  @Input() Img: any;
  @Input() Price: any;
  constructor() { }

  ngOnInit(): void {
  }

}
