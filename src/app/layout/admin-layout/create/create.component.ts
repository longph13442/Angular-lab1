import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, AbstractControl, ValidationErrors} from '@angular/forms'
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  productsForm : FormGroup
  constructor( private productsService: ProductsService,
               private router: Router
               ) {

    // validate
    this.productsForm = new FormGroup({
      name : new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
        this.onValidate
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
   }

  ngOnInit(): void {
  }

  // mỗi khi form thay đổi dữ liệu chuyền vào thì sẽ hàm này sẽ chạy
  onValidate(control: AbstractControl): ValidationErrors | null{
    console.log(control.value);
    
    return null
  }

  onSubmit(){
    console.log(this.productsForm.valid);
    
    const submitData = this.productsForm.value;
    return this.productsService.createProduct(submitData).subscribe((data)=>{
      this.router.navigateByUrl("/")
    })
  }
}
