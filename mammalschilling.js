// "Mammals Chilling (wip)"
// song @by eefano
const split = register('split', (deflt, callback, pat) => callback(deflt.map((d,i)=> pat.withValue((v)=>{
  const isobj = v.value !== undefined; const value = isobj ? v.value : v;
  const result = Array.isArray(value)?(i<value.length?value[i]:d):(i==0?value:d);
  return (i==0 && isobj) ? {...v,value:result} : result; }))));
setCps(155/60)

orch: "<a@4 b@8 a@4 [b@11 ~]@8 c@4 a@4 d@4 c@4>/10".pickRestart({
  a: "<<F:f3:h D7:g3:i> ~>/5",
  b: "<F:f3:h@8 Em7:b3:i@12 C:f3:i@8 D7:g3:h@12>",
  c: "<Bm7:b3:j@8 Em7:b3:k@8 F:g3:j@8 C:f3:k@8 G7:b3:j@4 G7:b3:l@4>",
  d: "<Bm7:b3:j@8 Em7:b3:k@8 F:g3:k@8 C:f3:k@8 D7:f3:j@8 >",
}).split([0,0,0],s=>stack(
   n(s[2].pickRestart({
     h:"<~ [<0@2 2 1>@3 ~]>*2", i:"<~ [<3@2 0 1>@3]>*2",
     j:"<0 2>/2", k:"<1 <0 2>>/2", l:"<2 ~>/8"
  })).chord(s[0]).anchor(s[1].transpose(-22)).mode('above').voicing()
    .s("gm_pizzicato_strings:4").gain(1.2).color('green'),

   n(s[2].pickRestart(
     {h:"<[[0,[~ 1@40],[~@2 2@40],[~@3 3@40]] ~@2]>/2",
      i:"<[[3,[~ 2@40],[~@2 1@40],[~@3 0@40]] ~@2]>/2",
      j:"<[[~ 0@3],[~@1 1@3],[~@2 <2 3>@2],[~@3 <3 2>]]>/2",
      k:"<[[~ 3@3],[~@1 2@3],[~@2 <1 0>@2],[~@3 <0 1>]]>/2",
      l:"<[[1,[~ 2@30],[~@2 3@30],[~ 0]]]>/4"}))
  .chord(s[0]).anchor(s[1]).mode('above').voicing()
    .s("gm_acoustic_guitar_nylon").gain(0.6).color('yellow')
)).room(.2)

melo: "<~@4 a@4 b@4 ~@8 c@4 d@4 ~@8 d@4>/10".pickRestart({
  a: `<[4 4 0] 1 0 [1 2*3] ~ [5 5] 6 2 [5 2] 5 2 ~@2 6 [2*3 ~] ~@2 6 [1*3 ~] 6*3 
       [5 4] 5 2 6 4 ~ 4 3#*2 [2 0# 2] 3# 4 3#*3 0# 3# 5*2 6*2 2 ~@3>`,
  b: `<4 ~ 2 3# 5 ~@3 3# ~@2 6# 8 ~@7 [9*2 8] ~@7 [8*2 6] ~@5 [4*3]@2 ~@1000>`,
  c: `<7 [9 13 12@2]@3 ~@2 [9 12 13 9 8 6]@4 ~@8 [9 12 13 9 8 6]@4 ~@8 [6 8 9 13 12 9]@4 ~@1000>`,
  d:  `< ~ [~ 2] [~ 6] [~ 4] ~@5 [~ 6] [~ 6#] [~ 8] ~@8 [9*2 8] ~@7 [8*2 6] ~@3 8*2 9*3 10#*4 9*5 6*3 6*4 5*5 ~>`,
}).scale('f4:major').note().s("gm_marimba").room(.2).velocity("<.7 .85 1>").color('cyan')

trom: "<~@4 ~@4 b@4 ~@4 a@4 c@4 d@4 ~@8 d@4>/10".pickRestart({
  a: `<~ [2 ~] [6:1 ~] [4 ~] ~ [2 ~] [5:1 ~] [6 ~] [1@4 0# 1]@3  
         [2 ~] [3# ~] ~ [3# 4] [5 ~] [6 ~] 7*2 6*2 5*2 [4 6:2@3]@2 4@3 
         ~ [4 4] [3# 3] 2 ~ [2 2] [1# 1] 0# [3# 0# 2@2]@3 0# [3# 6 5@2]@3 >`,
  b: `< 2:3@3 [6 ~] [4 ~] ~@2 2:3 1@3 [9:1 ~] [8 ~] ~@3 [9:1 8] ~@7 [8:1 6] ~@5 [[0# ~]*3]@2 ~@1000>`,
  c: `<~@10 [[[-2 ~] [1 ~] [2] [-2 ~] [3# ~] ~]!2]@8 ~@4 
            [[[3# ~] [2 ~] [1] [-1 ~] [2 ~] ~]!2]@8 ~@1000 >`,
  d: `<[2:3@5 6]@3 [~ 4] [~@5 2:3@2 1@6 9:1]@7 [~ 8] ~@4 [9:1 8] ~@7 [8:1 6] 
       ~@7 1 2 3# 2:2 -1 ~ -2 ~>`
}).split([0,0],t=>t[0].scale('f3:major').note().penv(t[1]).clip(.9))
  .s("gm_trombone:4").room(.2).gain(.7).color('magenta')

drums: `<[a,c]@4 [a,c,e]@7 [a,c,e,f] [a,b]@4 [[[a,b,d]@11 g]]@8 a@4 
         [~ a]!3 [~ h] [a,b,c,d,e,f,k]@4 a@4>/10`.pickRestart({
a:"<sh ~ sk sh ~ sk sh sk ~ sh sk ~ sh ~ sk sh ~ sk sh sk>*2",
b:"<~@8 [~ cw]!2>", c:"<~@8 [cw ~]!2>",
d:"<[<cm ~@3> [<cl ~>,<bd ~@7>]]>", e:"<<[[cl,<bd ~@3>]@3 <cm ~@3>]>@2>",
f:"<~@6 [[cj*3]!2]@4>",g:"<[~ cj!6 ~ wh@4]@8>", h:"<cj*2 cl*2 cw*2 cm*2 wx*2>",
k:"<se@40>"
}).pickOut({
  sh: s("shaker_small:0").velocity(3),
  sk: s("shaker_small:1").velocity(2),
  cl: s("clave").velocity(8),
  cm: s("clave").velocity(5).speed(.95),
  cw: s("cowbell").velocity(1.2).pan("<.2 .8>/10"),
  bd: s("bongo:3").velocity(5),
  cj: s("agogo").velocity(7),
  wh: s("ballwhistle"), wx: s("ballwhistle:1"),
  se: s("gm_seashore").attack(.5).release(.5).speed(1.4).velocity(1.3)
}).room(0.2).gain(1)
