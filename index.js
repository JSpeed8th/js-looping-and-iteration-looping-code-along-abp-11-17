// // Code your solutions in this file
// function printBadges(employeeNames) {
//   for (let e = 0; e < employeeNames.length; e++) {
//     console.log(`Welcome ${employeeNames[e]}! You are employee #${e + 1}.`);
//   }
//   return employeeNames;
// }
//
// function tailsNeverFails() {
//   let counter = 0;
//   while (Math.random() >= 0.5){
//     console.log('Tails!')
//     counter++;
//   }
//   console.log('Heads!')
//   return `You got ${counter} tails in a row!`;
// }

function printBadges (employeeName) {
  for (i = 0; i < employeeName.length; i++) {
    console.log(`Welcome ${employeeName[i]}! You are employee #${i + 1}.`);
  }

  return employeeName;
}

function tailsNeverFails() {
  while (Math.random() >= 0.5) {
    let i = 0++;
  }

  return `You got ${i} tails in a row!`
}
