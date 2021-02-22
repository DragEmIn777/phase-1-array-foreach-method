# forEach: The Unexpressive Collection-Processing Method

## Learning Goals

- Use `forEach` to Work with an Array
- Explain why `forEach` is the least-expressive collection-processing method

## Introduction

In the previous lesson, you learned that many of the collection-processing
functions are really slight variations on `map` and `reduce`.

But `map` and `reduce` are "child" collection-processing methods from the root
collection-processing method of them all, `.forEach`. In this lesson, we'll talk
about `forEach` and why it's a good idea to avoid it. Let's use it real quick.

## Use `forEach` to Work with an Array

By now, you're so comfortable with collection-processing methods, you'll find
`.forEach` follows the pattern of the "Character of Collection-Processing
Methods."

```js
oppressedWorkers = [
  "Dopey",
  "Sneezy",
  "Happy",
  "Angry",
  "Doc",
  "Lemonjello",
  "Sleepy"
];

oppressedWorkers.forEach(function(oppressedWorker) {
  console.log(`${oppressedWorker} wants to form a union!`);
}); //=> undefined

/* Output
Dopey wants to form a union!
Sneezy wants to form a union!
Happy wants to form a union!
Angry wants to form a union!
Doc wants to form a union!
Lemonjello wants to form a union!
Sleepy wants to form a union!
*/
```

We've saved talking about `forEach` for last. Despite the fact that `forEach`
most simply expresses the "Character of collection-processing Methods," we're
showing it _last_ because we want to use it _least_. Why is that?

## Explain Why `forEach` is the Least-Expressive Collection-Processing Method

We want to avoid `forEach` because it is the least-expressive
collection-processing method. It communicates the _least_ to other programmers
about what we're trying to do.

By now you recognize that `map` means: "create a new `Array` after transforming
each element." You recognize that `reduce` means: "distill a single summary value from
a set of elements." These methods are _expressive_; their presence in your code tells
other programmers (and yourself in the future) what you intended to happen.

But what does `forEach` mean? Programmers, including you, recognize that `map` has
a specific use, `reduce` has a specific use, `max` has a specific use. But
`forEach` is generic. Are we just printing things, or are we trying to distill to
a value, or are we trying to produce a transformed `Array`?

When we use `forEach` to do `map`-things or `reduce`-things we're not
_documenting_ what our intention was with regard to the collection. This makes
for code that's harder to understand and debug. Here's some code that uses
`forEach` instead of `reduce`.

```js
function sumArray(numberArray) {
  let total = 0;
  numberArray.forEach(function(i) {
    total = total + i;
  });
  return total;
}
sumArray([1, 2, 3]); //=> 6
```

Sure, it works, but it doesn't _communicate_. We should always strive to have
code that works ***and*** communicates.

## Identify Cases for `forEach`

The best time to use `forEach` is when you need to enumerate a collection to
cause some sort of "side-effect". The best example of this is when you want to
iterate through a collection to `console.log()` values. This function doesn't
return anything back, so using something like `map()` here would unnecessarily
create a new array. It would also mislead any developers who are looking at our
code about what its purpose is. We're using `forEach` here strictly to do
something that is handy for us (the developer) as a _side-effect_; in this case,
printing content to the screen.

This is pretty common in debugging:

```js
  empCollection.forEach(function(e){
    console.log("DEBUG: WHAT ARE YOU?!?" + e)
  })
```

The other time we want to use `forEach` is if we want to directly change (or
"mutate") the elements we're iterating through.

As an example, consider:

```js
function addFullNameToEmployees(empCollection){
  empCollection.forEach(function(e){
    e.fullName = `${e.firstName} ${e.familyName}`
  })
}

addFullNameToEmployees([
  {firstName: "Byron", familyName: "Karbitii"},
  {firstName: "Luca", familyName: "Tuexedensis"}
])
```

In this case, we're directly updating employees in the original object, rather
than creating a new object with the modifications (in which case we'd use `map`
instead). The employee, `e`, is updated as a _side-effect_ of running `forEach`.
The only clue that helps us guess what the `forEach` is doing here is that the
programmer "wrapped" it inside of a helpfully-named function name.

## Conclusion

This concludes our discussion of `forEach`. It's the most flexible
collection-processing method, but it's also the least expressive. When you
aren't sure which way to go, you might want to use it, but most of the time you
really want to use `map` or `reduce`.
