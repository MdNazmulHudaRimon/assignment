function kilometerToMeter(km){
    var meter = km * 1000;
    return  meter;
}
// var result =  kilometerToMeter(10);
// console.log(result);

// first program done
// second one start
function budgetCalculator(watch,phone,laptop){
    let watchPrice = watch * 50;
    let phonePrice = phone * 100;
    let laptopPrice = laptop * 500;
    var result = watchPrice + phonePrice + laptopPrice;
    return result;
}
// var finalCost = budgetCalculator(10,20,1);
// console.log(finalCost);

// 2nd finished
// third program start
function hotelCost(stayingTime){
    var finalCost = 0;
    if(stayingTime<=10){
        finalCost = stayingTime * 100;
    }
    else if(stayingTime<=20){
        var firstTenDays = 10 * 100;
        var remainingDays  =  stayingTime - 10;
        var moreThanTen =  remainingDays * 80;
        finalCost = firstTenDays + moreThanTen;
    }
    else{
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remainingDays = stayingTime - 20;
        var moreThanTwenty = remainingDays  * 50;
        finalCost = firstTenDays + secondTenDays + moreThanTwenty;
    }
    return finalCost;
}
// var totalcost = hotelCost(5);
// console.log(totalcost);

// 3rd finished
// 4th start

function megaFriend(friends) {
    var array = friends.split(" ");
    var maximumLength = array[0].length;
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > maximumLength){
            maximumLength = array[i].length;
            var maximum = array[i];
        } 
    }
    return maximum;
}
// var friendsname = megaFriend("Ashfak Haider and Rimon are two best friends");
// console.log(friendsname);
// 4th finished

