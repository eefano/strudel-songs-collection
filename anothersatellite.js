// "Another Satellite" (work in progress)
// song @by XTC
// script @by eefano
setcps(119/60)
samples({'gtr': {'g3': 'https://cdn.freesound.org/previews/705/705412_11110011-lq.mp3'}})
const split = register('split', (deflt, callback, pat) => 
  callback(deflt.map((d,i)=>pat.withValue((v)=>Array.isArray(v)?(i<v.length?v[i]:d):(i==0?v:d)))));

gtr: "<0:.6@2 1:.6@8 2@2 3@2.5 1:.6!2>/16".split([0,1],(y)=>y[0].pickRestart([
  "<bb2@7 eb3>/2",
  "<[bb2@3 eb3]!2 [c#3 f#3] [e3 d3] [g2@3 f3] [bb2@3 eb3] g2@2 >/8",
  "<a3 g3 a3 f3 g3 f3 g3 e3>/4",
  "<a3 g3 a3 f3 g3 f3 c3@4>/4"
]).s('gtr').begin(.045).end(.5).clip(1).note().gain(.9).room(2).gain(.8).velocity(y[1]))

vox: "<~@2 0:0.6@8 1 2 1 3@1.5 [4:.06,5:.06]!2>/16".split([0,1],(y)=>y[0].pickRestart([
  `<~ d4:.7!3 d4:1 c4:.7!4 ~ f4 ~ d4@2:1 c4:1 bb3 ~ d4:.7!3 d4:1 c4:.7!4 d4!2 f4 d4!2 d4:1 db4 db4@3:1 ab3 ab3@2 ~@2
  [db4!3]@6 db4 db4@2:1 d4 d4 ~ d4 ~@3 d4@2 d4 d4@2 d4 e4 d4@3 b3 b3@2:1 a3:1 g3@2 ~
  ~ d4 d4@2 c4!3 c4@2 f4 d4@2:1 c4:1 bb3@3:1 g3:1 f3@2:1 c4@4:1:4 c#4@10:1 ~@22>*2`,
  `<~@4 e4@4 e4@3 d4 db4@2:1 b3@2:1 a3@4 a4@3 a4!2 e4 e4@3:1 d4:1 c4@2>*2`,
  `<~@4 d4@4 d4@3:1 c4:1 b3@2 a3@2:1 c4@4:1:4 b3@4:1:-1 ~@4>*2`,
  `<~@4 [d4:1 e4:1 d4:1 c4:1 b3:1 a3]@12 c4:1:4@8 d4:1:2@8 a3:1:-4@8 ~@8>*2`,
  `<~ d4:.5!2 d4@2:1 c4:.5!3 c4 ~ f4 ~ d4@2:1 c4:1 bb3 ~@2 d4:0.5 d4@2:1 c4:.5 c4:1 bb3:.5 bb3@2:1 f3@2:1 c4:1:4@3 ~@2 >*2`,
  `<~ f4:.5!2 f4@2:1 eb4:.5!3 eb4 ~ bb4 ~ f4@2:1 eb4:1 d4 ~@2 f4:0.5 f4@2:1 eb4:.5 eb4:1 d4:.5 d4@2:1 bb3@2:1 eb4:1:4@3 ~@2 >*2`,
]).split([0,.9,0],(x)=>note(x[0]).clip(x[1]).penv(x[2])).patt('.2').s('sawtooth').lpf(3500).room(.5).gain(1).velocity(y[1]))

$: s("<hh*2>").bank("RolandMT32").gain(.05).room(.2)
$: s("<bd ~ ~ <bd ~>>*2").bank("RolandMT32").gain("<0.4 0.2>").room(.2)
$: s("<[[~ ~ rim]!5]@15 ~>*2").bank("RolandMT32").gain(.2).room(.2)

