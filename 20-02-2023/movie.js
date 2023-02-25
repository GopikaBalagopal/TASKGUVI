// The class Movie is stated below. An instance of class Movie represents a film. 
// This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
//    a String representing the studio, and a String representing the rating as its arguments,
//     and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default 
// when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, 
// and returns a new array of only those movies in the input array with a rating of "PG". 
// You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
// the studio “Eon Productions”, and the rating “PG­13”

class movie{
   
    constructor(title,studio,rating)
    {
        this.title=title;
        this.studio=studio;
        this.argument=rating
      
    }

  rating(){
   
    if(this.argument==null)
    return "PG"
    return this.argument
  }

  getPG(arr)
{
  let array=arr.filter((value)=>{
    if(value.argument=="PG"){
      return value.title
    }
  })
return array

}


}



let CasinoRoyale=new movie("Casino Royale","Eon Productions","PG13")
let KGF=new movie("KGF","hombale films","PG13")
let RRR=new movie("RRR","DVV Entertainment","R")
let JurassicWorld =new movie("Jurassic World ","Amblin Entertainment Legendary Pictures")
let DDLJ=new movie("DDLJ ","Yash Raj Films","PG")

let arr=[CasinoRoyale,KGF,RRR,JurassicWorld,DDLJ]

// let arr=[
//   {
//     title:"Casino Royale",
//     studio:"Eon Productions",
//     argument:"PG13"
//   },
//   {
//     title:"KGF",
//     studio:"hombale films",
//     argument:"PG13"
//   },
//   {
//     title:"RRR",
//     studio:"DVV Entertainment",
//     argument:"R"
//   },
//   {
//     title:"Jurassic World ",
//     studio:"Amblin Entertainment Legendary Pictures",
//     argument:"PG"
//   },
//   {
//     title:"DDLJ ",
//     studio:"Yash Raj Films",
//     argument:"PG"
//   }

// ]

console.log(DDLJ.getPG(arr)) 







