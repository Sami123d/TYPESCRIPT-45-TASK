// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person = "Sami ahmed";
console.log(person.toLowerCase());
console.log(person.toUpperCase());
console.log(person.replace(/\b\w/g, function (str) { return str.toUpperCase(); }));
