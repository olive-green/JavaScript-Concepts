async function f() {
  let result = 'first!';
  console.log("first");
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });
  console.log("mid")
  result = await promise;

  console.log(result);
  console.log("end");
}

f();
//output
first
mid
done!
end

The function execution "pauses" at the line await promise and resumes when the promise settles,
with the resolve value of the promise being assigned to result. So, the code above shows "done!" after one second.

Let’s emphasize: await makes the current function pause until the promise settles, 
and then goes on with the result. This doesn’t cost any CPU resources, 
because the engine can do other jobs in the meantime: execute other scripts, 
handle events etc.

await is mostly just a more elegant way to get the promise result than promise.then. await is easier to read and write, especially when multiple Promises need to be waited for, which would otherwise require somewhat-unwieldy .then chains.