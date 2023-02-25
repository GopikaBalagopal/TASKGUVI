//a) Get all the countries from the Asia continent /region using the Filter function


let xhr=new XMLHttpRequest()
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload=function()
{
    if(xhr.status==200)
    {
        let user=JSON.parse(xhr.response);
  
user.filter((value)=>(value.region=="Asia"||value.continent=="Asia"))
.forEach((value)=> console.log(value.name))
    
    }
}


//b)Get all the countries with a population of less than 2 lakhs using Filter function

let xhr=new XMLHttpRequest()
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload=function()
{
    if(xhr.status==200)
    {
        let user=JSON.parse(xhr.response);
  
user.filter((value)=>(value.population<200000))
.forEach((value)=>{
     console.log(value.name)
     
    })
    
    }
} 


//c)Print the following details name, capital, flag using forEach function

let xhr=new XMLHttpRequest()
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload=function()
{
    if(xhr.status==200)
    {
        let user=JSON.parse(xhr.response);
  
    user.forEach((value)=>{

     console.log([value.name,value.capital,value.flag])
     
    })
    
    }
} 

//d)Print the total population of countries using reduce function


let xhr=new XMLHttpRequest()
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload=function()
{
    if(xhr.status==200)
    {
         let user=JSON.parse(xhr.response);
  
    user.reduce((value,currentvalue)=>{
        console.log(currentvalue.population)
    },{})

     
      }
} 


//e)Print the country which uses US Dollars as currency.

let xhr=new XMLHttpRequest()
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload=function()
{
    if(xhr.status==200)
    {
         let user=JSON.parse(xhr.response);
        console.log(user)
        let usdcountry=user.filter((value)=>(value.currencies?.USD))
         console.log(usdcountry);

 
    
    } 
}

