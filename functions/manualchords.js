setcps(.5)

const at = register('at', (i, pat) => pat.withValue(x => x[i]))

const mychords = {
  M: "0,4,7",      // major
  Mi: "4,7,12",    // major I inversion
  Mii: "-5,0,4",    // major II inversion
  m: "0,3,7"       // minor
}

$: "<<c4:M c4:Mi> e4:m d4:M d4:Mii>"
  .apply(x => x.at(0).add(x.at(1).pick(mychords))).struct("[x*4]@3 x")
  .note().piano()._pianoroll()

  
$: stack("bd", "<~ sd>", "<hh*2 oh>*2".gain(.2)).s().fast(4).bank("tr909")