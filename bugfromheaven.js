// "Bug From Heaven (wip)"
// song @by Tim Smith
// script @by eefano
setcps(91/60/2)
const standardtuning = [40,45,50,55,59,64];
const fingering = 
{A:"x:0:2:2:2:0",Am:"x:0:2:2:1:0",A7:"x:0:2:0:2:0",D:"x:0:0:2:3:2",Dm:"x:0:0:2:3:1",D7:"x:0:0:2:1:2",
 E:"0:2:2:1:0:0",Em:"0:2:2:0:0:0",E7:"0:2:2:1:3:0",G7:"3:2:0:0:0:1",C:"x:3:2:0:1:0",
};
const strumming = 
{u:"<[[1,[~ 2@10],4]@2 ~]!2 [1,3,5]>*3", 
 v:"<[[0,[~ 3@10],5]@2 ~]!2 [0,2,4]>*3", 
 w:"<[[1,[~ 2@10],4]@2 ~]!2 [1,2,3]>*3", 
 x:"<[1,[~ 2@50],[~ ~ 4@50]]>"
};
const gString = register('gString', (n, pat) => 
  (pat.fmap((v) => { if(v[n]=='x') return note(0).velocity(0);
      return note(v[n]+standardtuning[n]); } 
  ).innerJoin()));
const guitar = (strums,fingers,tuning=standardtuning) =>
  (strums.pickRestart(strumming).pickOut(
    [fingers.pickOut(fingering).gString(0),fingers.pickOut(fingering).gString(1),fingers.pickOut(fingering).gString(2)
    ,fingers.pickOut(fingering).gString(3),fingers.pickOut(fingering).gString(4),fingers.pickOut(fingering).gString(5)]));
const split = register('split', (deflt, callback, pat) => callback(deflt.map((d,i)=> pat.withValue((v)=>{
  const isobj = v.value !== undefined; const value = isobj ? v.value : v;
  const result = Array.isArray(value)?(i<value.length?value[i]:d):(i==0?value:d);
  return (i==0 && isobj) ? {...v,value:result} : result; }))));

guy: "<~@2 [[0 1]!2]@16 2@3>".pickRestart(["<Am:u:6 E:v:5 Am:u:4 E:v:3>","<Am:u:2 A:w:7>","<Am:u:2 E:x A:x>"])
  .split([0,0,0],s=>s[0].layer(
  x=>guitar(s[1],x).s("gm_acoustic_guitar_steel:1").release(0.1).gain(1.5).room(0.5).lpf(4000).late(1/64),
  x=>chord(x).anchor("g5").voicing().s("gm_string_ensemble_1").gain(0.2).room(1).layer(p=>p.pan(1),p=>p.pan(0).late(.1))
    ).transpose(s[2]))

drm: "< 0@2 [0,1]@17 ~@2>".pick([
     s("<rd>*2"),
     s("<bd sd>*2")
  ]).bank("BossDR110").room(1).lpf(1800).gain(1.1)

uff: "<[gm_acoustic_guitar_steel:1,gm_string_ensemble_1] ~@1000>".gain(0)