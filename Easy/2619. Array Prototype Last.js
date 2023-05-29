/*  2619. Array Prototype Last: 
    Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element.
    If there are no elements in the array, it should return -1.
*/
    
Array.prototype.last = function() 
{
    return this.length ? this[this.length - 1] : -1;    
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
 
/*  EXTRAS:

1) In JavaScript, a PROTOTYPE is like a blueprint that defines the shared properties and methods for objects of a particular type, allowing those objects to inherit and access common functionalities.

*/