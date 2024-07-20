// "Epic Biopic" version 1.0
// song @by eefano
const split = register('split', (deflt, callback, pat) => callback(deflt.map((d,i)=> pat.withValue((v)=>{
  const isobj = v.value !== undefined; const value = isobj ? v.value : v;
  const result = Array.isArray(value)?(i<value.length?value[i]:d):(i==0?value:d);
  return (i==0 && isobj) ? {...v,value:result} : result; }))));
const toscale = register('toscale', (pat) => pat.withValue((v)=>
  v.endsWith('m') ? [v.substring(0,v.length-1),'minor']:[v,'major']));
setCps(1)
orch: "<~ a@2 b a@2 b c@6 d@2 a@2 b e@2 f@9 i@6 g@4 h ~>/5".pickRestart({
  a:"<B@3 Am F>", 
  b:"<F# C#@2 E@2>",
  c:"<Fm@4:1 F#@2:1 A#@4:1>",
  d:"<Fm@2:2 F@3:2 D#m:2 D@3:2 A:2>",
  e:"<A@6 ~ Cm@3:4>",
  f:"<G@2:4 B:4 F#m@2:4 A@2:4 Em@2:4 G:4 Dm:4 F@2:4 <Cm!2 [C F#]>@2:4>",
  g:"<C#@2:2 Dm@2:2 D#@2:2 F@3:2 C#:2 G#@4:2 A#m@2:2 F@4:2>",
  h:"<F@3 ~@2>",
  i:"<[[Fm@4:1 F#@2:1 A#@4:1]!2]@20 [Fm@2:2 F@3:2 D#m:2 D@3:2 A:2]@10>"
}).split([0,0],t=>stack(
 
  chord(t[0]).anchor('c5').voicing().s(t[1].pickOut([
    "supersaw".lpf(5000).velocity(.9),
    "triangle".velocity(.65),
    "supersaw".lpf(4800).velocity(.51).attack(.05).release(.05),
    "triangle".lpf("4000").velocity(.55)
  ])).room(.4).gain(.75).color('yellow'), 
  
  n(t[1].pickRestart([
    "<-1 [0 1]*3 0>".velocity(1.1),
    "<1 0*3>".velocity(.7).lpf(2800),
    "<[1 1*3] 2*3>","<[1 0] ~>".lpf(2500).velocity(.78)
  ])).chord(t[0]).mode('root').anchor('g2').voicing().clip(.97).s("square").color('cyan').gain(.85),

  "<~@4 a@2 b ~@2 c@4 d@2 e ~@2 ~@2 f@6 i@3 c@4 d@2 g@4 h ~>/5".pickRestart({
  a: "<~ [[5b 4 2]*2] [7 8b 7] [4 6b 4] [4 6] [[2 3] 4@7]@2 [~@3 6b*2] [6b@3 7*2] 9 >",
  b: "<9*3 11 9*3 11@2>",
  c: `<[2 1 0] [4@2 4*2] [4 ~ 0] [2@3 1 0@2] 2 [5@2 4] [2@3 1 2@2] [0 1] [2@3 1 2@2] [0@2 1]
       [9@3 7*2] [7@2 7] [9@3 7*2] [4 ~ 0] [2@3 1 0@2] [7@3 6 7@2] [6 7] [7@3 6 7@2] [6 7] [7@3 6 7@2]>`,
  d: "<[11 10] <[9 8] [9 10]> [9 8 7] [6 5 4]>",
  e: "<2@2 ~@3>",
  f: "<[[2 3] 4@2]!2 <[2] [4 3]> >".add("<0 [0,-2]>/15"),
  g: "<[9@8 9]@2 7@2 [9@8 8 9]@2 9@3 [9@2 [10 11]] 9@3 [[9 7 9]!2] [9@5 9]@2 9@4>".add("<0@14 [0,-2]@6>"),
  h: "<[11 ~]>/5".add("0,-2"),
  i: "<[2 1 0] <[4@2 4*2]!2 4> <[4 ~ 0] 2*3 2> [2@3 1 0@2] 2 [4 3 2]>".add("<[0,-2]>/15"), 
    }).scale(t[0].toscale()).s("gm_tuba").clip(.9).note().color('magenta').gain(1).room(.2)
))
drums: "<x a@2 b a@2 b [c,k]@6 d@2 a@2 b e@2 f@9 [i,k]@6 g@4 h ~>/5".pickRestart({
  a: s("<[[cr,lt]!2]@10>").lpf(2600),
  b: s("<~ [[cr,lt]!2]@4>").lpf(2600),
  c: s("<[lt ~ lt]>").lpf(200),
  d: s("<[[cr,lt]!5]@10>").lpf(2600),
  e: s("<[cr,lt]@5 [cr,lt] [lt mt*2 lt*2] lt@3>").lpf(2800),
  f: s("<[lt mt lt]!30 [lt mt*2 lt*2]!13 lt*3 [lt mt*2 lt*2]>")
        .lpf("<200@15 400@15 1000@13 1500@2>").velocity("<.9@28 1.2@2>"),
  g: s("<[mt mt*2 mt*2]>,<[[cr,lt]!3]@6 [[cr,lt]!4]@8 [[cr,lt]!3]@6>").lpf(2600).velocity(.78),
  h: s("<[[cr,lt]!2]@4 ~>").lpf(2800).velocity(.9),
  i: s("<[lt mt*2 lt*2],<~@20 [cr!3]@6 [cr!2]@4>>").lpf("<1500 1800 2400>/10").velocity(.78),
  k: s("<cr,lt>/30").lpf(2800).velocity(.45),
  x: s("<[mt mt lt] lt>").lpf("<800@2 1200@2 2400>")
}).bank("BossDR550").room(1.4).speed(.7).gain(.45)
