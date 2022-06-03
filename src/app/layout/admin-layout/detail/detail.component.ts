import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { TypeProducts } from 'src/app/type/products';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // lấy id trên url
  id:string

  // call api
  // products = TypeProducts
  constructor(
    private activateRoute : ActivatedRoute,
    private productsSevices: ProductsService
  ) { 
    this.id = '';
  }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id']

    // this.products
    
  }

}
