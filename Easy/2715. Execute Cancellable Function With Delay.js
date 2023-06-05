/*
    2648. 2715. Execute Cancellable Function With Delay: 
    
    Given a function fn, an array or arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
    After a delay of t, fn should be called with args passed as parameters unless cancelFn was called first. In that case, fn should never be called.
*/

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

var cancellable = function(fn, args, t) 
{ 
    function cancelFn()
    {
        clearTimeout(timerID);
    }

    function applyFn()
    {
        fn.apply(null, args);
    }

    timerID = setTimeout(applyFn, t);

    return cancelFn;
};

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const log = (...argsArr) => {
 *      result.push(fn(...argsArr))
 *  }
 *       
 *  const cancel = cancellable(fn, args, t);
 *           
 *  setTimeout(() => {
 *     cancel()
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, cancelT)
 */
 
/*  EXTRAS:

1) "apply" is used to pass the arguments as an array.
2) The clearTimeout() function is a built-in JavaScript function that is used to cancel a timer previously set with the setTimeout() function.

*/