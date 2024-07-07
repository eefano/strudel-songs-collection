// "Pyramid Song" (wip)
// song @by Radiohead
// script @by eefano
setcps(104/60/4)
const split = register('split', (deflt, callback, pat) => callback(deflt.map((d,i)=> pat.withValue((v)=>{
  const isobj = v.value !== undefined; const value = isobj ? v.value : v;
  const result = Array.isArray(value)?(i<value.length?value[i]:d):(i==0?value:d);
  return (i==0 && isobj) ? {...v,value:result} : result; }))));

let chr = {X:"f#2,c#3,a#3,c#4,f#4", Y:"g2,d3,b3,d4,f#4", Z:"a2,e3,a3,c#4,f#4", J:"g2,d3,b3,d4,g4", K:"f#2,c#3,a#3,c#4,g4",
           V:"f#2,c#3,a3,c#4,f#4", W:"e2,b2,g#3,b3,f#4"}

piano: "<[i1 i2 i3 i4] ooooh [v1 v2]!4 ooooh@2 [v1 v2]!3 [v1 v3] [v3 v2] [i1 i2 i3 i2] [i3 i2 i3 i2] end>/8".pickRestart(
 {i1:`<[[X:.6 X:.8]@3 Y:.5@2 [Z:.5 Z:.5]@3]>/2`, i2: `<[[Z:.4 Y:.4]@3 Y:.3@2 [J:.6 J:.9]@3]>/2`, 
  i3:`<[[K:.8 X:.6]@3 Y:.5@2 [Z:.5 Z:.5]@3]>/2`, i4: `<[[Z:.4 Y:.4]@3 Y:.4@2 [Y:.4 Y:.7]@3]>/2`,
  ooooh:`<[[X X]@3 Y@2 [Z Z]@3] [[Z Y]@3 Y@2 [X X]@3] [[X X]@3 Y@2 [Z Z]@3] [[Z Y]@3 Y@2 [Y Y]@3]>/2`,
  v1:`<[[X X]@3 Y@2 [Z Z]@3] [[Z Y]@3 Y@2 [X X]@3]>/2`,
  v2:`<[[V V]@3 W@2 [W W]@3] [[Y Y]@3 Y@2 [Y Y]@3]>/2`,
  v3:`<[[V V]@3 W@2 [W W]@3] [[Y Y]@3 X@2 [X X]@3]>/2`,
  end:`<X:1>/4`, 
 }).split([0,.5],(x)=>x[0].pickOut(chr).velocity(x[1])).note().piano().gain(0.8).attack(0.02).room(.6)

ooooh: "<~ 0 ~@4 0@2 ~@8>/8".pickRestart([
  "<f#5@11 e5:-2 g#5:4 e5:-4 [f#5:2 ~] [~ g#5 e5] f#5@4 g#5 f#5 e5 d5 c#5@5 ~@3>*4"
  ]).split([0,0],(x)=>x[0].penv(x[1])).patt(0.04).s("triangle").attack(.08).release(.08).note().vmod(.1).vib(5).gain(0.3).lpf(2000).room(1.5)

$: s("<rd*4>").bank('RolandMT32').gain(0.3).hpf(8000).hush()
