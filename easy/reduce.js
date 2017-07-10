var test = require("tape")

function reduce(arr, fn, acc) {
  for(var i = 0; i < arr.length; i++) {
    const el = arr[i]
    acc = fn(acc, el)
  }
  return acc
}

const add = (a, b) => a + b

test('reduce', function(t)  {
  t.same(reduce([1,2,3,4], add, 0), 10)
  t.end()
})

