const CPM = 50 / 4
setcpm(CPM)

const conversions = { s: CPM / 60, ms: CPM / 60000 }

register('timeconv', (pat) => pat.fmap(v => v[0] * conversions[v[1]]))

$: s("hh*4")

$: s("hh:1*4").late("<300:ms 200:ms 0.1:s >".timeconv())
