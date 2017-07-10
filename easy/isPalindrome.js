const test = require("tape")

function isPalindrome(st) {
  const arr = st
    .toLowerCase()
    .replace(/\s/g, '')
    .split('')
  const len = arr.length
  let isPalindrome = true
  let i = 0
  while(isPalindrome && i <= Math.ceil(len / 2)) {
    const first = arr[i]
    const last = arr[len - i - 1]
    if(first !== last) { isPalindrome = false }
    i++
  }
  return isPalindrome
}

test('isPalindrome', function(t)  {
  t.true(isPalindrome(''))
  t.true(isPalindrome('abcdcba'))
  t.true(isPalindrome('abcddcba'))
  t.false(isPalindrome('asdf'))
  t.true(isPalindrome('A man a plan a canal Panama'))
  t.end()
})

