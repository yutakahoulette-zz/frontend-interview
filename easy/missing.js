const test = require("tape")

function missing(arr) {
  let expected = 0
  let acc = 0
  const len = arr.length
  for(let i = 0; i <= len + 1; i++) { expected += i }
  for(let i = 0; i < len; i++) { acc = acc + arr[i] }
  const diff = expected - acc
  return diff === (len + 1) ? undefined : diff
}

test('missing', function(t)  {
  t.equal(missing([]), undefined)
  t.equal(missing([1,4,3]), 2)
  t.equal(missing([2,3,4]), 1)
  t.equal(missing([5,1,4,2]), 3)
  t.equal(missing([1,2,3,4]), undefined)
  t.equal(missing([1,2,3,4,5]), undefined)
  t.equal(missing([1,2,3,4,6]), 5)
  t.end()
})

