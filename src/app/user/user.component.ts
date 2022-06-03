import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  FormValue = {
    id: 0,
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
  onSubmit(newUser: any) {
    if (newUser.id === 0) {
      const Id = this.users
        .map(user => user.id)
        .sort((a: number, b: number) => b - a)
      const maxId = Id[0]

      return this.users.push({
        ...newUser,
        id: maxId + 1
      })
    }


    return this.users.forEach((user, index) => {
      if (user.id === newUser.id) {
        this.users[index] = newUser
      }
    })


  }

  onEdit(Id: any) {
    const editUser = this.users.find(user => user.id === Id)
    if (editUser) {
      this.FormValue = { ...editUser }

    }

  }
  onRemove(id:any){
    alert(" bạn có muốn xóa không ?")
    if(id){
      this.users = this.users.filter(user => user.id === id)
    }
  }

}
