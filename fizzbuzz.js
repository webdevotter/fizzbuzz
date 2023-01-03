for (let i = 1; i <= 100; i++ ) {
  //For numbers divisible by 3 print "Fizz"
  if (i % 3 === 0 & i % 5 !== 0) {
    console.log(`${i}: Fizz`);
  //For numbers divisible by 5 print "Buzz"
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log(`${i}: Buzz`);
  //For numbers divisible by both 3 and 5 print "FizzBuzz"
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i}: FizzBuzz`)
  }
}

