//  //print odd numbers in an array

// // anonymous:
//  let arr=[1,2,3,4,5,6,7,8,9]


//    let odd=function(array){
//      if(array%2!==0)
//     {
//         console.log(array)
//     }
    
//  }
//  arr.forEach((arr)=> {
//     odd(arr)
//    });
  


// //IIFE:
// (function(array){
//     for(var i in array){
//                if(array[i]%2!=0){
//                   console.log(array[i])
//                } 
//           }
//     })([1,2,3,4,5,6,7,8])


// //arrow function
// let odd1=(array) => {
//         if(array%2!=0){
//            console.log(array)
//         } 
//    }
//         arr.forEach((arr)=> {
//                 odd1(arr)
//                });


// // convert all the sting to title caps in string array

// // anonymous:

// let arr="GOPIKA BALAGOPAL"
// let littlecaps=function(string){

// let str=arr.toLowerCase().split(" ");
// for(var i in str)
// {

//   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
 
// }
// return str.join(" ");

// }
// console.log(littlecaps(arr))

// //IIFE:


//  (function(str){

// str=str.toLowerCase().split(" ");
// for(var i in str)
// {
   
//   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  
 
// }

// console.log(str.join(" "))


// })("GOPIKA BALAGOPAL");



// //arrow function

// let arr="GOPIKA BALAGOPAL"
// let littlecaps=(string)=>{

// let str=arr.toLowerCase().split(" ");
// for(var i in str)
// {

//   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
 
// }
// return str.join(" ");

// }
// console.log(littlecaps(arr))


////sum of all numbers in an array

////anonymous:

// let arr=[1,2,3,4,5,6,7,8,9]

// let sum=function(array){
//    let s=0;
// for(var i in arr)
// {
   
//    s=s+arr[i]
// }
// return s;
// }
// console.log(sum(arr))

////IIFE

// (function(array){
//    let sum=0;
// for(var i in array)
// {
   
//    sum=sum+array[i]
// }
// console.log(sum)
// })([1,2,3,4,5,6,7,8,9])

////arrow function
// let arr=[1,2,3,4,5,6,7,8,9]

// let sum=(array) => {
//    let s=0;
// for(var i in arr)
// {
   
//    s=s+arr[i]
// }
// return s;
// }
// console.log(sum(arr))


//Return all the prime numbers in an array

// anonymous 
// let arr=[12,3,4,5,6,8,9,7,5,2,1]

// let prime=function(arr){
//   let primearray=[];
//   arr.forEach(number => {
//     let count=0;
//     for(let i=0;i<=number;i++){
//       if(number%i===0){
//         count=count+1
//       }
//     }
//     if(count==2)
//     {
//       primearray.push(number)
//     }
//     });
//     return primearray
// }
// console.log(prime(arr))

//IIFE 

// (function(arr){
//   let primearray=[];
//   arr.forEach(number => {
//     let count=0;
//     for(let i=0;i<=number;i++){
//       if(number%i===0){
//         count=count+1
//       }
//     }
//     if(count==2)
//     {
//       primearray.push(number)
//     }
//     })
//     console.log(primearray)
// })([12,3,4,5,6,8,9,7,5,2,1])



//Arrow Function :

//let arr=[12,3,4,5,6,8,9,7,5,2,1]

// let prime=(arr)=>{
//   let primearray=[];
//   arr.forEach(number => {
//     let count=0;
//     for(let i=0;i<=number;i++){
//       if(number%i===0){
//         count=count+1
//       }
//     }
//     if(count==2)
//     {
//       primearray.push(number)
//     }
//     });
//     return primearray
// }
// console.log(prime(arr))



//return all the palindromes in an array

//anonymous 

// let arr=['malayalam', 'english', 'wow', 'noon', 'evening']


// let findpalidrome=function(arr){

//   let palindrome=[]
// for(let i in arr){
//   if(arr[i]===arr[i].split("").reverse().join(""))
//   {
//     palindrome.push(arr[i])
//   }
// }
// return palindrome
// }
// console.log(findpalidrome(arr))


// IIFE

// (function(arr){

//   let palindrome=[]
// for(let i in arr){
//   if(arr[i]===arr[i].split("").reverse().join(""))
//   {
//     palindrome.push(arr[i])
//   }
// }
// console.log(palindrome)
// }
// )(['malayalam', 'english', 'wow', 'noon', 'evening'])


//arrow function

// let arr=['malayalam', 'english', 'wow', 'noon', 'evening']


// let findpalidrome=(arr)=>{

//   let palindrome=[]
// for(let i in arr){
//   if(arr[i]===arr[i].split("").reverse().join(""))
//   {
//     palindrome.push(arr[i])
//   }
// }
// return palindrome
// }
// console.log(findpalidrome(arr))




//return median two sorted array of same size

//anonymous
// let arr1=[1,5,6,8,9]
// let arr2=[2,3,4,7,10]
// let median=function(arr1,arr2){
// let arr=arr1.concat(arr2)

// arr.sort(function(a, b){return a-b});

// let len=arr.length

// return (arr[len/2]+arr[(len/2)+1])/2
// }
// console.log(median(arr1,arr2))



//IIFE

// (function(arr1,arr2){
//   let arr=arr1.concat(arr2)
  
//   arr.sort(function(a, b){return a-b});
//   console.log(arr)
//   let len=arr.length/2
//   console.log((arr[len]+arr[len+1])/2)
//   })([1,5,6,8,9],[2,3,4,7,10])
  

//remove duplicates from an array


//anonymous

// var arr = [1,3,4,9,6,8,3,9,1,2] 

// let findduplicate=function(arr){
// var array=[];
// for(let i=0;i<arr.length;i++)
// {
//   if(array.indexOf(arr[i])===-1)
//   {
//     array.push(arr[i])
//   }

// }
// return array
// }
// console.log(findduplicate(arr))
      

//IIFE


// (function(arr){
//   var array=[];
//   for(let i=0;i<arr.length;i++)
//   {
//     if(array.indexOf(arr[i])===-1)
//     {
//       array.push(arr[i])
//     }
  
//   }
//   console.log(array)
//   })([1,3,4,9,6,8,3,9,1,2] )


//rotate an array by k times 
//anonymous


// let arr=[1,2,3,4,5,6]
// let k=3

// let rotate=function(arr){
//   for (let i = 0; i < k; i++) {
//       arr.unshift(arr.pop());
//   }
//   return arr
// }
//   console.log(rotate(arr))


//IIFE

// (function(arr, k) {

//   for (let i = 0; i < k; i++) {
//       arr.unshift(arr.pop());
//   }

//   console.log(arr)
// })([1,2,3,4,5,6],3)


  








 

 