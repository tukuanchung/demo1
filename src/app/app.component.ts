import { Component, OnInit } from "@angular/core";
// import {VERSION} from "src/environments/environments.ts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // ! -> 我一定有值
  // test!: User;
  // test = {} as User;

  createdOn = new Date();

  title = "1.0.0";
  counter = 0;
  x!: number;
  y!: number;
  // data : Array<User> = [];
  // data: User[] = [];

  constructor(){
    // this.createdOn.getMinutes();
    setTimeout(() => {this.title="angular, 2000"})
  }

  changeTitle(name: string){
    this.counter++;
    this.title = name + ' ' + this.counter;
  }

  // 在html上看的叫做 => tag,      attribute
  //  被解議成DOM     => elements, property


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
  // Event Binding , F2 refact
  ShowCoordinate(evt : MouseEvent){
      this.x = evt.clientX
      this.y = evt.clientY
  }

  clearTitle(){
    this.title = ''
  }

  doSubmit(msg: string){
    alert(msg)
  }
}
