# explain encapsulation concepts in javascript with real time industry code ?
**Encapsulation** is a fundamental concept in object-oriented programming that involves bundling data (properties) and methods (functions) that operate on that data into a single unit (an object or class). Encapsulation allows you to control access to the internal state of an object, providing a clear and controlled interface for interacting with the object. In JavaScript, encapsulation is achieved through the use of public and private members, typically using closures or classes (introduced in ES6).

Here's an example of encapsulation in JavaScript using an industry-related code example:

Suppose you are working on a customer management system, and you want to encapsulate the customer's data within a `Customer` class, providing controlled access to properties.

```javascript
class Customer {
  constructor(id, name, email, phone) {
    // Private properties (encapsulated)
    let customerId = id;
    let customerName = name;
    let customerEmail = email;
    let customerPhone = phone;

    // Public methods to access and modify private properties
    this.getId = function() {
      return customerId;
    };

    this.getName = function() {
      return customerName;
    };

    this.getEmail = function() {
      return customerEmail;
    };

    this.getPhone = function() {
      return customerPhone;
    };

    this.setEmail = function(newEmail) {
      if (typeof newEmail === 'string' && newEmail.includes('@')) {
        customerEmail = newEmail;
      } else {
        console.log('Invalid email format');
      }
    };

    this.setPhone = function(newPhone) {
      if (/^\d{10}$/.test(newPhone)) {
        customerPhone = newPhone;
      } else {
        console.log('Invalid phone number format');
      }
    };
  }
}

// Create a new customer
const customer = new Customer(1, 'Alice', 'alice@email.com', '1234567890');

// Access properties using public methods
console.log(`Customer ID: ${customer.getId()}`);
console.log(`Customer Name: ${customer.getName()}`);
console.log(`Customer Email: ${customer.getEmail()}`);
console.log(`Customer Phone: ${customer.getPhone()}`);

// Modify properties using public methods
customer.setEmail('newemail@example.com');
customer.setPhone('9876543210');

console.log(`Customer Email (updated): ${customer.getEmail()}`);
console.log(`Customer Phone (updated): ${customer.getPhone()}`);
```

In this code, the `Customer` class encapsulates the customer's data using private properties and provides public methods to access and modify that data. This encapsulation ensures that the internal state of the `Customer` object is controlled and can only be accessed or modified through the defined methods.

Encapsulation in JavaScript helps improve data integrity, reduces the risk of unintended interference with the object's state, and provides a clear and controlled interface for interacting with objects. It is a powerful concept for building secure and maintainable applications, especially when working with complex data structures and objects.




# explain abstraction in javascript with real time industry code ?

**Abstraction** in JavaScript refers to the concept of simplifying complex reality by modeling classes or objects based on their essential characteristics and behaviors, while hiding unnecessary details. It allows you to work with high-level representations of objects, which makes code more manageable and understandable.

Here's an example of abstraction in JavaScript using a simple industry-related code example:

Suppose you're working on a car rental system. You can create an abstract `Vehicle` class that represents the essential properties and behaviors common to all vehicles, without specifying the details of specific vehicle types like cars, trucks, or bikes.

```javascript
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.make} ${this.model} started.`);
  }

  stop() {
    console.log(`${this.make} ${this.model} stopped.`);
  }

  accelerate() {
    console.log(`${this.make} ${this.model} is accelerating.`);
  }

  brake() {
    console.log(`${this.make} ${this.model} is braking.`);
  }
}
```

Now, you can create concrete classes that inherit from `Vehicle` and provide the specific details for each vehicle type. This is where you implement the details of each vehicle, such as cars, trucks, or bikes.

```javascript
class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }

  openTrunk() {
    console.log(`${this.make} ${this.model} trunk opened.`);
  }
}

class Truck extends Vehicle {
  constructor(make, model, year, cargoCapacity) {
    super(make, model, year);
    this.cargoCapacity = cargoCapacity;
  }

  loadCargo() {
    console.log(`${this.make} ${this.model} is loading cargo.`);
  }
}

class Bike extends Vehicle {
  constructor(make, model, year, type) {
    super(make, model, year);
    this.type = type;
  }

  pedal() {
    console.log(`${this.make} ${this.model} is pedaling.`);
  }
}
```

In this example, you've abstracted the concept of a vehicle into a `Vehicle` class, which defines common properties and behaviors. Specific vehicle types like `Car`, `Truck`, and `Bike` inherit from `Vehicle` and add their own unique properties and methods. This way, you can work with high-level abstractions (e.g., a generic "vehicle") while still allowing for specialization and customization for different vehicle types.

By using abstraction, you make the code more maintainable and extensible. When you need to add a new vehicle type or modify the behavior of existing vehicles, you can do so without affecting the core `Vehicle` class or other parts of the code that rely on it.



# explain polymorphism concepts in javascript with real time industry code ?

**Polymorphism** is a fundamental concept in object-oriented programming that allows objects of different classes to be treated as instances of a common parent class. It enables you to write code that can work with objects in a more generic way, making your code more flexible and extensible. In JavaScript, polymorphism is often achieved through method overriding, where sub-classes provide their own implementation of a method inherited from a parent class.

Here's an example of polymorphism in JavaScript using an industry-related code example:

Suppose you are working on a shape calculator application, and you have a base class `Shape` with a method `calculateArea()`.

```javascript
class Shape {
  calculateArea() {
    // The base class implementation
    return 0;
  }
}
```

Now, you create sub-classes for different types of shapes, such as `Circle` and `Rectangle`. Each sub-class overrides the `calculateArea()` method with its own implementation.

```javascript
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}
```

With polymorphism, you can work with different shapes generically. For example, you can create an array of shapes and call the `calculateArea()` method on each shape without knowing the specific type of each shape:

```javascript
const shapes = [
  new Circle(5),
  new Rectangle(4, 6),
];

shapes.forEach(shape => {
  console.log(`Area: ${shape.calculateArea()}`);
});
```

In this code, even though you're working with a mix of `Circle` and `Rectangle` objects, you can treat them all as instances of the common `Shape` class. The polymorphic behavior allows you to call `calculateArea()` on each object, and the appropriate overridden method is executed for each shape.

Polymorphism promotes code flexibility and reusability. As you add new shape types or modify existing ones, you don't need to change the code that works with shapes generically. This concept is particularly powerful in larger applications where you need to handle various objects of different types in a consistent and extensible way.



# explain inheritance concepts in javascript with real time industry code ?

**Inheritance** is a key concept in object-oriented programming (OOP) that allows you to create new classes (subclasses or child classes) that inherit properties and methods from existing classes (superclasses or parent classes). In JavaScript, you can achieve inheritance using the `extends` keyword to create subclasses that inherit from a parent class.

Here's an example of inheritance in JavaScript using an industry-related code example:

Suppose you are working on a banking application, and you have a base class `Account` that represents common properties and methods for all types of accounts.

```javascript
class Account {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
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

  getBalance() {
    return this.balance;
  }
}
```

Now, you want to create specific types of accounts, such as `SavingsAccount` and `CheckingAccount`, that inherit the properties and methods of the `Account` class. You can do this by extending the `Account` class.

```javascript
// creating SavingsAccount with the help of Account class
class SavingsAccount extends Account {
  constructor(accountNumber, accountHolder, balance, interestRate) {
    super(accountNumber, accountHolder, balance);
    // here we explicitly create interestRate , bcoz in Account super class we only declare 
    // only 3 elements - (accountNumber, accountHolder, balance )
    this.interestRate = interestRate;
  }

  applyInterest() {
    const interest = this.balance * (this.interestRate / 100);
    this.deposit(interest);
  }
}

// creating CheckingAccount with the help of Account class
class CheckingAccount extends Account {
  constructor(accountNumber, accountHolder, balance, overdraftLimit) {
    super(accountNumber, accountHolder, balance);
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount) {
    if (amount <= this.balance + this.overdraftLimit) {
      this.balance -= amount;
    } else {
      console.log("Exceeds overdraft limit");
    }
  }
}
```

In this example, `SavingsAccount` and `CheckingAccount` are subclasses of the `Account` class. They inherit the properties and methods of `Account` and can also have their own unique properties and methods. For instance, `SavingsAccount` introduces the `applyInterest()` method to calculate and add interest to the account balance.

You can now create instances of these specific account types:

```javascript
const savingsAccount = new SavingsAccount("SA123", "Alice", 1000, 2.5);
savingsAccount.applyInterest();

const checkingAccount = new CheckingAccount("CA456", "Bob", 500, 200);
checkingAccount.withdraw(600);
```

Inheritance in JavaScript promotes { code reusability and a hierarchical organization of classes} 
 -  allowing you to create more specialized classes while reusing the common functionality defined in the parent class. 
- It is a powerful concept for structuring and organizing code, especially in scenarios where objects have a clear hierarchical relationship.


