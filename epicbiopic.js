// "Epic Biopic (work in progress)"
// song @by eefano
const split = register('split', (deflt, callback, pat) => callback(deflt.map((d,i)=> pat.withValue((v)=>{
  const isobj = v.value !== undefined; const value = isobj ? v.value : v;
  const result = Array.isArray(value)?(i<value.length?value[i]:d):(i==0?value:d);
  return (i==0 && isobj) ? {...v,value:result} : result; }))));

setCps(1)
orch: "<a@2 b a@2 b c@6 d@2 a@2 b e@2 f@6 i@8 g@4 h ~>/5".layer(
l=>l.pickRestart({
  a:"<B@3 Am F>", 
  b:"<F# C#@2 E@2>",
  c:"<Fm@4:1 F#@2:1 A#@4:1>",
  d:"<Fm@2:2 F@3:2 D#m:2 D@3:2 A:2>",
  e:"<A@6 ~ Cm@3:4>",
  f:"<G@2:4 B:4 F#m@2:4 A@2:4 Em@2:4 G:4 Dm:4 F@2:4 <[Cm:4] ~>@2>",
  g:"<C#@2:2 Dm@2:2 D#@2:2 F@3:2 C#:2 G#@4:2 A#m@2:2 F@4:2 >",
  h:"<F@3 ~@2>",
  i:"<[[Fm@4:1 F#@2:1 A#@4:1]!3]@30 [Fm@2:2 F@3:2 D#m:2 D@3:2 A:2]@10>"
}).split([0,0],t=>stack(
 chord(t[0]).anchor('c5').voicing()
  .s(t[1].pickOut(["sawtooth".gain(.8),"triangle".hpf(400).gain(.6),"supersaw".gain(.40).attack(.05).release(.05),
       "triangle".lpf("4000").gain(.6)])).room(.4), 
 n(t[1].pickRestart(["<-1 [0 1]*3 0>","<1 0*3>".gain(.7).lpf(3000),"<[1 1*3] 2*3>","<[1 0] ~>".lpf(2500).gain(.8)]))
           .chord(t[0]).mode('root').anchor('g2').voicing().s("square").color('cyan'),
)),
l=>l.pickRestart({
    a:s("<[[cr,lt]!2]@10>").lpf(2800).velocity(1),
    b:s("<~ [[cr,lt]!2]@4>").lpf(2800).velocity(1),
    c:s("<[lt ~ lt]>").lpf(200).velocity(.9),
    d:s("<[[cr,lt]!5]@10>").lpf(2800).velocity(1),
    e:s("<[cr,lt]@5 [cr,lt] [lt mt*2 lt*2] lt@3>").lpf(2800).velocity(1),
    f:s("<[lt mt lt]>").lpf(200).velocity(.9),
    g:s("<[mt [mt mt] mt*2]>,<[cr!3]@6 [cr!2]@8 [cr!2]@4>").lpf(2500).velocity("<.7 .75 .8 .85!7>/2"),
    h:s("<[[cr,lt]!2]@4 ~>").lpf(2800).velocity(1),
    i:s("<[lt mt*2 lt*2]>").lpf("<1500 1800 2200 2500>/10").velocity(.6),
  }).bank("BossDR550").room(1.4).speed(.7).gain(.6).color("yellow")
)
