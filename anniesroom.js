// "Up In Annie's Room" (work in progress)
// song @by The Sea Nymphs
// script @by eefano
setcps(90/60)

const split = register('split', (deflt, callback, pat) => 
  callback(deflt.map((d,i)=>pat.withValue((v)=>Array.isArray(v)?(i<v.length?v[i]:d):(i==0?v:d)))));

c: "<0@32 1@24>/2".pickRestart([
"<Bm@3 G Em A Em D G@2 A Em D G A Em>/2",
"<C#m G A# F E B Em G@3 D# Dm A C#m G B A G A G A G A G>/2"])
 .layer(x=>x.chord().anchor('b4').voicing().s("gm_reed_organ").attack(0.1).release(1.5).room(1).rsize(4).gain(0.4),
        x=>n("<0!32 [0,1,2,3,4]!24>/2").chord(x).anchor('c3').mode('root').voicing().s("gm_church_organ").room(1).rsize(4).gain(0.4),
        x=>n("<[0,[~ 1@20],[~@2 2@20],[~@3 3@20],[~@4 4@20]]>/2").chord(x).anchor('e4').voicing().s("gm_acoustic_guitar_nylon").room(0.6).gain(0.5))

v: "<0@16 1@16 2@24>/2".pickRestart([
  "<f#3 ~ d3 e3 ~ e3 ~ f#3 ~ f3:-2 ~ d3@7 ~@14 d3@2 ~ b3 ~ b3 ~ e3@7 ~@18>*2",
  "<f#4 ~ d4 e4 ~ e4 ~ f#4@4 d4:-4@7 ~@14 d4@2 ~ b4 ~ b4 ~ e4@7 ~@18>*2","<~>*2"])
  .split([0,0],(x)=>note(x[0]).penv(x[1]))
  .patt('0.4').s("gm_choir_aahs:5").room(1).gain(1)

//d: s("<hh>")

