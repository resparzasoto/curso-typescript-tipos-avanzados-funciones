const prices: (number | string)[] = [1, 2, 3, 'as'];
prices.push(1);
prices.push('1');

// tuple definition
let user: [string, number, boolean];
// user = ['@resparzasoto', 15];
// user = ['@example', 15];

// user = [];
// user = ['@resparzasoto'];
// user = ['@resparzasoto', 12];
user = ['@resparzasoto', 12, true];

// tuple destructuring
const [username, age] = user;
console.log(username);
console.log(age);
