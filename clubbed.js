// "Clubbed"
// @by eefano
setcps(162/60/3)
const standardtuning = [40,45,50,55,59,64];
const fingering = 
{A:"x:0:2:2:2:0",Am:"x:0:2:2:1:0",A7:"x:0:2:0:2:0",D:"x:0:0:2:3:2",Dm:"x:0:0:2:3:1",D7:"x:0:0:2:1:2",
 E:"0:2:2:1:0:0",Em:"0:2:2:0:0:0",E7:"0:2:2:1:3:0",G7:"3:2:0:0:0:1",C:"x:3:2:0:1:0",
};
const strumming = 
{d: "<[1,3,4]*8>/3", u:"<[2,4,5]*8>/3"
};
const gString = register('gString', (n, pat) => 
  (pat.fmap((v) => { if(v[n]=='x') return note(0).velocity(0);
      return note(v[n]+standardtuning[n]); } 
  ).innerJoin()));
const guitar = (strums,fingers,tuning=standardtuning) =>
  (strums.pickRestart(strumming).pickOut(
    [fingers.pickOut(fingering).gString(0),fingers.pickOut(fingering).gString(1),fingers.pickOut(fingering).gString(2)
    ,fingers.pickOut(fingering).gString(3),fingers.pickOut(fingering).gString(4),fingers.pickOut(fingering).gString(5)]));

guy: "<0@2 1 0 1 0>/24".pickRestart(["<Am Dm>/4","<Em G7>/4"]).layer(
  x=>guitar("<u d>/3",x).s("gm_electric_guitar_clean:2").clip(0.5).release(0.1).gain(0.9).room(0.2).layer(p=>p.pan(1),p=>p.pan(0).late(.01)),
  x=>chord(x).anchor("g5").voicing().s("gm_percussive_organ").gain(0.8).mask("<~@3 1@6 ~@3>/12").room(.4)
    )

drm: "<~ 0 [0,1]@6 [1,2]@4 [0,1]@8 1@3 ~ >/6".pick([
     s("<[~ hh]*2>"),
     s("<bd sd [bd [~ bd]] sd [bd <~ bd>] [[sd bd] ~]>*2"),
     s("<oh:2*8>")
  ]).bank("RolandTR808").room(1).lpf(1800).gain(3.5)

