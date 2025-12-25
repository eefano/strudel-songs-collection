setcps(1)

const rem = register('rem', (r, pat) => pat.withValue(v => v % r))

const t = time.sub(time.div(4).floor().mul(3))

"c2".add(t.pickmod([0, 4, 7]).add(t.div(3).floor().rem(5).mul(12)))
  .note().fast(4)
  ._pianoroll()