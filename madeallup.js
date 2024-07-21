// "Made All Up (wip)"
// song @by Cardiacs
// script @by eefano
const split = register('split', (deflt, callback, pat) => callback(deflt.map((d,i)=> pat.withValue((v)=>{
  const isobj = v.value !== undefined; const value = isobj ? v.value : v;
  const result = Array.isArray(value)?(i<value.length?value[i]:d):(i==0?value:d);
  return (i==0 && isobj) ? {...v,value:result} : result; }))));
setCps(138/60)
const sequence = "<a@38 b@38 c@48 d@16 e@30 a@38 b@38 c@48 d@16 e@18 e@30>";
orch: sequence.pickRestart({
  a: `<C!2 [C B] B [B D] D!2          F!2 [F C] C [C D#] D#     A#!2 [A# F] F!2  D#!2 [D# A#] A# F!2 
       G#!2 [G# D#] [D#@3 F]@2 F C   G!2 [G D] [D@3 E]@2 E B>`,
  b: `<C#!2 [C# Fm] Fm [Fm A#] A# D#  F#!2 [F# C#] C# [C# E] E  B!2 [B F#] F#!2  E!2 [E B] B F#!2 
       A!2 [A E] [E@3 F#]@2 F# C#    G#!2 [G# D#] [D#@3 F]@2 F C>`,
  c: `<E@6 B!2>`,
  d: `<D#@6 G#m!2 E@6 B!2 >`,
  e: `<[F# D A]@6 [[[C#:1 ~]!2 [C#:1:-2 ~]!2 [C#:1:-4 ~]!2]!4]@24>`
}).split([0,0,0],t=>stack(
 
  chord(t[0])
  .anchor(sequence.pickRestart(
    {a:"<b4@7 b4@6 b4@5 c5@6 d5@7 c#5@7>",
     b:"<c5@7 c5@6 c5@5 c#5@6 d#5@7 d5@7>",
     c:"<c4>",d:"<c4>",e:"<g5>"
    })).voicing().s("gm_piano").room(.4).gain(.9).color('yellow')
  .superimpose(x=>x.late(0.1).attack(.1).velocity(.7).pan(.2)), 

  n(t[1].pickRestart(["<0>/8","<[0 ~]>"])).chord(t[0]).mode('root').anchor('e2').voicing()
  .transpose(t[2]).s("gm_electric_bass_finger").lpf(200).gain(1.4).color('cyan')
).rsize(4)
)
const choirline = note(`<c4@2 c4!3 b3 b3@2 b3 a3 [a3!2]@4
                   [c4!2]@4 c4!2 c4@2 c4 d#4 d#4@2
                   [f4!2]@4 f4 c4 [c4!2]@4
                   d#4@2 f4@2 f4 c4 c4@2 a#3@2 d#4@10 ~@20>*2`);
const mode1 = x => x.adsr([0,.1,.8,0]).clip("0.92")
  .superimpose(x=>x.transpose(12).velocity(.8).speed(1.002).pan(.4),
               x=>x.transpose(24).velocity(.4).speed(.998).pan(.6));
const mode2 = x => x.attack(.04).release(.02).clip("0.85");
choir: sequence.pickRestart({
  a: mode1(choirline),
  b: mode1(choirline.transpose(1)),
  c: mode2(note(`<~ b4@2 g#4@2 a#4@2 f#4 ~ g#4@2 a#4@2 b4@2 d#5
       ~ f#5@2 a#4@2 e5@2 d#5 ~ c#5@2 b4@2 a#4@2 ~>`)),
  d: mode2(note(`<~ a#4@2 g4@2 c5@2 b4 ~ a#4@2 f#4@2 g#4@2 ~>`)),
  e: mode2(note(`<~ c#5@2 d5@2 c#5@8 ~@18 >`))
}).s("triangle").gain(0.9).lpf(5000).color('magenta').room(.5).rsize(4)//.pdec("<0@23 1@15>")
  
const tricky = "<0@7 0@6 0@4 0 0@6 0@7 0@7>"
    .pickRestart(["<cr,<bd [sd@3 sd] [bd bd] sd [bd bd] [sd bd] sd>>"]);
drums: sequence.pickRestart({
  a: tricky, 
  b: tricky,
  c:"<cr/16,rd,<[<bd ~> <~ bd>] sd>>",
  d:"<cr/16,rd,<[<bd ~> <~ bd>] sd>>",
  e:"<[rd!3]@6 sd!22 sd*4@2>"  
}).pickOut({
  bd: s('bd').lpf(800).velocity(1.1),
  sd: s('sd').velocity(.7),
  rd: s('rd').velocity(0.3).hpf(8000),
  cr: s('cr').speed(0.7).velocity(0.1).hpf(6000),
}).bank("Linn9000").room(0.4).gain(0.5).rsize(4)
