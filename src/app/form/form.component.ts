import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inputValue =
    {
      
      name: "",
      password: ""
    }

  users = [
    {
      id: 1,
      name: "abcds",
      password: "12345667890"
    }
  ]
  onSubmit(userForm: NgForm) {
    console.log(userForm.value);

    // gán id
    const newUsersId = this.users
      .map(user => user.id)
      .sort((a: number, b: number) => b - a)

    const maxId = newUsersId[0]

    // add vào data
     this.users.push({
      ...userForm.value,
      id: maxId + 1
    })
    // this.users = this.users.filter((item) => item.id !== maxId ? this.users = userForm.value)
    
    

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
