// "Gipsy Woman" (work in progress)
// song @by Crystal Waters
// script @by eefano
setcpm(120)
const split = register('split', (deflt, callback, pat) => 
  callback(deflt.map((d,i)=>pat.withValue((v)=>Array.isArray(v)?(i<v.length?v[i]:d):(i==0?v:d)))));

$: n(`<[[-3,3,4,6,8]@2 [-2,4,5,7,9]@3] 
      <[[-4,3,5,7,9]@2 [-1,3,5,7b,8]@3] [[1,8,10,13b,14]@2 [1b,8b,10,12,14]@3]>
       [0,2,4,6,[8@2 7@3]]!2 >/4`)
  .struct("<x x*4@3>").scale("d4:minor").clip(.87).hpf(200).lpf(2000).layer(
    x=>x.s("gm_percussive_organ:1").mask("<x@7 ~ ~ ~ ~ x x [~ [~ x]]>/32").gain(.6),
    x=>x.transpose(-12).s("gm_piano:2").mask("<~@7 x@4 ~ ~ [x [x ~]]>/32").rel(.15).gain(.8))

$: n(`<[4 8 5 [9 5]] <[3 7 6 [3 6]] [8 6b 8b [5 8b]]> [4 8 4 [9 5]] [4 8 4 [3 6]]>/4`)
  .scale("d1:minor").s("gm_acoustic_bass").lpf(300).clip(.7).rel(.2).gain(.8).mask("<~@3 x@5 ~ x@2 [~ x] x [x ~]>/32")

const vox = "<~ [0@32 1@23 2@40 ~]@3 [3@32 1@23 2@40 ~]@3 ~ [4@15 2@48 ~]@2 [~@63 2@32 ~]@3 ~>/32"
$: vox.pickRestart([
  `<~ 9 8 8 9 8:.1:-1 9 8 9 8 ~ ~ 9 8 7 6 7 _ 6 ~@3 9:.1 9:.1 7 _ 6 ~@5
    ~ 8 9 8 9 8 9 9 8:.1:-1 _ ~ 6 7 _ 9 _ 7 _ 6 ~@2 [~ 7] 9*2 _ 7 _ 6 ~@5>*2`,
  `<~ 8 9 ~ 9 9 8 9:.1 8 _ _ ~ 6 ~ 6 _ 7:.1 _ 6 ~@3 9:.1 _ 7 _ 6 ~@5 
    ~ ~ 9 8:.1:-1 9 9 ~ ~ 9 9 8:.1:-1 9 8:.1:-1 _  >*2`,
  `<4 4 7:.05 _ 4:.3 _ 0:.05 _ >*2`,
  `<~ ~ 10 9 10 8 9 8 9:.1 8 ~ ~ 9:.1 8 ~ 8 9:.2 8:.2:-1 _ _ _ _ ~@10
    ~ 9 8 8 9 8 9 ~ 9 8:.1:-1 _ 8 9:.1 ~ 9 8 9:.1 8 _ _ ~ ~ 9 8 9:.1 8 _ _ ~@2>*2`,
  `<~ 8 9 ~ 9 9 8 9:.1 8 _ _ ~ 8 8 _ 9:.1 _ 8:.1:-1 _ ~ 9 9 8 9 8 _ _ _ ~ >*2`,  
  ]).split([0,0,1],(x)=>note(x[0]).patt(x[1]).penv(x[2])).att(.04).scale("d3:minor").rel(.05)
  .s("gm_alto_sax").gain(vox.pick(["1.3","1.3","1.7","1.3"])).delay(.25).dt(1).dfb(.00001)

$: "<~ ~ [~@3 0] 0 [0,1] [[0,1]@3 2] [2 [0,1]@3] [0,1] [[0,1]@13 ~@19] [0,1]@2 [0 [0,1]@3] [0,1] [[0,1] 2]>/32"
  .pickRestart([
  "bd,<~ oh>*2,<~ [hh - - hh] [- hh - -] hh>,<~ cp>","<[h2 h3 h3 h3],<~ ~ [~@3 ht] ~>>",
  "<~ [h2,h3 - - h2] [- h2 - -] h2>"
    ]).pickOut({
    bd:s("bd").velocity(1), cp:s("cp").velocity(1), ht:s("ht:1").speed(2.5).velocity(.6),
    hh:s("hh").velocity(.5), oh:s("oh").velocity(.32),
    h2:s("hh:2").velocity(.25), h3:s("hh:2").velocity(.15)
    }).bank("tr909").gain(.65)

all(x=>x.roomsize(1).room(.5))
