//2621. Sleep: Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

/**
 * @param {number} millis
 */

async function sleep(millis) 
{
    await new Promise((resolve) => {
        setTimeout(resolve, millis);
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
 
 
/*  EXTRAS:

1) An ASYNCHRONOUS FUNCTION in JavaScript allows you to perform tasks that may take some time to complete without blocking other code execution, making it possible to do multiple things at once. It enables smoother user experiences and better resource utilization.
2) PROMISES in JavaScript are like guarantees that something will happen in the future, allowing you to perform actions when that something is ready, either successfully or with an error.

*/