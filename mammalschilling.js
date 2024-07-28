// "Mammals Chilling (wip)"
// song @by eefano
const split = register('split', (deflt, callback, pat) => callback(deflt.map((d,i)=> pat.withValue((v)=>{
  const isobj = v.value !== undefined; const value = isobj ? v.value : v;
  const result = Array.isArray(value)?(i<value.length?value[i]:d):(i==0?value:d);
  return (i==0 && isobj) ? {...v,value:result} : result; }))));
setCps(155/60)

orch: "<a@4 b@8 a@4 b@8 c@4 a@4 d@4 c@4>/10".pickRestart({
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

melo: "<~@4 ~@4 a@4 ~@12 b@4 ~@12>/10".pickRestart({
  a: `<[4 4 0] 1 0 [1 2*3] ~ [5 5] 6 2 [5 2] 5 2 ~@2 6 [2*3 ~] ~@2 6 [1*3 ~] 6*3 
       [5 4] 5 2 6 4 ~ 4 3#*2 [2 0# 2] 3# 4 3#*3 0# 3# 5*2 6*2 2 ~@3>`,
  b: `<~>`
}).scale('f4:major').note().s("gm_marimba").room(.2).velocity("<.7 .85 1>")

trom: "<~@4 ~@12 ~@4 a@4 b@4 ~@12>/10".pickRestart({
  a: `<~ [2 ~] [6:1 ~] [4 ~] ~ [2 ~] [5:1 ~] [6 ~] [1@4 0# 1]@3  
         [2 ~] [3# ~] ~ [3# 4] [5 ~] [6 ~] 7*2 6*2 5*2 [4 6:2@3]@2 4@3 
         ~ [4 4] [3# 3] 2 ~ [2 2] [1# 1] 0# [3# 0# 2@2]@3 0# [3# 6 5@2]@3 >`,
  b: `<~>`
}).split([0,0],t=>t[0].scale('f3:major').note().penv(t[1]).clip(.9))
  .s("gm_trombone:4").room(.2).gain(.7).color('magenta')

drums: "<[a,c]@4 [a,c,e]@8 [a,b]@4 [a,b,d]@8 a@4 [~ a]!3 [~ a,c] [a,b]@8>/10".pickRestart({
a:"<sh ~ sk sh ~ sk sh sk ~ sh sk ~ sh ~ sk sh ~ sk sh sk>*2",
b:"<~@8 [~ cw]!2>", c:"<~@8 [cw ~]!2>",
d:"<[<cm ~@3> [<cl ~>,<bd ~@7>]]>", e:"<<[[cl,<bd ~@3>]@3 <cm ~@3>]>@2>"
}).pickOut({
  sh: s("shaker_small:0").velocity(3),
  sk: s("shaker_small:1").velocity(2),
  cl: s("clave").velocity(8),
  cm: s("clave").velocity(5).speed(.95),
  cw: s("cowbell").velocity(1.2).pan("<.2 .8>/10"),
  bd: s("bongo:3").velocity(5)
}).room(0.2).gain(1)
