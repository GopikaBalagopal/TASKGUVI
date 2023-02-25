class uber{
    constructor(distance,priceperkm)
    {
        this.distance=distance
        this.priceperkm=priceperkm
    }

    get totalprice(){
        let total=this.distance*this.priceperkm
        return total
    }
    get priceatbusyhours()
    {
        
        let total=this.distance*(this.priceperkm*2)
        return total
    }
}

let uber1=new uber(100,30)

console.log(uber1.totalprice)
console.log(uber1.priceatbusyhours)