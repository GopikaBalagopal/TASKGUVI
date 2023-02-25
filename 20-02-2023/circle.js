class circle{
    constructor(radius,color)
    {
        this.radius=radius
        this.color=color
    }

    get radiuss(){
        return this.radius
    }
    setradius(radius){
        this.radius=radius
    }
    get colorr(){
        return this.color
    }
    setcolor(colorr){
        this.color=colorr
    }
    get converttostring(){
        let num = this.radius;
        return num.toString(); 
        
    }
    get area(){
        let area=Math.PI*this.radius*this.radius
        return area
    }
    get circumference(){
        let circumference=2*Math.PI*this.radius
        return circumference
    }
}



 
let circle1=new circle(10,"red") 

console.log(circle1.radiuss,circle1.colorr)
circle1.setradius(12)
circle1.setcolor("blue")
console.log(circle1.radiuss,circle1.colorr)
console.log(circle1.converttostring)
console.log(circle1.area)
console.log(circle1.circumference)