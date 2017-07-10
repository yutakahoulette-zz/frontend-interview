var test = require("tape")

// returns the Nth fibonacci number
function fib(n) {
  let x = 0, y = 1
  for(var i = 0; i <= n; i++) { 
    x = x + y
    y = x - y
  }
  return y
}

test('fib', function(t)  {
  t.equal(fib(0), 0)
  t.equal(fib(1), 1)
  t.equal(fib(19), 4181)
  t.end()
})

