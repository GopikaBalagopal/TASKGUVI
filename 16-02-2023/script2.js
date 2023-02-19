//disply all the country flags in the console

let div=document.createElement("div");
document.body.appendChild(div);

let xhr=new XMLHttpRequest()
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload=function()
{
    if(xhr.status==200)
    {
        let countries=JSON.parse(xhr.response);
        // for(var i of countries)
        // {
        //     let p=document.createElement("p")
        //     p.innerHTML=`<b>${i.name.common}</b> : ${i.flag}`;
        //     div.appendChild(p);
        //     console.log(i.name.common + " : " + i.flag)
        // }
       countries.forEach((value,index) => {
            let p=document.createElement("p")
            p.innerText=(index+1) + " " + value.name.common + " : " + value.flags.png +" , " + value.flags.svg + " , " + value.flags.alt
            p.innerHTML=`<b>${index+1}:- ${value.name.common} </b>: ${value.flags.png} , ${value.flags.svg} , ${value.flags.alt}`;
            div.appendChild(p);
            console.log(value.name.common + " : " + value.flags.png +" , " + value.flags.svg + " , " + value.flags.alt)
            
        });
       
        
    }
    else
    {
       console.log(xhr.status) 
    }
}