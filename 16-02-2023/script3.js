// //disply all the country flags in the console

// let div=document.createElement("div");
// document.body.appendChild(div);

// let xhr=new XMLHttpRequest()
// xhr.open("GET","https://restcountries.com/v3.1/all");
// xhr.send();
// xhr.onload=function()
// {
//     if(xhr.status==200)
//     {
//         let countries=JSON.parse(xhr.response);
  

//     for(var i in countries)
//         {
//             let p=document.createElement("p")
//             p.innerText=countries[i].name.common + " " +countries[i].region + "  " + countries[i].subregion + "  " + countries[i].population 
//             div.appendChild(p);
          
//             console.log(countries[i].name)
//             console.log(countries[i].region)
//             console.log(countries[i].subregion)
//             console.log(countries[i].population)
//         }

//    // console.log(countries[1].name)
       
        
//     }
//     else
//     {
//        console.log(xhr.status) 
//     }
// }