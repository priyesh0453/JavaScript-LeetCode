/*  2665. COUNTER II: 
    
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
The three functions are:
    increment() increases the current value by 1 and then returns it.
    decrement() reduces the current value by 1 and then returns it.
    reset() sets the current value to init and then returns it.
*/

var createCounter = function(init) 
{
    let temp = init;

    function increment() 
    {
        return ++temp;
    }

    function decrement() 
    {
        return --temp;
    }

    function reset() 
    {
        temp = init;
        return temp;
    }

    return {    //This bracket (immediate after return) shouldn't start from next line.
        increment: increment,
        decrement: decrement,
        reset: reset
    };
};

/* Usage example:
const counter = createCounter(5);
console.log(counter.increment()); // Output: 6
console.log(counter.reset()); // Output: 5
console.log(counter.decrement()); // Output: 4
*/