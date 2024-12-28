const EventEmitter= require('events');

const emitter = new EventEmitter();

emitter.on('order-pizza', function (size,topping) {
    console.log(`Order reversed: ${size} with ${topping}`);
});

emitter.on('order-pizza', function (size){
    if (size=== large){
        console.log('serving complementary drink')
    }
    }
)

console.log("this do work before events");

emitter.emit('order-pizza', 'large', 'pepperoni');