const test = require("tape")

function isBalanced(st) {
  const braces = st.match(/[\{\}]/g)
  const len = braces.length
  let i = 0
  let isMatching = true
  while(isMatching && i < Math.ceil(len / 2)) {
    const first = braces[i]
    const last = braces[len - i - 1]
    if(first != '{' || last != '}') { isMatching = false }
    i++
  }
  return isMatching
}

test('isBalanced', function(t)  {
  t.false(isBalanced('}{'))
  t.false(isBalanced('{{}'))
  t.false(isBalanced('{}{}'))
  t.true(isBalanced('foo { bar { baz } boo }'))
  t.false(isBalanced('foo { bar { baz }'))
  t.false(isBalanced('foo { bar } }'))
  t.end()
})

