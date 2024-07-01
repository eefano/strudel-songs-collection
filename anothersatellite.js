// "Another Satellite" (work in progress)
// song @by XTC
// script @by eefano
setcps(119/60)

samples(
//{'gtr': {'g3': 'https://cdn.freesound.org/previews/253/253464_4663216-lq.mp3'}}
{'gtr': {'g3': 'https://cdn.freesound.org/previews/705/705412_11110011-lq.mp3'}}
//{'gtr': {'g3': 'https://cdn.freesound.org/previews/705/705410_11110011-lq.mp3'}}
)

const split = register('split', (deflt, callback, pat) => 
  callback(deflt.map((d,i)=>pat.withValue((v)=>Array.isArray(v)?(i<v.length?v[i]:d):(i==0?v:d)))));

gtr: "<1@4>/16".pickRestart([
  "<bb2@7 eb3>/2",
  "<[bb2@3 eb3]!2 [c#3 f#3] [e3 d3] [g2@3 f3] [bb2@3 eb3] g2@2 >/8",
]).s('gtr').begin(0.04).end(0.5).clip(1).note().gain(1).room(2)

vox: "<0@4>/16".pickRestart([`<~ d4!4 c4!4 ~ f4 ~ d4@2 c4 bb3 
     ~ d4!4 c4!4 d4!2 f4 d4!3 db4 db4@3 ab3!2 ~@3
     [db4!3]@6 db4 db4@2 d4 d4 ~ d4 ~@3
     d4@2 d4 d4@2 d4 e4 d4@3 b3 b3@2 a3 g3@2 ~
     ~ d4 d4@2 c4!3 c4@2 f4 d4@2 c4 bb3@3 ~@48
    >*2`]).s('sawtooth').lpf(3000)
  .clip(0.95).note().gain(1).room(0.4)

$: s("<hh*2>").bank("RolandMT32").gain(0.05).room(0.2)
$: s("<bd ~ ~ <bd ~>>*2").bank("RolandMT32").gain("<0.5 0.3>").room(0.2)
$: s("<[[~ ~ rim]!5]@15 ~>*2").bank("RolandMT32").gain(0.3).room(0.2)

