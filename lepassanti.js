// "Le Passanti / Les Passantes" 
// song @by Fabrizio De Andrè / Georges Brassens
// script @by eefano
setcpm(100/4)

const gString = register('gString', (n, pat) =>  (pat.fmap((v) => { if(v[n]=='x') return note(0).velocity(0);
      return note(v[n]+standardtuning[n]); } ).innerJoin()));
const guitar = (strums,fingers,tuning=standardtuning) =>(strums.pickRestart(strumming).pickOut(
    [fingers.pickOut(fingering).gString(0).cut(1).velocity(1).speed(.992)
    ,fingers.pickOut(fingering).gString(1).cut(2).velocity(.75)
    ,fingers.pickOut(fingering).gString(2).cut(3).velocity(.75)
    ,fingers.pickOut(fingering).gString(3).cut(4).velocity(.55)
    ,fingers.pickOut(fingering).gString(4).cut(5).velocity(.55)
    ,fingers.pickOut(fingering).gString(5).cut(6).velocity(.55)]));

const standardtuning = [41,46,51,56,60,65]; // capo 1st fret
const fingering = 
{Em:"0:2:2:0:0:0",D:"x:0:0:2:3:2",C:"x:3:2:0:1:0",B7:"x:2:1:2:0:2",E7:"0:2:0:1:0:0",A:"x:0:2:2:2:0",G:"3:2:0:0:0:3"};
const strumming = {e: "[<0 2> 3 4 5 4 3]*2", a:"[<1 2> 3 4 5 4 3]*2", d:"[<0 1> 3 4 5 4 3]*2"};

const chr = "<Em [C B7 E7 A [Em D] <[G B7] Em> ]*2@12>"

$: guitar("<e  [a a  e  a  e     < d     e > ]*2@12>", chr)
  .s("folkharp").transpose(-12).release(2).gain("<.66 .72 .75 .8>/13").room(.7)

$: note(`<~@5 [~ c3] 
     [ f3@2 f3!2 g3 f3 e3 c3@2 ~ g#3 [g#3 g3] f3 [c3@3 c3]@2 d#3@2 [c#3 c3] a#2 f2@3 ~ [~ f2]
     <[g#2!3 g2 a#2 d#3 c3@2 ~@3 c3]  [g#2 c3 f3 a#2 g2 d#2 f2@3 ~@3]>@12 
     ]*2@72>*6`).layer(x=>x.s("gm_bassoon").clip(.91).att(.01).rel(.22).hpf(100).gain(.6),
                       x=>x.s("gm_oboe").gain("<.35 .4 .45 .5>/13")
                  ).jux(early(0.01))

$: chord(chr).anchor("<~ a2 d3 f3>/13").mode('above').voicing().transpose(1).arp(irand(3).seg(2))
  .s("gm_cello:1").gain(.17).room(.6)

//.pianoroll({ labels: false, fold: false, minMidi: 35, maxMidi: 95, cycles: 5 })
