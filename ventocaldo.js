// "Il Vento Caldo Dell'Estate (wip)"
// song @by Alice
// script @by eefano
const split = register('split', (deflt, callback, pat) => callback(deflt.map((d,i)=> pat.withValue((v)=>{
  const isobj = v.value !== undefined; const value = isobj ? v.value : v;
  const result = Array.isArray(value)?(i<value.length?value[i]:d):(i==0?value:d);
  return (i==0 && isobj) ? {...v,value:result} : result; }))));
setCps(115/60)

synt: "<a@27 b@70 b@75 ~@56 b@70 b@75 ~@56 ~@87 ~@8>".pickRestart({
  a: "<0@6 0@6 0@7 0@7 0@8 0@10 0@10>*2",
  b: "<0@6 0@6 0@6 0@7 0@7 0@6 0@6 0@6 0@6 0@7 0@7 0@6 0@8 0@10 0@8 0@10 0@8 0@10 0@10 0@10>*2"
    
}).pickRestart(["<0 4 7 8 10 11 9 12 14 12>*2"])
  .scale("c#4:major").note().s("gm_drawbar_organ:4").room(.3).lpf(1200).gain(0.7).color('yellow')

bass: "<a@172 b@56 a@145 b@56 c@87 ~@8>".pickRestart({
  a: "<[<c#2:1!22 [c#2:.8 c#2:.9] > <c#3:1!6 [c#3:.8 c#3:.9]>]>".s("gm_electric_bass_finger:2"),
  b: "<~@2 c#2:1@4 c2:1@2 a#1:1@6 c2:1@2 g#1:1@8 d#2:1@8 c2:1@8 f2:1@8 c#2:1@8>".s("triangle"),
  c: "<~@2 [[c#2!6 a#1!8 g#1!6 d#2!8 c2!8 f2!8 c#2!8]!2]@104>".fast(1.2).s("gm_electric_bass_finger:2"),
}).split([0,.6],s=>note(s[0]).clip(s[1])).lpf(400).gain(1.5).color('cyan')

wind: "<~@172 a@56 ~@145 a@56 b@87 ~@8>".pickRestart({
  a: "<~@2 C#:g#2@4 G#:g#2@2 A#m:g#2@6 C#:g#2@2 G#:g#2@8 D#:d#2@8 Cm:d#2@8 F7:d#2@8 C#:d#2@8>",
  b: "<~@2 [[C#:g#2:1@6 A#m:g#2:1@8 G#:g#2:1@6 D#:a#2:1@8 Cm:a#2:1@8 F7:a#2:1@8 C#:a#2:1@8]!2]@104>".fast(1.2)
     
}).split([0,0,0],s=>
   n(s[2].pickRestart(["<0,1,2,3>/8","<[0,1,2,3]*3>/2"]))
  .chord(s[0]).anchor(s[1]).mode('above').voicing().s("gm_church_organ").gain(0.7)
  .superimpose(u=>u.when(s[2],w=>
   n("<4 5 6 7 8 7 6 5 4>*8").chord(s[0]).anchor(s[1])).mode('above').voicing().s("sawtooth").gain(0.65))
  ).room(.7).color('green')

voic: "<~@172 a@56 ~@145 a@56 b@87 ~@8>".pickRestart({
    a: note(`<~ c#4 d#4@2 c#4@2 [c4 c#4] [d#4 f4] c#4@2 d#4@2 ~ [~ c#4] [c4 c#4] [d#4 f4] d#4 g#3@5
         ~ [~ d#4] f4@2 d#4@2 d4 d#4 ~ [~ d#4] f4@2 [g4 f4] [d#4 f4] d#4@2
         ~ [~ d#4] f4@2 d#4@2 [f4@3 d#4@3]@3 f4@9 >`)
      .s("gm_oboe").gain(1.7).lpf(3000).release(.1),
    b: note(`<~@2 [[d#4@2 c#4@2 [c4 c#4] [d#4 f4] c#4@2 [d#4@6 ~ c#4]@4 [c4 c#4] [d#4 f4] d#4 
         [g#3@8 ~ d#4]@5 f4@2 d#4@2 d4 [d#4@4 ~ d#4]@3 f4@2 g4@2 d#4@3
         [~ d#4] f4@2 d#4@2 f4@2 d#4 f4@8 [~ <c#4 ~>]]!2]@104 >`).fast(1.2)
      .s("gm_distortion_guitar:2").gain(1).lpf(3000).release(.1)
}).color('purple').room(.2)
                              
drums: `<a@27 [a,b]@24 [a,b,c]@5 [a,d]@56 [a,d,e]@2 [a,d]@20 [a,d,f]@2 [a,d]@24 [a,d,g]@2 [a,d]@10 
        ~@56 [a,d]@145 ~@56 h@87 ~@8>`.pickRestart({
  a: "<bd,hh>", b: "<~ ~ sd ~>", c:"<[~ sd*2] ~@4>", d:"<~ sd>", e:"<~ [~ sd*2]>", 
  f:"<~ [[~ sd] [sd ~]]>", g:"<~ [~ sd]>", 
  h:"<[[[sd,[~ sd@15]] sd] sd]@2 [[bd sd [~ bd] sd]!24]@96 bd@8>".fast(1.2)
}).pickOut({
  bd: s('bd').lpf(800).velocity(1.1),
  sd: s('sd').velocity(.7),
  hh: s('hh').velocity(0.1).hpf(8000),
  cr: s('cr').speed(0.7).velocity(0.1).hpf(6000),
}).bank("Linn9000").room(0.2).gain(0.8).rsize(4)
