// "Poverty" (work in progress)
// composed @by Ennio Morricone
// script @by eefano

setCps(95/60/4)

const addeg = register('addeg', (amount, pat) => pat.withValue(old => {
  
    const isObject = typeof old === 'object';
    const hasN = isObject && old.n !== undefined;
    
    let v = isObject ? (hasN ? old.n : old.value) : old;
    if(Array.isArray(v)) return silence;  // arrays not supported

    if (typeof v === 'string')
    {
      let i = v.indexOf('#'); if(i<0) i=v.length;
      let j = v.indexOf('b'); if(j<0) j=v.length;
      if (j<i) i=j;

      v = String( Number(v.substring(0, i)) + amount ) + v.substring(i, v.length); 
    }
    else v = v + amount; // simple number add  
  
    return isObject ? (hasN ? { ...old, n:v } : { ...old, value:v}) : v;
  }));


const split = register('split', (deflt, callback, pat) => 
  callback(deflt.map((d,i)=>pat.withValue((v)=>Array.isArray(v)?(i<v.length?v[i]:d):(i==0?v:d)))));

$: n("<0,7>").scale("e1:minor").s('gm_contrabass').adsr([.5,0,1,.5]).gain(.4).lpf(400)

$: n("<~@2 [i:-3 j:0 j:1] [j:3 j:2 j:1] j:2 i:-3 [j:0 j:1 j:2] [j:3 j:4 j:5] [j:7 [k:6@3 j:4]@2]>"
     .split([0,0],s=>s[0].pickRestart({i:"0,5,7",j:"0,2,7",k:"0#,3,7#",l:"0"}).addeg(s[1]))
    ).scale("e3:minor").s('gm_piano').hpf(300).gain(.6)


all(x=>x.room(.4)
// .ribbon(5,2)
  )