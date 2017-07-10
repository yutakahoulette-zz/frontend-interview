var test = require("tape")

function factorial(num) {
  for(var i = 1, x = num; i < num; i++) { x *= i }
  return x
}

test('factorial', function(t)  {
  t.equal(factorial(4), 24)
  t.equal(factorial(5), 120)
  t.equal(factorial(8), 40320)
  t.end()
})

