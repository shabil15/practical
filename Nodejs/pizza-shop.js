const EventEmitter = require('events');

class pizzaShop extends EventEmitter {
    constructor(){
        super()
        this.orderCount = 0;
    }

    order(size,topping){
        this.orderCount++;
        console.log(`Order received for a ${size} pizza with ${topping}`)
        this.emit('order', size,this.orderCount)
    }

    displayOrderCount(){
        console.log(`Total orders: ${this.orderCount}`);
    }
}

module.exports = pizzaShop;