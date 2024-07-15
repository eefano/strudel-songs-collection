// "Bug From Heaven (wip)"
// song @by Tim Smith
// script @by eefano
setcps(108/60/2)
const standardtuning = [40,45,50,55,59,64];
const fingering = 
{A:"0:0:2:2:2:0",Am:"0:0:2:2:1:0",A7:"x:0:2:0:2:0",D:"x:0:0:2:3:2",Dm:"x:0:0:2:3:1",D7:"x:0:0:2:1:2",
 E:"0:2:2:1:0:0",Em:"0:2:2:0:0:0",E7:"0:2:2:1:3:0",G7:"3:2:0:0:0:1",C:"x:3:2:0:1:0",
 // guitar only chords
 Dx:"x:0:0:2:3:2",Ds:"x:0:0:1:3:0",
 Ax:"0:0:2:2:2:0",Amx:"0:0:2:2:1:0",
 Ex:"0:2:2:1:0:0",Emx:"0:2:2:0:0:0",
};
const gstrum = 
{u:"<[[1,[~ 3@10],4]@2 ~]!2 [1,4,5]>*3", 
 v:"<[[0,[~ 3@10],5]@2 ~]!2 [0,3,4]>*3", 
 w:"<[[1,[~ 3@10],4]@2 ~]!2 [1,2,3]>*3", 
 x:"<[1,[~ 2@50],[~ ~ 4@50]] ~@3>/4",
 z:"<[[3,4,5] ~]*2>", 
 k:"<[[2,3,4] ~]*2>",
 n:"~"
};
const bstrum = {u:"<[1 2]>", v:"<[2 1]>", w:"<[1 0]>", x:"~", z:"~", k:"~", n:"0"};

const gString = register('gString', (n, pat) => 
  (pat.fmap((v) => { if(v[n]=='x') return note(0).velocity(0);
      return note(v[n]+standardtuning[n]); } 
  ).innerJoin()));
const guitar = (strums,fingers,tuning=standardtuning) => (strums.pickOut(
    [fingers.pickOut(fingering).gString(0),fingers.pickOut(fingering).gString(1),fingers.pickOut(fingering).gString(2)
    ,fingers.pickOut(fingering).gString(3),fingers.pickOut(fingering).gString(4),fingers.pickOut(fingering).gString(5)]));
const split = register('split', (deflt, callback, pat) => callback(deflt.map((d,i)=> pat.withValue((v)=>{
  const isobj = v.value !== undefined; const value = isobj ? v.value : v;
  const result = Array.isArray(value)?(i<value.length?value[i]:d):(i==0?value:d);
  return (i==0 && isobj) ? {...v,value:result} : result; }))));

gtr: "<~@2 [[0 1]!2]@16 2@3 3@13 4@3 3@4 5@2 3@13 4@3 3@4 5@2 3@4 3@2 6@11 3@4 5@2 3@13 4@3 3@4 5@2 3@4 3@2 6@11 3@4 5@2 7@8 [[0 1]!2]@16 8@5>"
  .pickRestart([
  "<Am:u:6 E:v:5 Am:u:4 E:v:3>","<Am:u:2 A:w:7>","<Am:u:2 E:x A:x>",
  "<Dx:z Ds:z>","<Ax:z Emx:k:2 Ax:z:2>","<Ax:k:2 Ex:z:5>",
  "<A:n:2 E:n A:n E:n E:n:4 A:n:4 E:n:2 E:n:6 A:n:6 A:n:11 E:n:9>",
  "<E:k:2!3 A:k:1 E:k:5!3 A:k:2 >",/* 157 */"<Am:u:2 E:x@2 ~@2>"
  ]).split([0,0,0],s=>s[0].layer(
  x=>guitar(s[1].pick(gstrum),x).s("gm_acoustic_guitar_steel:1").release(.1).gain(.75).room(.5).hpf(300).lpf(5000).late(1/64),
  x=>guitar(s[1].pick(bstrum),x).s("gm_pizzicato_strings:1").transpose(-12).release(.1).gain(.65).room(.6).lpf(1000),
  x=>chord(x).anchor("g5").voicing().s("gm_string_ensemble_1").gain(.15).room(1).layer(p=>p.pan(1),p=>p.pan(0).late(.1))
    ).transpose(s[2]))

vox: "<~@25 0@22 0@22 1@13 2@10 0@22 1@13 3@8 ~@30>".pickRestart([
 "<f#4@2 f#4@3 [e4!2]@6 [f#4!2]@6 g#4@19 f#4@2 f#4@3 [e4!2]@6 [f#4!2]@6 c#4@13 b3@3 f#3@13 ~@100>*6",
 /*69*/"<f#4@2 f#4@3 [e4!2]@6 [f#4!2]@6 [g#4!2]@6 [a4!2]@6 [g#4!3]@9 d#4@3 [f4!2]@6 [f#4!2]@6 [f4!2]@6 [d#4!4]@12 c#4@3 f4@3 f#4@3>*6",
 /*82*/"<f#4@2 f#4@3 [e4!2]@6 [f#4!2]@6 b3@16 c#4@3 d4@12 ~@100>*6",
 /*127*/"<f#4 e4 [d4@2 ~] e4 [f#4@2 ~] a4 f#4@2>"
]).s("sawtooth").note().attack(.05).release(.05).gain(.30).hpf(500).clip(0.95)

drm: "< 0@2 [0,1]@17 2 ~ 0@32>".pick([
     s("<rd>*2"),
     s("<~ sd>*2"),
     s("<rd>")
  ]).bank("BossDR110").room(1).lpf(1800).gain(.6)

uff: "<[gm_acoustic_guitar_steel:1,gm_string_ensemble_1,gm_pizzicato_strings:1] ~@1000>".gain(0)