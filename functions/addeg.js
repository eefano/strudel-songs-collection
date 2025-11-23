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

$: n("<0 [1 1#] 2 [3 3b]>*2").addeg("<0 3>/2").scale("C:major")
