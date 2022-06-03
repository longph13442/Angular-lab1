import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() inputValue : any
  // 1.định nghĩa
  @Output() handleSubmit : EventEmitter<any> 

  constructor() {
    // 2.khởi tạo
    this.handleSubmit = new EventEmitter()
   }

  ngOnInit(): void {
  }
  
  users = [
    {
      id: 1,
      name: "abcds",
      password: "12345667890"
    }
  ]
  onSubmit(userForm: NgForm) {
    // 3. bắn dữ liệu trở lại user
    this.handleSubmit.emit(userForm.value)
    console.log(userForm.value);

    userForm.resetForm({
      name: "",
      password: ""
    })
  }

  onRemove(id: any) {
    console.log(id);
    
    const confirm = alert("bạn có muốn xóa không ?");
    this.users = this.users.filter(item => item.id !== id)
  }

  onEdit(id: any) {
    this.users.map(item => item.id == id ?
      this.inputValue = {
        name: item.name,
        password: item.password
      } : "")

    // this.users = this.users.map((item) => item.id == item.formData ? formData.item)
  }
}
