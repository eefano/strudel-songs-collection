// "Il Vento Caldo Dell'Estate (wip)"
// song @by Alice
// script @by eefano
const split = register('split', (deflt, callback, pat) => callback(deflt.map((d,i)=> pat.withValue((v)=>{
    const isobj = v.value !== undefined; const value = isobj ? v.value : v;
    const result = Array.isArray(value)?(i<value.length?value[i]:d):(i==0?value:d);
    return (i==0 && isobj) ? {...v,value:result} : result; }))));
  setCps(115/60)
  
  synt: "<a@27 b@70 b@75 ~@4>".pickRestart({
    a: "<0@6 0@6 0@7 0@7 0@8 0@10 0@10>*2",
    b: "<0@6 0@6 0@6 0@7 0@7 0@6 0@6 0@6 0@6 0@7 0@7 0@6 0@8 0@10 0@8 0@10 0@8 0@10 0@10 0@10>*2"
      
  }).pickRestart(["<0 4 7 8 10 11 9 12 14 12>*2"])
    .scale("c#4:major").note().s("gm_drawbar_organ").room(.3).lpf(1200)
  
  bass: "<a@3>".pickRestart({
    a: "<[0 <7!2 [7:.8 7:.9]>]>"
  }).split([0,1],s=>n(s[0]).scale("c#2:major").clip(s[1])).s("gm_electric_bass_finger:2").lpf(400).gain(2).color('cyan')
   
  drums: "<a@27 [a,b]@24 [a,b,c]@5 [a,d]@28 [a,c,d]@2 [a,d]@86 ~@4>".pickRestart({
    a: "<bd>", b: "<~ ~ sd ~>", c:"<[~ [sd sd]] ~@4>", d:"<~ sd>"
  }).pickOut({
    bd: s('bd').lpf(800).velocity(1.1),
    sd: s('sd').velocity(.7),
    rd: s('rd').velocity(0.3).hpf(8000),
    cr: s('cr').speed(0.7).velocity(0.1).hpf(6000),
  }).bank("Linn9000").room(0.2).gain(0.8).rsize(4)
  