// "El Pueblo Unido Jamas Sera Vencido" (work in progress)
// song @by Inti-Illimani
// script @by eefano
const standardtuning = [40,45,50,55,59,64];

const fingering = 
{Am:"0:0:2:2:1:0",C:"x:3:2:0:1:0",Dm:"x:0:0:2:3:1",E7:"0:2:2:1:3:0",G7:"3:2:0:0:0:1",
 F:"1:3:3:2:1:1",A7:"x:0:2:2:2:3",E:"0:2:2:1:0:0",B7:"0:2:4:2:4:2"
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

stack(
  guitar("<d [d@2 u]>*4",
         "<0@2 1 2 1 3>/2".pickRestart(["<Am C Dm E7>*2","<Dm G7 C F>*2","<Dm E7 Am A7>*2","<Dm E7 [Am E7] Am>*2"]))
  
    .s("gm_acoustic_guitar_steel:2").clip(1).release(0.4).gain(0.4),

  "<0@2 ~@4>/2".pickRestart(["<0@5 0 2@5 2 4@2 4 3@2 2 1@5 -3>*12"]).n().scale("a5:minor").s("gm_ocarina").clip(0.95).gain(0.60)

).cpm(110/4).room(0.4)//.pianoroll()

