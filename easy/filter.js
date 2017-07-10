const test = require("tape")

function filter(arr, fn) {
  let acc = []
  for(let i = 0; i <= arr.length; i++) {
    const el = arr[i]
    if(fn(el)) { acc.push(el) }
  }
  return acc
}

const isString = (x) => (typeof x) === 'string'

test('isSorted', function(t)  {
  t.same(filter([1, 'two', 'three', 4], isString), ['two', 'three'])
  t.end()
})

