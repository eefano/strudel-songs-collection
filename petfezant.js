// "Pet Fezant" (work in progress)
// song @by Cardiacs
// script @by eefano
setcpm(137)
const standardtuning = [40,45,50,55,59,64];
const fingering = {C:"x:3:2:0:1:0",B:"x:2:4:4:4:2",G:"3:2:0:0:0:3",E:"0:2:2:1:0:0",D:"x:0:0:2:3:2"};
const sk = 80, sh = silence, strumming = 
{d: stack(0,timeCat([1,sh],[sk,1]),timeCat([2,sh],[sk,2]),timeCat([3,sh],[sk,3]),timeCat([4,sh],[sk,4]),timeCat([5,sh],[sk,5]))
,u: stack(5,timeCat([1,sh],[sk,4]),timeCat([2,sh],[sk,3]),timeCat([3,sh],[sk,2]),timeCat([4,sh],[sk,1]),timeCat([5,sh],[sk,0]))};
const gString = register('gString', (n, pat) =>  (pat.fmap((v) => { if(v[n]=='x') return note(0).velocity(0);
      return note(v[n]+standardtuning[n]); }  ).innerJoin()));
const guitar = (strums,fingers,tuning=standardtuning) => (strums.pickRestart(strumming).pickOut(
    [fingers.pickOut(fingering).gString(0),fingers.pickOut(fingering).gString(1),fingers.pickOut(fingering).gString(2)
    ,fingers.pickOut(fingering).gString(3),fingers.pickOut(fingering).gString(4),fingers.pickOut(fingering).gString(5)]));

const chracc = "<0@5 1@30 1@30 2@33 3@30 4@28>".pickRestart([ 
  "<B@3:1 G@2:1>",
  "<D@3 E@3 D@2:1 C@2:2 G@3:1 D@3 E@3 B@2:1 C@2:2 D@2:1 B@3 G@2>",
  "<D@3 E@3 D@2:1 C@3:2 G@3:1 D@3 E@3 B@2:1 C@4:2 D@2:1 B@2 G@3>",
  "<D@3 E@3 D@2:1 C@2:2 G@3:1 D@3 E@3 B@2:1 C@2:2 D@2:1 B@3 G@2>",
  "<D@3 E@3 D@2:1 C@2:2 G@3:1 D@3 E@2 B@3:1 C@3:2 D@2:1 B@5 G@2>",
])
const chr = chracc.fmap(v=>Array.isArray(v)?v[0]:v)
const acc = chracc.fmap(v=>Array.isArray(v)?v[1]:0).mul(.05)

const ppat = "<0@5 1@30 1@30 1@33 1@30 1@28>/2".pickRestart([ 
`<[d _ ~]@2 d _ d u d _ d _ >`,
`<d u d u _ u d _ d _ d u d _ d u d _ d u d _ d u _ u
  d u d u _ u d _ d _ d u d _ d u d _ d u d _ d u d _ d _ d _ d u d _>`
]).fast(2)

$: guitar(ppat , chr)
  .s("gm_acoustic_guitar_steel:4").clip(1.2).release(0.1).gain(ppat.pick({d:.35,u:.20}).add(rand.mul(.05))).hpf(200).lpf(3500)

$: n("<~@5 0@30 1@30 ~@33 ~@30 ~@28>/2".pickRestart([ 
"<1 2 3 4 _ 5 2 _ 2 _ ~ ~ 4@4 5@4 2 _ 2 _ ~ ~ 1 2 3 4 _ 5 2 _ 2 _ ~ ~ 5b@4 5 4 3 0@3 -1@4 2@3 ~ 2 _ _ ~>",
"<1 _ 2 4 _ 5 2 _ _ _ ~ ~ 4@4 5@4 2 _ 2 _ ~ ~ 1 2 3 4 _ 5 2 _ _ ~ ~ ~ 5b@4 5 4 3 0 0@2 -1@4 2@4 ~ ~ ~ ~>"
])).fast(2).scale("g4:major").s("gm_violin:6").hpf(400).gain(".8".add(acc)).rel(0.08)

$: n(irand(3).seg(1).slow(10).restart(chr)).chord(chr).anchor("a4").voicing()
  .s("gm_cello").gain(".9".add(acc)).pan(.48).mask("<~@5 x@30 x@30 x@33 x@30 x@28>")

$: n("[0 3]/3".restart(chr)).mode("root").chord(chr).anchor("b1").voicing()
  .s("gm_electric_bass_finger").lpf(200).gain(1.1).pan(.52).mask("<~@5 ~@30 ~@30 x@33 x@30 x@28>")

$: n(irand(6).late(4).seg(2).mask(irand(3).late(2).seg(2))).chord(chr).anchor("c6").voicing()
  .s("gm_clavinet").clip(.2).rel(.5).hpf(1500).lpf(3500).gain(".5".add(acc)).mask("<~@5 ~@30 ~@30 x@33 x@30 x@28>")

$: s("tambourine:1").gain(.8).mask("<~@5 ~@30 ~@30 x@33 x@30 x@28>")

all(x=>x.room(.7).roomsize(1.5))