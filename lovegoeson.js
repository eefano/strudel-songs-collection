// "Love Goes On" (work in progress)
// song @by The Go-Betweens
// script @by eefano
const standardtuning = [40,45,50,55,59,64];

const fingering = 
{Am:"0:0:2:2:1:0",C:"x:3:2:0:1:0",
 D:"x:0:0:2:3:2", Dm:"x:0:0:2:3:1",
 G:"3:2:0:0:0:3", G7:"3:2:0:0:0:1",
 F:"1:3:3:2:1:1", A7:"x:0:2:2:2:3",
 E:"0:2:2:1:0:0", Em:"0:2:2:0:0:0", E7:"0:2:2:1:3:0",
 B7:"0:2:4:2:4:2",Bm:"0:2:4:4:3:2"
};
const sk = 300, sh = silence, strumming = 
{d: stack(0,timeCat([1,sh],[sk,1]),timeCat([2,sh],[sk,2]),timeCat([3,sh],[sk,3]),timeCat([4,sh],[sk,4]),timeCat([5,sh],[sk,5]))
,u: stack(5,timeCat([1,sh],[sk,4]),timeCat([2,sh],[sk,3]),timeCat([3,sh],[sk,2]),timeCat([4,sh],[sk,1]),timeCat([5,sh],[sk,0]))
};

const gString = register('gString', (n, pat) => 
  (pat.fmap((v) => { if(v[n]=='x') return note(0).velocity(0);
      return note(v[n]+standardtuning[n]); } 
  ).innerJoin()));
const guitar = (strums,fingers,tuning=standardtuning) =>
  (strums.pickRestart(strumming).pickOut(
    [fingers.pickOut(fingering).gString(0),fingers.pickOut(fingering).gString(1),fingers.pickOut(fingering).gString(2)
    ,fingers.pickOut(fingering).gString(3),fingers.pickOut(fingering).gString(4),fingers.pickOut(fingering).gString(5)]));

setcps(150/60)

strum:
  guitar("<d@2 d u@2 u d u >*2",
         "<0@2>/16".pickRestart(
           ["<Am Em Bm C G Em D C>/4"]))
    .s("gm_acoustic_guitar_steel:2").clip(1).release(0.4).gain(0.4).room(0.6)

voice:
    "<0 1>/16".pickRestart([
    "<2 2@2 2@2 2 2 2@2 1@2 ~@5 3 3@2 3@2 1 1@2 2@2 ~@6>*2",
    "<3 1@2 -1@2 -1 -1 0@2 1@2 ~@5 0 0@2 0@2 1 1@2 -1@4 ~@4>*2"
  ]).scale("a3:minor").note().clip(0.95).color('yellow')
   .s("gm_bassoon:2").gain(1).room(0.4)

