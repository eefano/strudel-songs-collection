// Why does my brain works so bad?
// an example in chords and arps modularization
// based on a song @by Moby

setcpm(98/4*2)

const mychords = {
  m1:"0,7,12,15",         // minor 1
  m2:"0,12,15,19",        // minor 2
  M1:"0,7,12,16",         // major 1
  M2:"0,12,16,19"         // major 2
}
const myarps = {
  u: "0,1,2,3",          
  a: "-@2 0 1 2 3@3",    
  b: "-@2 0@2 [1,2,3]@4", 
  c: "-@2 0 1 [2,3]@4"
}

$:   "<a3!4    e3!4    g3!4    d3!4   >"
.add("<m1!4    m2!4    M1!4    M2!4   >".pick(mychords))
.arp("<u a u b u b u c u b u a u ~ u a>".pick(myarps))
.note().s('piano')._pianoroll()

