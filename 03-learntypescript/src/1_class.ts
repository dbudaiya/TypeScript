//使用class关键字定义类
/*
  对象包含两个部分
    属性
    方法
*/


class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

const per = new Person("不带书")

console.log(per.name);
