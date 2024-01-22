// Compare two JSON have the same properties without order.

// let obj1 = {name:"Person 1", age:5};
// let obj2 = {age:5, name:"Person 1"}

// let student_1 = [
//   {
//     name: "sakthivel",
//     age: 22,
//   },
// ];

// let student_2 = [
//   {
//     age: 22,
//     name: "sakthivel",
//   },
// ];


// For of loop
let student_1 = [
  {
    name: "sakthivel",
    age: 22,
  },
];

let student_2 = [
  {
    age: 22,
    name: "sakthivel",
  },
];

let isEqual = true;

for (const obj1 of student_1) {
  let found = false;

  for (const obj2 of student_2) {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
      found = true;
      break;
    }
  }

  if (!found) {
    isEqual = false;
    break;
  }
}

console.log(isEqual ? "Arrays are equal" : "Arrays are not equal");

// For Loop
// Using for loop with student_1
for (let i = 0; i < student_1.length; i++) {
  console.log(student_1[i].name, student_1[i].age);
}

// Using for loop with student_2
for (let i = 0; i < student_2.length; i++) {
  console.log(student_2[i].name, student_2[i].age);
}



// For In:
// Using for in loop with student_1
for (let i in student_1[0]) {
  console.log(i, student_1[0][i]);
}

// Using for...in loop with student_2
for (let i in student_2[0]) {
  console.log(i, student_2[0][i]);
}




// For Each:
// Using forEach loop with student_1
student_1.forEach((student) => {
  console.log(student.name, student.age);
});

// Using forEach loop with student_2
student_2.forEach((student) => {
  console.log(student.name, student.age);
});
