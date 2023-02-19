//how to compare two json have two same properties without order

let obj1={"name":"person1","age":5}
let obj2={"age":5,"name":"person1"}



let div=document.createElement("div");
document.body.appendChild(div)


if( obj1.name=obj2.name &&obj1.age==obj2.age) 
{
    console.log("obj1 and ob2 are same");
    let p=document.createElement("p");
    p.innerText="obj1 and ob2 are same"
    div.appendChild(p)
}
else{
    console.log("obj1 and ob2 are different") 
    let p=document.createElement("p");
    p.innerText="obj1 and ob2 are different"
    div.appendChild(p)
}

