// "She don't use jelly" (work in progress)
// composed @by The Flaming Lips
// script @by eefano
const gString = register('gString', (n,tuning, pat) => 
    (pat.fmap((v) => { if(v[n]=='x') return note(0).velocity(0);
        return note(v[n]+tuning[n]); } 
    ).innerJoin()));
  const guitar = (strums,fingers,tuning=[40,45,50,55,59,64]) => (strums.pickOut(
      [fingers.pickOut(fingering).gString(0,tuning),fingers.pickOut(fingering).gString(1,tuning),fingers.pickOut(fingering).gString(2,tuning)
      ,fingers.pickOut(fingering).gString(3,tuning),fingers.pickOut(fingering).gString(4,tuning),fingers.pickOut(fingering).gString(5,tuning)]));
  const split = register('split', (deflt, callback, pat) => callback(deflt.map((d,i)=> pat.withValue((v)=>{
    const isobj = v.value !== undefined; const value = isobj ? v.value : v;
    const result = Array.isArray(value)?(i<value.length?value[i]:d):(i==0?value:d);
    return (i==0 && isobj) ? {...v,value:result} : result; }))));
  
  setCps(86 / 60 )
  const fingering = 
  {D5:"x:5:7:7:x:x",G5:"3:5:5:x:x:x",A5:"5:7:7:x:x:x",
   D:"10:12:12:11:10:10",C:"8:10:10:9:8:8",G:"3:5:5:4:3:3",A:"5:7:7:6:5:5"
  };
  const sk = 300, sh = silence, strumming = 
  {d: stack(0,timeCat([1,sh],[sk,1]),timeCat([2,sh],[sk,2]),timeCat([3,sh],[sk,3]),timeCat([4,sh],[sk,4]),timeCat([5,sh],[sk,5]))
  ,u: stack(5,timeCat([1,sh],[sk,4]),timeCat([2,sh],[sk,3]),timeCat([3,sh],[sk,2]),timeCat([4,sh],[sk,1]),timeCat([5,sh],[sk,0]))
  };
  
  lead: "<~ ~ ~ [~ e4] f#4 f#4*2 [a4:3:.1 f#4:-2:.1] [e4 f#4@2:3:.1 f#4]@2 f#4*2 [g4 f#4] [c#5:-2:.1 e4:2:1] >".as("note:penv:patt")
    .s("gm_overdriven_guitar:11").color('magenta').gain(.55).hpf(400).lpf(5000).pan(.5)
  
  rthm: "<~ 0@2>/4".pickRestart([
    "<D5:d [D5:d D5:u] G5:d [G5:d A5:u@2 A5:d]@2 [G5:d G5:u] [A5:d A5:u] [G5:d ~]>"
    ]).split([0,0],s=>guitar(s[1].pickRestart(strumming),s[0]).transpose(-12)
    .s("gm_overdriven_guitar:6").release(.1).hpf(700).lpf(6000)).color('cyan').gain(1.5).pan(.4)
   
  
  bass: note("<~@4 d2 d2*2 g1*2 [g1 a1@2 a1]@2 g1*2 a1*2 [g1 ~]>")
    .s("gm_electric_bass_finger").lpf(500).dist("4:.25").color('green')
  
  
  drum: "<~ 0@2>/4".pickRestart([
    "<cr,[hh!15 oh],[bd sd bd*2 [sd bd] [~ sd] [bd ~] [sd bd] [bd sd]]>/8"
  ]).pickOut({
    bd:s('linndrum_bd').hpf(50).lpf(2000).velocity(.8),
    sd:s('linndrum_sd').hpf(200).velocity(.7),
    hh:s('linndrum_hh').hpf(7000).speed(1.5).velocity(.3),
    oh:s('linndrum_oh').hpf(7000).speed(1.1).velocity(.3),
    cr:s('linndrum_cr').hpf(7000).speed(1.2).velocity(.3),
  }).color('yellow').gain(1.2)
  
  
  all(x=>x.rsize(.8).room(1.3)
      .ribbon(1*4,2*4)
    )
  