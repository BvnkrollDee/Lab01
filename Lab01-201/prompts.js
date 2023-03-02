function Question() {

let p1 = prompt("What's your favorite TV show?");

let elem = document.getElementById("P1");
elem.innerHTML += (" " + p1)
if (p1 == "Breaking Bad"){
    alert("Yeahhh Science bitchhh");
}
else {alert("Cool I'm going to have to check that out")}

// When user enters Breaking Bad they will receive the message yeahh science bitchhh. if anything else they get cool i'm going to have to check that out.

let p2 = prompt("Where are you from");

let eleme = document.getElementById("P2");
eleme.innerHTML += (" " + p2)

if (p2 == "Memphis"){
    alert("I think I know someone from there");
}
else {alert ("I don't think I know anyone from there")}


let p3 = prompt("What is your favorite food?");

let elemen = document.getElementById("P3");
elemen.innerHTML += (" " + p3)

if (p3 == "Asian food"){
    alert("You like it, but can you use chopsticks?");
}
else {alert("I bet that's pretty good")}

let p4 = prompt("What is your favorite hobby?");

let element = document.getElementById("P4");
element.innerHTML += (" " + p4)

if (p4 == "Video Games"){
    alert("Me too bro! Playstation or Xbox?")
}
else {alert("That sounds interesting bro.")}
// console.log("I'm running"); 

}

Question()