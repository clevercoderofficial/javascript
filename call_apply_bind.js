let mainplan = {
    airline: "Fly India",
    iatacode : 'FI',
    booking: [],
    book: function(flightnum, name){
        this.booking.push({
            flight: `${this.airline}`,
            name: name,
            flightNum: `${this.iatacode}${flightnum}`
        })
    }
}
mainplan.book(554, "Carlo")
mainplan.book(554, "Carlo")
console.log(mainplan)