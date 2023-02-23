// Section-1 : Play with variables
console.log(1 + 2);
console.log("apple" + "orange");
console.log(1 + 2 + "apple");
console.log("apple" + 1 + 2);
console.log(1 + true);
console.log(0 == false);
console.log(1 === true);
console.log(2 == "2");

// Section-2 : Play with arrays

// 1. A Cricket Team has 11 players. Create a list with the names of all players.
// 2. Unfortunately, the first player had an injury. Remove him from the list of players.
// 3. Now, find out the number of players
// 4. Add another player to the above list of players to make the count 11.
// 5. The cricket board has decided to take photographs of all players and so they would need the players
// list in sorted format.
// 6. Display all the Players name and assign a random jersey number. For example. MS Dhoni-7
// 7. The cricket board wants to print the names of all players in uppercase and store it in a different
// location for printing jerseys. Do not modify the existing players list.

// 1. list with names of 11 players
players = [
  "Rohit Sharma",
  "KL Rahul",
  "Shubman Gill",
  "Suryakumar Yadav",
  "Cheteshwar Pujara",
  "Virat Kohli",
  "Shreyas Iyer",
  "KS Bharat",
  "Ishan Kishan",
  "R. Ashwin",
  "Axar Patel",
];
console.log("List of 11 players\n", players);

// 2. removing first player from list of players
players.shift();

console.log("After removing first player\n", players);

// 3. number of players
no_of_players = players.length;
console.log("No of players\n", no_of_players);

// 4. add other player
players.push("Kuldeep Yadav");
console.log("After adding other player\n", players);

// 5. sorting the players list
players.sort();
console.log("After sorting the players\n", players);

// 6. displaying players name and assigning a random jersey number

function assignJerseyNumber(player) {
  playersObj[player] = Math.round(Math.random() * 100);
}
playersObj = {};
players.forEach(assignJerseyNumber);

console.log("Players and jersey number\n");
for (let player in playersObj) console.log(player, playersObj[player]);

// 7. storing uppercase names for printing in Jersey
jerseyData = {};
for (let player in playersObj)
  jerseyData[player.toUpperCase()] = playersObj[player];

console.log("Players and jersey number - Uppercase\n");
for (let player in jerseyData) console.log(player, jerseyData[player]);

// Section-3 : Play with functions

// 1. Create a function to display numbers from 1 to 100.
// 2. Create a function to display today's date in DD/MM/YYYY format.
// 3. Create a function which accepts a Celsius value as parameter and returns the Fahrenheit value.
// 4. Create a function which accepts an array of numbers as parameter and return the average of those
// numbers.
// 5. Create a function to reverse a given string.

// 1. Function to display numbers from 1 to 100.

function display_1_to_100() {
  for (let i = 1; i <= 100; i++) console.log(i);
}
console.log("Number from 1 to 100");
display_1_to_100();

// 2. Function to display today's date in DD/MM/YYYY format.

console.log("Today's date", new Date().toLocaleDateString());

// 3. Function which accepts a Celsius value as parameter and returns the Fahrenheit value.

function celsius_to_fahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
celsius = 10;
console.log("Celsius:", celsius, "Fahrenheit:", celsius_to_fahrenheit(32));

// 4. Function which accepts an array of numbers as parameter and return the average of those numbers.
function average(arr) {
  total = 0;
  count = 0;
  arr.forEach((v) => {
    (total += v), count++;
  });
  return total / count;
}

arr = [1, 2, 3];
console.log("Average of", arr, "is", average(arr));

// 5. Function to reverse a given string.

function reverseString() {
  new_string = "";
  for (idx = string.length - 1; idx >= 0; idx--) {
    new_string += string[idx];
  }
  return new_string;
}

string = "reverse";
console.log("Reverse of", string, "is", reverseString(string));
