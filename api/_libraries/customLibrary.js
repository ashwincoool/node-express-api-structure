class Custom {
  //construct dynamic values
    constructor(name, age, email) {
      this.name = name;
      this.age = age;
      this.email = email;
    }
  
    //create method 
    getUserStats() {
      return `
        Name: ${this.name}
        Age: ${this.age}
        Email: ${this.email}
      `;
    }


  }
  
  module.exports = Custom;
  
/***
 * This is a sample class file, how to create and use in project
 * Created By- ashwincoool
 */