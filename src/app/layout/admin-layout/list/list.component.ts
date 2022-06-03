import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { TypeProducts } from 'src/app/type/products';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: TypeProducts[];
  constructor(private productsSevice: ProductsService) { 
  this.products =[]
  }
  
  

  ngOnInit(): void {
    // gán dữ liệu
    this.productsSevice.getProducts().subscribe((data) =>{
      this.products=data;
      console.log(this.products);
    })
  }
  onClick(id:any){
    const confirm = window.confirm("ban co muon xoas khong ?")
    
  }

}
