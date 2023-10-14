# Explain oops concepts in javascript with real time examples ?

Object-Oriented Programming (OOP) concepts are fundamental in JavaScript, and they help in structuring and organizing code for better readability, reusability, and maintainability. Here are some key OOP concepts in JavaScript with real-time examples:

1. **Objects:**
   - In JavaScript, everything is an object or can be represented as an object. Objects are collections of key-value pairs.

   Example:

   ```javascript
   const person = {
     firstName: 'John',
     lastName: 'Doe',
     greet: function() {
       console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
     }
   };

   person.greet(); // Output: "Hello, I'm John Doe"
   ```

2. **Classes and Constructors:**
   - Classes provide a blueprint for creating objects. Constructors are special methods that initialize objects created from a class.

   Example:

   ```javascript
   class Person {
     constructor(firstName, lastName) {
       this.firstName = firstName;
       this.lastName = lastName;
     }

     greet() {
       console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
     }
   }

   const person = new Person('John', 'Doe');
   person.greet(); // Output: "Hello, I'm John Doe"
   ```

3. **Encapsulation:**
   - Encapsulation is the concept of bundling data (properties) and methods (functions) that operate on that data into a single unit (an object or class).
   
   Example:

   ```javascript
   class BankAccount {
     constructor(balance) {
       this.balance = balance;
     }

     deposit(amount) {
       this.balance += amount;
     }

     withdraw(amount) {
       if (amount <= this.balance) {
         this.balance -= amount;
       } else {
         console.log("Insufficient balance");
       }
     }
   }

   const account = new BankAccount(1000);
   account.deposit(500);
   account.withdraw(200);
   ```

4. **Inheritance:**
   - Inheritance allows one class to inherit the properties and methods of another class. It promotes code reusability.

   Example:

   ```javascript
   class Animal {
     constructor(name) {
       this.name = name;
     }

     speak() {
       console.log(`${this.name} makes a sound.`);
     }
   }

   class Dog extends Animal {
     speak() {
       console.log(`${this.name} barks.`);
     }
   }

   const dog = new Dog('Buddy');
   dog.speak(); // Output: "Buddy barks."
   ```

5. **Polymorphism:**
   - Polymorphism allows objects of different classes to be treated as objects of a common parent class. It enables method overriding.

   Example:

   ```javascript
   class Shape {
     getArea() {
       return 0;
     }
   }

   class Circle extends Shape {
     constructor(radius) {
       super();
       this.radius = radius;
     }

     getArea() {
       return Math.PI * this.radius ** 2;
     }
   }

   class Rectangle extends Shape {
     constructor(width, height) {
       super();
       this.width = width;
       this.height = height;
     }

     getArea() {
       return this.width * this.height;
     }
   }

   const circle = new Circle(5);
   const rectangle = new Rectangle(4, 6);

   console.log(circle.getArea());    // Output: 78.54
   console.log(rectangle.getArea()); // Output: 24
   ```

These are some of the core OOP concepts in JavaScript, and understanding and applying them can help you write more organized and maintainable code in real-world applications.