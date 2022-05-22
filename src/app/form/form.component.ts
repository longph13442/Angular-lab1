import { Component, OnInit } from '@angular/core';

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
  onSubmit(formData: { name: string, password: string }) {

    const newUsersId = this.users
      .map(user => user.id)
      .sort((a: number, b: number) => b - a)

    const maxId = newUsersId[0]
    console.log(formData);

    this.users.push({
      ...formData,
      id: maxId +1
    })

    this.inputValue = {
      name: "",
      password: ""
    }
  }

  onRemove(id: any) {
    const confirm  = alert("bạn có muốn xóa không ?");
     this.users = this.users.filter(item => item.id! == id)
  }
}
