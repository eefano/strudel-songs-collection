// "Human Performance" (work in progress)
// @song by Parquet Courts
// @script by eefano
setcps(110 / 60 / 2)

const song = "<0@2 1@11 1@11 1@6 2@3 3@24 4@4 1@11 1@11 1@6 2@3 3@24 4@4>"

$: chord(song.pickRestart(["~", "<B@2 F#m@2 E@2 D@2 D A@2>", "<B@3>",
    "<A@3 <F#m!2 E D B F#m E D>@9>*4".struct("x*4"), "<F#m@4>"]))
    .voicing().mode("root").s("gm_electric_guitar_clean:2").lpf(2000).gain(.7)

$: n(song.pickRestart(["~", "<~ 8 8 7 9 8 ~ ~ ~ 7 7 5 8 7 ~ ~ ~ 8 8 7 9 8 7 6 7 5 ~ 4 7 5 ~ ~ ~ 7 7 6 7 2@2 ~@5>*4",
    "<7@2 ~ [7 5] [9 7]@2 ~@100>*4",
    "<<[12!2 11 12]!2 [9!3 8] [9 8 7 9] [9!3 8] [9 8 7 9] [9!3 8] [9 8 7 9]> ~@2>", "~"]))
    .scale("a2:major").s("gm_tenor_sax:1").gain(1)

$: n(song.pickRestart(["<~ [~ 0 2 2b]>",
    "<1 [4b 4] 5 [2 5] 4 [1 4] [3@3 3] [0@3 0] [-4@3 -4] [0 0] [0 0 2 2b]>",
    "<1>*4", "<<0!2 2 0!2 2 0!2>@3 <-2!2 4 3 1 -2 4 3>@9>*4".struct("x*4"), "<5!4 2!4 -2!3 2 5 -2 2 2b>*4"]))
    .scale("a2:major").s("gm_electric_bass_finger:3").clip(.97).lpf(350).gain(1.8)

$: song.pickRestart(["<~>", "<rd*4,[bd sd]>", "<rd*4,[sd bd]*2>",
    "<rd@3 rd@9>*4,<sd ~ bd sd ~ sd!7>*4", "~"]).s().gain(.5).hpf(800).lpf(3000).room(.1)

all(x => x
    // .room(.1)
    // .ribbon(20*2,100*8)
)
