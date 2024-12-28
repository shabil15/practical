const pizzaShop = require('./pizza-shop');




const PizzaShop = new pizzaShop();

PizzaShop.on('order',(size,topping)=>{
    console.log(`Order received for a ${size} pizza with ${topping}`);
})

PizzaShop.order('large', 'pepperoni');
PizzaShop.order('medium', 'mushrooms');

PizzaShop.displayOrderCount();