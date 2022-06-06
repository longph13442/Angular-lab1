import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeProducts } from 'src/app/type/products';
import { ProductsService } from "../../../services/products.service"

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  // khai báoo biến
  productsForm: FormGroup
  products: TypeProducts;
  id: string;

  constructor(private activateRoute: ActivatedRoute, // dùng để lấy dữ liệu tham số trên url
    private productService: ProductsService,// dùg để gọi hàm xử lí ở service
    private router: Router) { // chuyển trang
    // định nghĩa giữ liệu 
    this.id = "";
    this.productsForm= new FormGroup({
      name : new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
      price : new FormControl('',[
        Validators.required,
        Validators.min(1),
        Validators.max(100)]),
      desc : new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ]),
      img : new FormControl('',[
        Validators.required
      ]),
    })
    this.products = {
      _id: "",
      name: "",
      price: 0,
      img: "",
      desc: ""
    }
  }

  ngOnInit(): void {
    // lấy id từ url
    this.id = this.activateRoute.snapshot.params['id'];
    if(this.id){
      // goị hàm xử lí từ service ra sử dụng
    this.productService.getProduct(this.id).subscribe((data) => {
      this.products = data;
      this.productsForm.patchValue(data)
    })
    }
    


  }
  onSubmit() {
    const submitData= this.productsForm.value
    console.log(submitData);
    
    return this.productService.updateProduct(this.id,submitData).subscribe((data)=>{
      this.router.navigateByUrl("/");
    })
  }
}
