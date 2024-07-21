// "Made All Up (wip)"
// song @by Cardiacs
// script @by eefano
const split = register('split', (deflt, callback, pat) => callback(deflt.map((d,i)=> pat.withValue((v)=>{
  const isobj = v.value !== undefined; const value = isobj ? v.value : v;
  const result = Array.isArray(value)?(i<value.length?value[i]:d):(i==0?value:d);
  return (i==0 && isobj) ? {...v,value:result} : result; }))));
const toscale = register('toscale', (pat) => pat.withValue((v)=>
  v.endsWith('m') ? [v.substring(0,v.length-1),'minor']:[v,'major']));
setCps(138/60)
orch: "<a@38 b@38>".pickRestart({
  a: `<C!2 [C B] B [B D] D!2          F!2 [F C] C [C D#] D#     A#!2 [A# F] F!2  D#!2 [D# A#] A# F!2 
       G#!2 [G# D#] [D#@3 F]@2 F C   G!2 [G D] [D@3 E]@2 E B>`,
  b: `<C#!2 [C# Fm] Fm [Fm A#] A# D#  F#!2 [F# C#] C# [C# E] E  B!2 [B F#] F#!2  E!2 [E B] B F#!2 
       A!2 [A E] [E@3 F#]@2 F# C#    G#!2 [G# D#] [D#@3 F]@2 F C>`
}).split([0,0],t=>stack(
 
  chord(t[0]).anchor("<b4@7 b4@6 b4@5 c5@6 d5@7 c#5@7>").transpose("<0 1>/38").voicing()
  .s("gm_piano").room(.4).gain(.6).color('yellow')
  .superimpose(x=>x.late(0.1).attack(.1).velocity(.6).pan(.2)), 

  n(t[1].pickRestart(["<0>/2"])).chord(t[0]).mode('root').anchor('e2').voicing()
  .s("gm_electric_bass_finger").lpf(500).gain(1.3).color('cyan')
))
mel: "<a@76>".pickRestart({
  a: note(`<c4@2 c4!3 b3 b3@2 b3 a3 [a3!2]@4
       [c4!2]@4 a3 c4 c4@2 c4 d#4 d#4@2
       [f4!2]@4 f4 c4 [c4!2]@4
       d#4@2 f4@2 f4 c4 c4@2 a#3@2 d#4@10 ~@20>*2`).transpose("<0 1>/38")
}).s("triangle")
  .adsr([0,.1,.8,0]).clip(0.97).gain(1).lpf(5000)//.pdec("<0@23 1@15>")
  .superimpose(x=>x.transpose(12).velocity(.7).speed(1.002).pan(.4).room(.7),
               x=>x.transpose(24).velocity(.3).speed(.998).pan(.6).room(.7))
