let restaurants ={
    name:'ASB',
    guestCapacity:75,
    guestCount:0,
    checkAvailability:function(partySize){
        //console.log(partySize)
      //  console.log(this.guestCapacity)
      let seatsLeft = this.guestCapacity - this.guestCount
        return partySize<=seatsLeft;
    },
    seatParty: function(partySize){
            this.guestCount = this.guestCount+partySize
    },
    removeParty:function(partySize){
            this.guestCount = this.guestCount-partySize
    }
}


//seatParty
//removeParty
restaurants.seatParty(72)
//let status = restaurants.checkAvailability(80);
console.log(restaurants.checkAvailability(4));
restaurants.removeParty(5)
console.log(restaurants.checkAvailability(4));



