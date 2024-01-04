import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
    //宣告完變數後 再加上@input才可以當作傳入參數
    @Input() message = '';

    prefix = '';
    //宣告-> 子componet傳訊號給父component
    @Output() update = new EventEmitter<string>();

    isUpdatePrefix = false;

    fakeUsers: User[] = generateFakeUsers();

    ngOnInit(): void {
      this.prefix = this.message
    }

    fontSize = 12;

    updatePrefix(){
      this.prefix = "New Hello World";
      //觸發-> 子component傳給父component
      this.update.emit(this.prefix + " testt")
      this.isUpdatePrefix = true;
      this.fontSize+=1;
    }
}

interface User {
  id: number;
  name: string;
  email: string;
}


function generateFakeUsers(): User[] {
  const users: User[] = [];

  for (let i = 1; i <= 10; i++) {
    const user: User = {
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`
    };

    users.push(user);
  }

  return users;
}
