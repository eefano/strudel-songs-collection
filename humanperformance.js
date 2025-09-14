// "Human Performance" (work in progress)
// song @by Parquet Courts
// script @by eefano
setcps(110 / 60 / 2)

const song = "<0@2 1@11 1@11 1@6 2@3 3@24 4@4 1@11 1@11 1@6 2@3 3@24 4@4>"

const ed = "[0,[~ 1@40],[~@2 3@40],[~@3 5@40]]"
const chseq = song.pickRestart(["~","<B@2 F#m@2 E@2 D@2 D A@2>","<B@3>".struct("x*4"),
                           "<A@3 <F#m!2 E D B F#m E D>@9>*4".struct("x*4"),"<F#m@4>"])

const cln = x=>x.s("gm_electric_guitar_clean:2").lpf(1800).gain(.7)
const dst = x=>x.s("gm_distortion_guitar:1").lpf(1800).gain(.4)

const zero = register('zero', (pat) => pat.withValue((v)=>0))  

$: n(zero(chseq).pickSqueeze([ed])).chord(chseq)
  .voicing().mode("root").pickF(song,[cln,cln,cln,dst,cln])

 $: n(song.pickRestart(["~","<~ 8 8 7 9 8 ~ ~ ~ 7 7 5 8 7 ~ ~ ~ 8 8 7 9 8 7 6 7 5 ~ 4 7 5 ~ ~ ~ 7 7 6 7 2@2 ~@5>*4",
                        "<7@2 ~ [7 5] [9 7]@2 ~@100>*4",
                        "<<[12!2 11 12]!2 [9!3 8] [9 8 7 9] [9!3 8] [9 8 7 9] [9!3 8] [9 8 7 9]> ~@2>","~"]))
 .scale("a2:major").s("gm_tenor_sax:1").gain(1).color('yellow')

 $: n(song.pickRestart(["<~ [~ 0 2 2b]>",
                       "<1 [4b 4] 5 [2 5] 4 [1 4] [3@3 3] [0@3 0] [-4@3 -4] [0 0] [0 0 2 2b]>",
                       "<1>*4","<<0!2 2 0!2 2 0!2>@3 <-2!2 4 3 1 -2 4 3>@9>*4".struct("x*4"),"<5!4 2!4 -2!3 2 5 -2 2 2b>*4"]))
  .scale("a2:major").s("gm_electric_bass_finger:3").clip(.97).lpf(350).gain(1.8).color('cyan')

$: song.pickRestart(["<~>","<rd*4,[bd sd]>","<rd*4,[sd bd]*2>",
                     "<cr@3 cr@9>*4,<sd ~ bd sd ~ sd!7>*4","~"]).s().gain(.5).hpf(800).lpf(3000).color('magenta')

all(x => x
       .room(.1)
    // .ribbon(24*2,1*8)
)
