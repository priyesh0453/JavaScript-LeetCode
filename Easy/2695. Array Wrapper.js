/*  2695. ARRAY WRAPPER: 

Create a class ArrayWrapper that accepts an array of integers in it's constructor. This class should have two features:
    When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
    When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
*/

/**
 * @param {number[]} nums
 */

var ArrayWrapper = function(nums) 
{
    this.nums = nums;    
};

ArrayWrapper.prototype.valueOf = function()
{
    return this.nums.reduce((Accumulator, currentElement) => (Accumulator + currentElement), 0);   
}

ArrayWrapper.prototype.toString = function() 
{   
    return `[${this.nums.join(',')}]`;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
 
/*  EXTRAS:

1) The "reduce()" function is called on the nums array. It is a higher-order function that iterates over each element of the array and reduces it to a single value..

*/