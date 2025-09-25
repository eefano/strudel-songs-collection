// "Busty Beez" (work in progress)
// song @by Cardiacs
// script @by eefano
setcps(182 / 60 / 8)
const beez = `<~@8 
      i@28 j@18 k@5 l@2 m@30 n@22 o@22
      i@28 j@18 k@5 l@2 m@30 n@22 o@22
      n@22 m@30 k@5 l@2 k@5 p@16
      i@28 j@18 j@18 k@5 l@2 m@30 k@5 l@2 m@30 n@22 o@22
      i@28 j@18 k@5 l@2 m@30 n@22 o@22
      i@28 j@18 k@5 l@2 m@30 n@22 o@22
      n@22 m@30 k@5 l@2 k@5 p@16
      i@28 j@18 j@18 k@5 l@2 m@30 k@5 l@2 m@30 n@22 q@6 p@16
      i@28 j@18 j@18 j@18 j@18 j@18 j@18 j@18 j@18 ~@18 >`
const melody = {
  i: "<b4@3 c5 g4@2 g4 f4 c#4 c#4@2 a4@2:4 a4 b4@2 b4 f#4 d#4 b3 c4 d#4 g#4 c5@2 c#5 c#4@2>",
  j: "<d4 c#4 b3 b3 b4@2 a4 g4 f4 d#4 d#4 c#4 b3 g4@2 f4 d#4 c#4>",
  k: "<c#4 c4@2 a#3@2>",
  l: "<f#4@2>",
  m: "<e4@2 a3@2 g#3 a#3 c4 c#4 d4 e4 f#4 [g#4 ~] g#4@2 a#4@2 c5@2 c#5@2 c5@2 f#4@2 g4@5 ~>",
  n: "<g4 d4 b3 c#4 d#4 c#4 c4 a#3 a#3 d4 g4 g#4@2 a#4@2 a#4@2 f4 d4@2 g#4@2>",
  o: "<g4@6 g4@12 g#4 d#4 a#4 b4>",
  p: "<g4@4 g4@4 g4@3 g4 g#4 d#4 a#4 b4>",
  q: "<g#4@2 g4@4>" }
const ch0rds = {
  i: "<G@3 C@3 C#@3 A@4 F@3 B@4 G#@5 F#@3>",
  j: "<G@10 A@8>",
  k: "<F#@5>",
  l: "<D@2>",
  m: "<A@4 C#@4 D@4 E@2 A#@4 A@2 F@2 B@2 D#@6>",
  n: "<G@2 B@3 F#@3 Gm@3 E@4 D#m@2 Dm@3 C#@2>",
  o: "<C#@6 D#@4 C#@4 G@4 E B F# B>",
  p: "<D#@4 C#@4 G@4 E B F# B>",
  q: "<C#@6>" }
const drums = {
  i: "<[bd,cr]@3 bd sd@2 bd@2 sd bd@2 sd@2 sd [bd,cr]@2 [bd,cr]@2 sd@2 bd!2 sd@2 sd [bd,cr]@2 sd>",
  j: "<[bd,cr]@2 sd@3 bd sd [sd,mt] [sd,lt]!2 [bd,cr]@2 sd@3 bd@2 sd>",
  k: "<[bd,cr] bd sd bd sd>",
  l: "<[bd,cr]@2>",
  m: "<[bd,cr]@2 sd@2 bd!2 sd@2 bd!2 sd@2 bd sd [bd,cr]@2 sd bd sd bd [bd,cr]@2 [bd,cr]@2 [bd,cr]@2 sd bd [sd,mt] lt>",
  n: "<[bd,cr]@2 sd@3 bd@3 sd@2 bd sd@2 bd@2 bd@2 sd bd@2 [bd,cr]@2>",
  o: "<sd@2 sd [bd,cr]!2 ~ [bd,cr]@2 sd bd [sd,mt] bd [bd,cr]@2 [bd,cr]@3 sd!2 [sd,mt] [sd,lt]!2 >",
  p: "<[bd,cr]@2 sd bd [sd,mt] bd [bd,cr]@2 [bd,cr]@3 sd!2 [sd,mt] [sd,lt]!2>",
  q: "<sd@2 sd [bd,cr]!2 ~>" }
const colors= {i:'white',j:'yellow',k:'cyan',l:'green',m:'red',n:'salmon',o:'magenta',p:'orange',q:'lightgrey'}

const split = register('split', (deflt, callback, pat) => callback(deflt.map((d,i)=> pat.withValue((v)=>{
  const isobj = v.value !== undefined; const value = isobj ? v.value : v;
  const result = Array.isArray(value)?(i<value.length?value[i]:d):(i==0?value:d);
  return (i==0 && isobj) ? {...v,value:result} : result; }))));

$: beez.pickRestart(melody).split([0,0],s=>note(s[0]).penv(s[1])).patt(.1).clip(.98)
  .layer(x=>x.s("gm_overdriven_guitar:3").vib(10).vibmod(.09).delay(.4).dt(.2).dfb(.30).gain(1),
         x=>x.transpose(12).s("gm_pad_bowed:1").gain(.4))
$: chord(beez.pickRestart(ch0rds)).anchor('F4').voicing()
  .layer(x=>x.s("gm_church_organ:3").pan(.40).gain(.4),
         x=>x.s("gm_brass_section:1").pan(.55).gain(.7))
$: beez.pickRestart(ch0rds).rootNotes(2).note()
  .s("gm_electric_bass_pick:2").lpf(200).gain(.6)
$: beez.pickRestart(drums).pickOut({
          bd:s('bd').velocity(.55).lpf(500),
          sd:s('sd').velocity(.55).hpf(200),
          cr:s('cr').velocity(.1).pan(.55),
          mt:s('mt').velocity(.3).pan(.6),
          lt:s('lt').velocity(.2).pan(.7)}).bank("linn9000").speed(.95).gain(.7)
$: s("<r8_rd:1>").speed(1.1).hpf(4000).gain(.1)

all(x => x.room(.2)
    //.color(beez.pick(colors))
    .fast(8)
)
