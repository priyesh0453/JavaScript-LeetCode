//2648. Generate Fibonacci Sequence: Write a generator function that returns a generator object which yields the fibonacci sequence.

/**
 * @return {Generator<number>}
 */

var fibGenerator = function*() 
{
    let a = 0, b = 1;

    yield a;
    yield b;

    let c;
    
    while(1)
    {
        c = a + b;

        yield c;

        a = b;
        b = c; 
    }    
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
 
/*  EXTRAS:

1) The use of "yield" allows for the creation of functions that can produce a sequence of values without executing the entire function at once.
2) Each call to "generator.next()" retrieves the next yielded value, along with the done flag indicating whether the generator has completed.

*/