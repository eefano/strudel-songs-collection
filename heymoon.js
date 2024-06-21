// "Hey Moon" (work in progress)
// song @by John Maus
// script @by eefano
setcps(88/60)

const split = register('split', (deflt, callback, pat) => 
  callback(deflt.map((d,i)=>pat.withValue((v)=>Array.isArray(v)?(i<v.length?v[i]:d):(i==0?v:d)))));

c: n("<~ 1 2 3>*2").chord("<F C G F>/2").anchor("<F4 C4 G4 F4>/2").voicing().s("gm_pad_warm").release(2).room(0.6).gain(0.6)

m: "<0@16>/2".pickRestart([
  "<~!14 3 1 3@2 ~@4 0 5 4 4 4 [5 3@3]@2 ~!5 [1 0] -1b 0@2 0 [0 0] ~!14 >*2",
  "<~!15 3 3@3 0 0@2 5@2 4@2 3 2 2 3 3 0 0  >*2"])
 .layer(x=>x.scale("g4:major").note().s("gm_piccolo").pan(0.4).room(1).gain(0.5),
        x=>x.scale("g2:major").note().s("supersaw").pan(0.6).room(1).gain(0.6))


$: s("<hh*2>").gain(0.3).room(1)
$: s("<bd>/2").gain(0.1).room(1)
$: s("<[~ <~!3 sd>] sd>").gain(0.3).room(1)

