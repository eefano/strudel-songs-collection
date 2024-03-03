// "Strudelwall"
// guitar prototype @by eefano
const standardtuning = [40,45,50,55,59,64];

const fingering = 
{C:"x:3:2:0:1:0",A:"x:0:2:2:2:0",G:"3:2:0:0:0:3",E:"0:2:2:1:0:0",D:"x:0:0:2:3:2"
,Am:"0:0:2:2:1:0",Em:"0:2:2:0:0:0",Dm:"x:0:0:2:3:1",Em7:"0:2:2:0:3:3", G_:"3:2:0:0:3:3"
,Dsus4:"x:x:0:2:3:3",A7sus4:"x:0:2:0:3:3"
};
const sk = 300, sh = silence, strumming = 
{d: stack(0,timeCat([1,sh],[sk,1]),timeCat([2,sh],[sk,2]),timeCat([3,sh],[sk,3]),timeCat([4,sh],[sk,4]),timeCat([5,sh],[sk,5]))
,u: stack(5,timeCat([1,sh],[sk,4]),timeCat([2,sh],[sk,3]),timeCat([3,sh],[sk,2]),timeCat([4,sh],[sk,1]),timeCat([5,sh],[sk,0]))
//{d: "[~@0 0@300],[~@1 1@300],[~@2 2@300],[~@3 3@300],[~@4 4@300],[~@5 5@300]"
//,u: "[~@5 0@300],[~@4 1@300],[~@3 2@300],[~@2 3@300],[~@1 4@300],[~@0 5@300]"
};

const gString = register('gString', (n, pat) => 
  (pat.fmap((v) => { if(v[n]=='x') return note(0).velocity(0);
      return note(v[n]+standardtuning[n]); } 
  ).innerJoin()));
const guitar = (strums,fingers,tuning=standardtuning) =>
  (strums.pickRestart(strumming).pickOut(
    [fingers.pickOut(fingering).gString(0),fingers.pickOut(fingering).gString(1),fingers.pickOut(fingering).gString(2)
    ,fingers.pickOut(fingering).gString(3),fingers.pickOut(fingering).gString(4),fingers.pickOut(fingering).gString(5)]));

setcps(120/60/2)
stack(
  guitar("[d@4 d@3 u d u d@2 d@3 u d u d@2 d@2 d u@2 u@2 u d u d u]","[Em7@9 G_@8 Dsus4@6 A7sus4@7 G_@2]")
    .s("gm_acoustic_guitar_steel:2").clip(1).release(0.4).gain(0.6)

).slow(5)//.pianoroll()
