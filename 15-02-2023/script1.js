//For the given JSON iterate over all for loops(for,for in,for of,forEach)


var person=[{
    "name":"John",
    "age":30,
    "place":"Mumbai"
},
{
    "name":"Raj",
    "age":25,
    "place":"pune"   
}]

// for loop
// syntax:
// for(initialization;condition;increment/decrement)
// {

// }

let div=document.createElement("div");
document.body.appendChild(div);

for(var i=0;i<person.length;i++)
{
    let p=document.createElement("p");
    p.innerText=person[i].name;
    div.appendChild(p)
    console.log(person[i])
}

// for in
// syntax:
// for (const key in object) {
    
// }
// return in index position

// let div=document.createElement("div");
// document.body.appendChild(div);

for(let i in person)
{
    let p=document.createElement("p");
    p.innerText=person[i].name;
    div.appendChild(p)
    console.log(person[i])
}

// for of
// syntax:
// for (const iterator of object) {
    
// }
// return in value 

// let div=document.createElement("div");
// document.body.appendChild(div);

for(let i of person)
{
    let p=document.createElement("p");
    p.innerText=i.name;
    div.appendChild(p)
    console.log(i)
}

// for each
// syntax
// array.forEach(element => {
    
// });

// let div=document.createElement("div");
// document.body.appendChild(div);

person.forEach((i) =>{
        let p=document.createElement("p");
    p.innerText=i.name;
    div.appendChild(p)
    console.log(i)
});


