/*
2634. Filter Elements from Array:
    Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.
    The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.
    Please solve it without the built-in Array.filter method.
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function(arr, fn)
{
    //return arr.filter(fn);    [Declarative Programming]

    //Imperative Programming

    const output = [];
    let i = 0, length = arr.length;
    
    for(; i < length; i++)
    {
        if(fn(arr[i], i)) output.push(arr[i]);
    }

    return output;
};