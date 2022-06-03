import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  // products= TypePro;
  id:string;
  constructor(private activateRoute : ActivatedRoute) { 
    this.id= "";
    // this.products=""
  }

  ngOnInit(): void {
     this.id= this.activateRoute.snapshot.params['id'];
    
  }

}
