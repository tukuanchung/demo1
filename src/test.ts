class Member{
  name: string;

  constructor(name: string){
    this.name = name;
  }
  run(): void{

  }
}

interface User {
  id : number;

  name?: string;

  tel?: string;
}

//var a:User = {id:1, name:"123", tel :"0928119554"};
var a: User = {
  id:1
};
//as User 轉型
var a : User = {} as User;
// <User> 轉型
var a : User = <User>{};

// string | void 回傳型別 字串或沒有回傳型別
function test(a: string): string | void{
  return a +　'123';
}
