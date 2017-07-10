const test = require("tape")

function indexOf(arr, match) {
  let i = 0 
  let indexOf
  const len = arr.length
  while(indexOf === undefined && i <= len) {
    const el = arr[i]
    if(el === match) { indexOf = i }
    i++
  }
  return indexOf === undefined ? -1 : indexOf
}

test('indexOf', function(t)  {
  t.same(indexOf([1,2,3], 1), 0)
  t.same(indexOf([1,2,3], 4), -1)
  t.same(indexOf(['apple','banana','cherry'], 'cherry'), 2)
  t.end()
})
