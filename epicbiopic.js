// "Epic Biopic (work in progress)"
// song @by eefano
const split = register('split', (deflt, callback, pat) => callback(deflt.map((d,i)=> pat.withValue((v)=>{
  const isobj = v.value !== undefined; const value = isobj ? v.value : v;
  const result = Array.isArray(value)?(i<value.length?value[i]:d):(i==0?value:d);
  return (i==0 && isobj) ? {...v,value:result} : result; }))));

setCps(1)
orch: "<a@2 b a@2 b c@6 d@2>/5".layer(
l=>l.pickRestart({
  a:"<B@3 Am F>", 
  b:"<F# C#@2 E@2>",
  c:"<Fm@4:1 F#@2:1 A#@4:1>",
  d:"<Fm@2:2 F@3:3 D#m:3 D@3:3 A:3>",
}).split([0,0],t=>stack(
 chord(t[0]).anchor('c5').voicing().s(t[1].pickOut(["gm_church_organ","triangle".gain(0.4),"gm_church_organ"])).room(.4),
  
 n(t[1].pickRestart(["<-1 [0 1]*3 0>","<1 0*3>".gain(0.6),"<[1 1*3] 2*3>"]))
           .chord(t[0]).mode('root').anchor('g2').voicing().s("square").color('cyan'),
)),
l=>l.pickRestart({
    a:s("<[[cr,lt]!2]@10>").lpf(3000),
    b:s("<~ [[cr,lt]!2]@4>").lpf(3000),
    c:s("<[lt ~ lt]>").lpf(200).velocity(.9),
    d:s("<[cr,lt]>/2").lpf(3000),    
  }).bank("BossDR550").room(1.5).speed(.8).gain(0.7)
)
        