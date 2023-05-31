//  2667. CREATE HELLO WORLD FUNCTION: Write a function createHelloWorld. It should return a new function that always returns "Hello World".


/**
 * @return {Function}
 */

var createHelloWorld = function() 
{
    return function(...args) 
    {
        return 'Hello World';   
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

/*  EXTRAS:

1)  The inner function uses a rest parameter "(...args)" to accept any number of arguments.

*/