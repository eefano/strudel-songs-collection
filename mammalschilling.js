// "Mammals Chilling (wip)"
// song @by eefano
const split = register('split', (deflt, callback, pat) => callback(deflt.map((d,i)=> pat.withValue((v)=>{
  const isobj = v.value !== undefined; const value = isobj ? v.value : v;
  const result = Array.isArray(value)?(i<value.length?value[i]:d):(i==0?value:d);
  return (i==0 && isobj) ? {...v,value:result} : result; }))));
setCps(155/60)

orch: "<a b@2 a [b@11 ~]@2 c e d c>/40".pickRestart({
  a: "<<F:f3:h D7:g3:i> ~>/5",
  b: "<F:f3:h@8 Em7:b3:i@12 C:f3:i@8 D7:g3:h@12>",
  c: "<Bm7:b3:j@8 Em7:b3:k@8 F:g3:j@8 C:f3:k@8 G7:b3:j@4 G7:b3:l@4>".velocity(1.4),
  d: "<Bm7:b3:j@8 Em7:b3:k@8 F:g3:k@8 C:f3:k@8 D7:f3:j@8 >".velocity(1.6),
  e: "<<F:f3:h Em7:b3:i C:f3:h D7:g3:i> ~>/5".velocity(1.3),
}).split([0,0,0],s=>stack(
   n(s[2].pickRestart({
     h:"<~ [<0@2 2 1>@3 ~]>*2", i:"<~ [<3@2 0 1>@3]>*2",
     j:"<0 2>/2", k:"<1 <0 2>>/2", l:"<2 ~>/8"
  })).chord(s[0]).anchor(s[1].transpose(-22)).mode('above').voicing()
    .s("gm_pizzicato_strings:4").gain(1.35).color('green'),

   n(s[2].pickRestart(
     {h:"<[[0,[~ 1@40],[~@2 2@40],[~@3 3@40]] ~@2]>/2",
      i:"<[[3,[~ 2@40],[~@2 1@40],[~@3 0@40]] ~@2]>/2",
      j:"<[[~ 0@3],[~@1 1@3],[~@2 <2 3>@2],[~@3 <3 2>]]>/2",
      k:"<[[~ 3@3],[~@1 2@3],[~@2 <1 0>@2],[~@3 <0 1>]]>/2",
      l:"<[[1,[~ 2@30],[~@2 3@30],[~ 0]]]>/4"}))
  .chord(s[0]).anchor(s[1]).mode('above').voicing()
    .s("gm_acoustic_guitar_nylon").gain(.65).color('yellow')
)).room(.2)

melo: "<~ a b ~@2 c d e ~ d>/40".pickRestart({
  a: n(`<~ 4 0 ~ 1 0 ~ 1 2*3 ~@2 5 5 6 ~ 2 ~ 5 2 5 ~ 2 ~@5 6 ~ 2*3 ~@5 6 ~ 1*3 ~ [6*3]@2 
      5 4 5 ~ 2 ~ 6 ~ 4 ~@3 4 ~ 3#!2 [2 0# 2]@2 3# ~ 4 ~ 3#!2 0# ~ 3# ~ 5!2 6!2 2 ~@6>*2`).late(.1),
  b: n(`<~@4 2 ~ 3# ~ 4 ~@7 3# ~@5 7 ~ 8 ~@15 9*2 8 ~@14 8*2 6 ~@10 [4*3]@4 ~@6>*2`),
  c: n(`<7 [9 13 12@2]@3 ~@2 [9 12 13 9 8 6]@4 ~@8 [9 12 13 9 8 6]@4 ~@8 [6 8 9 13 12 9]@4 ~@6>`),
  d: n(`< ~ [~ 2] [~ 5] [~ 3#] ~@5 [~ 6] [~ 7] [~ 8] ~@8 [9*2 8] ~@7 [8*2 6] 
       ~@3 8*2 9*3 10#*4 9*5 6*3 6*4 5*5 ~>`),
  e: n(`<~@10 12 12 13 ~ 9 ~ 12 9 12 ~ ~@32 [9 12 13 9 8 6]@8 ~@100>*2`).velocity(.5).pan(.3)
}).scale('f4:major').s("gm_marimba").room(.2).gain("<.6 .75 .9>").color('cyan')

trom: "<~@2 b ~ a c d e ~ d>/40".pickRestart({
  a: `<~ [2 ~] [6:1 ~] [4 ~] ~ [2 ~] [5:1 ~] [6 ~] [1@4 0# 1]@3  
         [2 ~] [3# ~] ~ [3# 4] [5 ~] [6 ~] 7*2 6*2 5*2 [4 6:2@3]@2 4@3 
         ~ 4*2 [3# 3] 2 ~ 2*2 [1# 1] 0# [3# 0# 2@2]@3 0# [3# 6 5@2]@3 >`.clip(.9),
  b: `< ~ 2:3@5 6 ~ 4 ~ ~@4 2:3@2 1@6 9:1 ~ 8 ~ ~@6 9:1 8 ~@14 8:1 6 ~@10 [[0# ~]*3]@4 ~@20>*2`.clip(.9),
  c: `<~@10 [[[-2 ~] [1 ~] 2 [-2 ~] [3# ~] ~]!2]@8 ~@4 
            [[[3# ~] [2 ~] 1 [-1 ~] [2 ~] ~]!2]@8 ~@6 >`.clip(.9),
  d: `<[2:3@5 5]@3 [~ 3#] [~@5 2:3@2 1@6 9:1]@7 [~ 8] ~@4 [9:1 8] ~@7 [8:1 6] 
       ~@7 1 2 3# 2:2 -1 ~ -2 ~>`.clip(.9),
  e: `<~@30 0!2 -1!2 -2!2 -3 -1:2@3 -3@2 ~@10 [2 -2 -1 2 1 -1]@8 ~@100 >*2`.velocity(.5).pan(.7).clip(.4)
}).split([0,0],t=>n(t[0]).scale('f3:major').penv(t[1]))
  .s("gm_trombone:4").room(.2).gain(.9).color('magenta')

drums: `<[a,c]@4 [a,c,e]@7 [a,c,e,f] [v,a,b]@4 [[a,b,d]@11 g]@8 [v,a]@4 [~ a]!3 [~ h] [a,k]@4 a@4>/10`
.pickRestart({
  a:"<sh ~ sk sh ~ sk sh sk ~ sh sk ~ sh ~ sk sh ~ sk sh sk>*2",
  b:"<~@8 [~ cw]!2>", c:"<~@8 [cw ~]!2>",
  d:"<[<cm ~@3> [<cl ~>,<bd ~@7>]]>", e:"<<[<~ cl>@3 <cm,<~ bd> ~@3>]>@2>",
  f:"<~@6 [[cj*3]!2]@4>",g:"<[~ cj!6 wh@5]@8>", h:"<cj*2 cl*2 ~ wx*2 vi>",
  k:"<se@8 ~@2>",v:"<vi@40>"
}).pickOut({
  sh: s("shaker_small:0").velocity(3), sk: s("shaker_small:1").velocity(2),
  cl: s("clave").velocity(7),          cm: s("clave").velocity(4).speed(.95),
  bd: s("bongo:3").velocity(5),        cj: s("agogo").velocity(7),
  cw: s("cowbell").velocity(1.2).pan("<.2 .8>/10"),
  wh: s("ballwhistle"), wx: s("ballwhistle:1"),
  vi: s("vibraslap").velocity(.9),
  se: s("brown").adsr([1,0,1,1]).speed("<1.4 1.5>/10").pan("<.4 .6>/10")
}).room(.2).gain(1)
