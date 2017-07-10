var test = require("tape")

function reverse(st) {
  let acc = ''
  let arr = st.split('')
  let len = arr.length
  for(var i = len - 1; i >= 0; i--) { acc += arr[i] }
  return acc
}

test('reverse', function(t)  {
  t.same(reverse(''), '')
  t.same(reverse('abcdefg'), 'gfedcba')
  t.end()
})

