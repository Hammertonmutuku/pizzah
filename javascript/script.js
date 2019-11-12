
function order (type,size,crust,toppings) {
    this.type = type;
    this.size= size;
    this.crust= crust;
    this.toppings=toppings;
};
order.prototype.new = function() {
    return "You have ordered " + this.type + " and  " + this.toppings + " as toppings and " + this.crust + " for crust ."
};
function priceTotal (price, quantity, delivery,crustP,toppingsP) {
    this.price= price;
    this.quantity=quantity;
    this.delivery=delivery;
    this.crustP=crustP;
    this.toppingsP=toppingsP;
    
};
priceTotal.prototype.total= function () {
    return ( this.price + this.delivery + this.toppingsP + this.crustP )* this.quantity ;
};
var sizePrices = [1000, 800, 500]
var priceToppings = [100,120,80]
var toppingsName= ["Pepperoni" , "mushroom" , "onion" ]
var crustNames= ["Crispy", "Stuffed", "Glutton-free"]
var crustPrices = [100,120,200]
var deliveryPrices = [0, 2]

$(document).ready(function(){
    $('form#myForm').submit(function (event) {
        event.preventDefault();
    var pizzaType = $('#type').val();
    var pizzaSize = parseInt($('#size').val());
    var pizzaToppings=parseInt($('#top').val());
    var priceCrust =parseInt($('#crusting').val());
    var pizzaTop = $('#top').val();
    var pizzaQty = parseInt($('#quantity').val());
    var pizzaPick = parseInt($('#delivery').val());
    var pricePizza = sizePrices[pizzaSize - 1];
    var DeliveryCost = deliveryPrices[pizzaPick - 1];
    var ToppingsCost = priceToppings[pizzaToppings-1];
    var crustCost = crustPrices[priceCrust-1]
    var topNames = toppingsName[pizzaTop-1]
    var crustName = crustNames[priceCrust-1]
    newOrder = new order(pizzaType,pizzaSize, crustName,topNames,crustName);
    newTotal = new priceTotal(pricePizza, pizzaQty, DeliveryCost,ToppingsCost,crustCost);
    if (pizzaPick===1){
        alert( newOrder.new());
        alert("Your bill is: " + newTotal.total());
        }else{
            if(pizzaPick===2){
                prompt(" Where would your like your Pizza to be Delivered? ");
                alert(" An additional 200/= will be charged for delivery.");
                alert("Your bill is: " + newTotal.total());
    
            }
        }
})
});