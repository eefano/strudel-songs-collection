// "Human Performance" (work in progress)
// @song by Parquet Courts
// @script by eefano
setcps(110 / 60 / 2)

const song = "<0@2 1@11 1@11 1@6 2@3 3@24 4@4 1@11 1@11 1@6 2@3 3@24 4@4>"

const zero = register('zero', (pat) => pat.withValue((v)=>0))  

const chseq = song.pickRestart(["~","<B@2 F#m@2 E@2 D@2 D A@2>","<B@3>".struct("x*4"),
                           "<A@3 <F#m!2 E D B F#m E D>@9>*4".struct("x*4"),"<F#m@4>"])

const cs = zero(chseq).pickRestart(["<[0,[~ 1@40],[~@2 2@40],[~@3 3@40]]@2>"])
const ds= "<0@3 0@2 0 0@2 0!2 0@2>*4".pickRestart(["[0,1,2,3]"])

const cln = x=>x.s("gm_electric_guitar_clean:2").lpf(1800).gain(.7)
const dst = x=>x.s("gm_electric_guitar_clean:2").hpf(100).lpf(1800).clip(1).gain(.7)


$: n(song.pick([cs,cs,ds,ds,cs])).chord(chseq).mode('above').anchor('e3')
  .voicing().mode("root").pickF(song,[cln,cln,cln,dst,cln])  ._pianoroll()

$: n(song.pickRestart(["~", "<~ 8 8 7 9 8 ~ ~ ~ 7 7 5 8 7 ~ ~ ~ 8 8 7 9 8 7 6 7 5 ~ 4 7 5 ~ ~ ~ 7 7 6 7 2@2 ~@5>*4",
                       "<7@2 ~ [7 5] [9 7]@2 ~@100>*4",
                       "<<[12!2 11 12]!2 [9!3 8] [9 8 7 9] [9!3 8] [9 8 7 9] [9!3 8] [9 8 7 9]> ~@2>","~"]))
  .scale("a2:major").s("gm_tenor_sax:1").gain(1).color('yellow')

$: n(song.pickRestart(["<~ [~ 0 2 2b]>",
                       "<1 [4b 4] 5 [2 5] 4 [1 4] [3@3 3] [0@3 0] [-4@3 -4] [0 0] [0 0 2 2b]>",
                       "<1>*4","<<0!2 2 0!2 2 0!2>@3 <-2!2 4 3 1 -2 4 3>@9>*4".struct("x*4"),"<5!4 2!4 -2!3 2 5 -2 2 2b>*4"]))
  .scale("a2:major").s("gm_electric_bass_finger:3").clip(.97).lpf(350).gain(1).color('cyan')

$: song.pickRestart(["<~>","<rd*4,[bd sd]>","<rd*4,[sd bd]*2>",
                     "<cr@3 cr@9>*4,<sd ~ bd sd ~ sd!7>*4","~"]).pickOut({
          rd:s("<r8_rd:1>").speed(1.1).hpf(4000).velocity(.1),
          bd:s('linn9000_bd').velocity(.55).lpf(500),
          sd:s('linn9000_sd').velocity(.55).hpf(200),
          cr:s('linn9000_cr').velocity(.1).pan(.55),
          mt:s('linn9000_mt').velocity(.3).pan(.6),
          lt:s('linn9000_lt').velocity(.2).pan(.7)}).speed(.94).gain(.6) .color('magenta')

all(x => x
     .room(.3)
    //.ribbon(24*2,1*8)
)
