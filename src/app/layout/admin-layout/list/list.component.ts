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
    this.onGetList();
    
  }
  // show danh sasch
  onGetList(){
    this.productsSevice.getProducts().subscribe((data) =>{
      this.products=data;
    })
  }
  onRemove(id:any){
    const confirm = window.confirm("ban co muon xoas khong ?")
    if(confirm && id){
      this.productsSevice.deleteProduct(id).subscribe((data) =>{ // xóa 
        this.onGetList(); // cập nhật lại dữ liệu sau khi xóa
      })
    }
  }

}
