function MakeUsers(name, age) {
  this.name = name;
  this.age = age;
}

let user = new MakeUsers();

user.name = prompt("Enter your name:");
user.age = prompt("Enter your age:");
user.age = +user.age;

function showMovie(user) {
  try {
    if (user.age === 0) {
      throw new Error();
    }
    if (user.age >= 18) {
      console.log("You can watch this movie");
    } else {
      console.log("Sorry, you are too young");
    }
  } catch (error) {
    let userAge = prompt("Enter your age, please");
    if (userAge !== '0') {
      user.age = +userAge;
      showMovie(user);
    } else {
      showMovie(user);
    }
  }
}

showMovie(user);