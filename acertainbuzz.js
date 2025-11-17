// "A Certain Buzz"
// a silly song @by eefano

setcps(175 / 60 / 4)

const toscale = register('toscale', (pat) => pat.withValue((v) =>
  v.endsWith('m') ? [v.substring(0, v.length - 1), 'minor'] : [v, 'major']));

const song = "<0@6 1@6>/4";

const ch0rds = song.pickRestart(["< D#2 <E2m F#2m> >", "< F#2 B1 A1m A#1>"]);

$: n(song.pickRestart(["<0*4 <[0 ~] [2 4]>>*2", "<2*2 1*2 0*2 3*2>*2"]))
  .s('supersaw').scale(ch0rds.toscale()).attack(.1).clip(.95).gain(.5).early(.01)

$: s("<[~@3 1] 0@4 [0 1] 0@5 [0@3 1]>/4"
  .pickRestart(["<bd ~ sd ~ ~ bd sd ~>*8", "<[sd bd]!2>*4"])).bank("tr909").gain(.4)

$: s("rd:3*4").gain(.5)

$: n(song.pickRestart(["<~ ~ 0 ~ 1 ~ >/4", "<~ 0 2@2>/4"])
  .pickRestart(["<~ [9 8] [9 ~ ] >*4", "<11*2 10*3 ~>*2", "<[8 7] [7 ~] [7 6] [6 7]!2 ~>*4"]))
  .scale(ch0rds.toscale()).transpose(24).s('triangle').clip(.95).vib(10).vibmod(.5).gain(.5)

all(x => x.room(.3))
