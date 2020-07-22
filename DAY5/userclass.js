class User
{
    constructor(name,age,email,coins)
    {
        this.name=name;
        this.age=age;
        this.email=email;
        this.coins=0;
        this.courses=[];
    }
    login()
    {
        console.log(`${this.name} has logged in`);
    }
    logout()
    {
        console.log(`${this.name} has logged out`);
    }
  
}
class Moderator extends User{
    constructor(name,age,email,coins)
    {
        super(name,age,email)
        this.coins=0;
    }
addCoins(User)
{
       this.coins++;
        console.log(`${User.name} has  ${this.coins} coins`);
    
}
removeCoins(User)
{
    this.coins--;
    console.log(`${User.name} has ${this.coins} coins`);
}
}
class Admin extends Moderator
{
    addCourse(User,course)
    {
        User.courses.push(course);
        console.log(User);
    }
    delCourse(User,course)
    {
        User.courses.pop(course);
        console.log(User);
    }
}
let user1=new User('Raksha',20,'R@gmail.com');
user1.login();
let mod=new Moderator('Krish',24,'K@gmail.com');
mod.addCoins(user1);
mod.addCoins(user1);
mod.addCoins(user1);
mod.removeCoins(user1);
let a1=new Admin('Jay',22,'J@gmail.com');
a1.addCourse(user1,'JavaScript');
a1.addCourse(user1,'Java');
//delete course Java
a1.delCourse(user1,'Java');
user1.logout();

