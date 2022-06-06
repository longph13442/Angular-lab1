import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';
import { typeUser } from 'src/app/type/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup
  constructor(private UsersService: UsersService,
              private router: Router) {
    this.signupForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }
  onSubmit() {
    const signupData = this.signupForm.value;
    return this.UsersService.signup(signupData).subscribe((data)=>{
      localStorage.setItem('User',JSON.stringify(data))
      this.router.navigateByUrl('/')
    })
  }

}
