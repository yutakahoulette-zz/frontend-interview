var test = require("tape")

function isSorted(arr) {
  const len = arr.length
  if(len <= 1) return true
  let i = 0
  let isSorted = true
  while(isSorted && i <= len) {
    if(arr[i] >= arr[i+1]) { isSorted = false }
    i++
  }
  return isSorted
}

test('isSorted', function(t)  {
  t.true(isSorted([]))
  t.true(isSorted([1]))
  t.true(isSorted([-Infinity,-5,0,3,9]))
  t.true(isSorted([1,5,8,12]))
  t.false(isSorted([1,8,5,12]))
  t.false(isSorted([1,8,11,10]))
  t.false(isSorted([1,8,11,10]))
  t.end()
})
