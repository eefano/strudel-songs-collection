// "Mouth Breather" (work in progress, complex variant)
// composed @by The Jesus Lizard
// script @by eefano
setcps(215/60*2)
const fvi = register('fvi', (i, d, pat) => pat.filterValues(v=>v[i]==d))
const ati = register('ati', (i, d, pat) => pat.withValue((v)=>{
  const isobj = v.value !== undefined; const value = isobj ? v.value : v;
  const result = Array.isArray(value)?(i<value.length?value[i]:d):(i==0?value:d);
  return (i==0 && isobj) ? {...v,value:result} : result; }));

// Index0 = Instrument, Index1 = Part, Index2 = Transpose
`<G@3 [G,D]@6 [G,D,B]@6 [G:1,D]@3 [G,D,B]@3 [G:1,D]@3 [G,D,B]@3 [G:0:-5,D,B:0:-5]@3 [G:0:-7,D,B:0:-7]@3 
  [D,B]@6 [G,D,B]@3 ~ [G,D,B]@6 [G:0:-5,D,B:0:-5]@3 [G:0:-7,D,B:0:-7]@3 D@3 ~@3 >/16`
.layer(  
 x=>x.fvi(0,'G').ati(1,0).pickRestart(
  [stack("<c3@9 c#3 c3@2>".pan(.51),"<g3 f3@2 g3@4 f3 g3 g#3 g3 f3>".add("<0,5>").pan(.49)).struct("<x!4 ~!2 x!9 x@3 x!6>")
  ,"<[c3,g3,c4]@3 ~@45>".add(-8).penv(-3).patt(.6).lpf(3000)
  ]).note()
  .transpose(x.fvi(0,'G').ati(2,0))
   .s("gm_electric_guitar_clean:2").hpf(80).distort("10:.17").room(.1)
 
,x=>x.fvi(0,'B').ati(1,0).pickRestart(
  ["<c2!3 c2@2 ~ c2!3 <[c#2 f2 c#2] [c2 f2 g2]>@3>"])
  .note()
  .transpose(x.fvi(0,'B').ati(2,0))
  .s("gm_electric_bass_pick").release(.06).distort("5:.31").room(.2).color('green')
  
,x=>x.fvi(0,'D').ati(1,0).pickRestart(
  ["<[bd ~ bd sd ~ bd!2 ~!2 bd sd ~ bd ~!2 bd sd bd ~ bd sd ~ bd ~],oh*12,cr*2>/24"])  
  .pickOut({bd:s('bd').lpf(1800), 
            sd:s('sd').speed(.88),
            oh:s('oh').speed(.9).velocity(.15).pan(.45),
            cr:s('cr').speed(.95).velocity(.2).pan(.55)
          }).bank("linn9000").gain(1.3).room(.85).color('cyan') 
)