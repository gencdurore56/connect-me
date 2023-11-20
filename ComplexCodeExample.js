// Filename: ComplexCodeExample.js
// Description: Example of a complex JavaScript code

// Global variables
var numberOfUsers = 0;
var userList = [];

// User class
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.id = generateUniqueId();
    this.isActive = true;
  }

  deactivateUser() {
    this.isActive = false;
  }
}

// Function to generate a unique ID for a user
function generateUniqueId() {
  return Math.floor(Math.random() * 1000000);
}

// Function to add a user to the userList
function addUser(name, age, email) {
  var newUser = new User(name, age, email);
  userList.push(newUser);
  numberOfUsers++;
}

// Function to remove a user from the userList
function removeUser(userId) {
  var indexToRemove = -1;
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].id === userId) {
      indexToRemove = i;
      break;
    }
  }
  
  userList.splice(indexToRemove, 1);
  numberOfUsers--;
}

// Function to get the average age of active users
function getAverageAgeOfActiveUsers() {
  var totalAge = 0;
  var activeUsersCount = 0;
  
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].isActive) {
      totalAge += userList[i].age;
      activeUsersCount++;
    }
  }
  
  if (activeUsersCount === 0) {
    return 0;
  }
  
  return totalAge / activeUsersCount;
}

// Function to print user details
function printUserDetails() {
  for (var i = 0; i < userList.length; i++) {
    console.log("Name: " + userList[i].name);
    console.log("Age: " + userList[i].age);
    console.log("Email: " + userList[i].email);
    console.log("ID: " + userList[i].id);
    console.log("Active: " + userList[i].isActive);
    console.log("-----------------------");
  }
}

// Example usage
addUser("John Doe", 25, "john@example.com");
addUser("Jane Smith", 30, "jane@example.com");
addUser("Mike Johnson", 35, "mike@example.com");

removeUser(userList[1].id);

console.log("Number of users: " + numberOfUsers);
console.log("Average age of active users: " + getAverageAgeOfActiveUsers());

printUserDetails();
