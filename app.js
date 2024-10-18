const name = prompt("Name: ");
const birthYear = parseInt(prompt("Enter your DOB: "));
const gender = confirm("Are you Male? ");

let age = 2024 - birthYear;
let properAge = 18;
let calling = "Sister";

if (gender) {
  properAge = 21;
  calling = "Brother";
}

if (age >= properAge) {
  document.write(
    `<h1> ${calling} ${name}, you can marry now. you already ${
      age - properAge
    }  years past the age you were supposed to get married."  </h1>`
  );
} else {
  document.write(`<h1> ${calling} ${name}, you need to wait ${properAge - age} years to get married."  </h1>`);
}
