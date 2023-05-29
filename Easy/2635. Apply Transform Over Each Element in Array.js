/*  2635. APPLY TRANSFORM OVER EACH ELEMENT IN ARRAY: 
    Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
    The returned array should be created such that returnedArray[i] = fn(arr[i], i).
    Please solve it without the built-in Array.map method.
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function(arr, fn) 
{
    //return arr.map(fn);   [Functional Programming]

    //Procedural Programming
    
    const output = [];
    let i = 0, length = arr.length;

    for(; i < length; i++)
    {
        output.push(fn(arr[i], Number(i)));
    }

    return output;    
};