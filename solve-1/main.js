// const arr = ['monir','uddin','developer'];

// arr.forEach(function(el, index, arr){
//     console.log(index,el,arr);
// });

// let name = "monir";

// function reversename(name){
    // return name.split('').reverse().join('');

// }
// console.log(reversename(name));

// let age = 18;
// age == 18 && age >= 18 ? console.log("ok"): console.log("not ok");

let age =11;

if(age <10){
    console.log("Stay home under your mom supervision");
}else if(age >=10 && age <15){
    console.log("Try to gain knowledge from outsite of home");
}else if(age >=15 && age <18){
    console.log("Prepare to cast vote");
}else if(age >18){
    console.log("case your vote");
}else{
    console.log("You are out of range");
}


switch (true) {
  case (age <10):
    console.log("Stay home under your mom supervision");
    break;
  case (age >=10 && age <15):
    console.log("Try to gain knowledge from outsite of home");
    break;
  case (age >=15 && age <18):
    console.log("Prepare to cast vote");
    break;
  case (age >18):
    console.log("cast your vote");
    break;
  default:
    console.log("You are out of range");
    break;
}

