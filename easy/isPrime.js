var test = require("tape")

function isPrime(num) {
  if (num <= 1 ) return false
  let i = 2
  let isPrime = true
  while(isPrime && i <= Math.round(num / 2)) {
    if(num % i === 0) { isPrime = false } 
    i++
  }
  return isPrime 
}

test('isPrime', function(t)  {
  t.false(isPrime(0))
  t.false(isPrime(1))
  t.true(isPrime(2))
  t.true(isPrime(5))
  t.false(isPrime(100000000))
  t.true(isPrime(179426549))
  t.end()
})

