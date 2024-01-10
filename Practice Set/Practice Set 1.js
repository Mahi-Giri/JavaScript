const me = {
  Name: "Mahesh",
  age: 24,
  Girlfriend: "Radha",
};

me["Friend"] = "Abhi";
me.Friend = "Kunal";

console.log(me);

// Both syntax is working same for accessing item into object 
console.log(me["Name"]);
console.log(me.Name);


