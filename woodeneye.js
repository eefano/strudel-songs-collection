// "Woodeneye" (wip)
// song @by Cardiacs
// script @by eefano
setCps(200 / 60 / 2)
const song = "<1@16 2@16 3@7 4@4>"
const chordseq = song.pickRestart([
    "~",
    "<[~ A:f4:.6:0!15]>/4",
    "<[~ A:g4:.6!7] [F:f4:.6!8]>/2",
    "<D:d4 G:d4 A:d4:.8@2 B:g4 C:g4 G:d4:.8>",
    "<[~ D:g4:.6!3] [D:g4 A:d4]>"])

mello: chordseq.as("chord:anchor:clip:n").voicing().speed(0.97).begin(.03).s('gm_synth_bass_1').lpf(2000).gain(.7).color('cyan')

drums: song.pickRestart([
    "<oh,<~ bd!3> [sd <~!3 [sd,oh]>]>*2",
    "<hh,<~ bd!3> [sd <~!3 bd ~!3 [sd,oh]>]>*2",
    "<hh,<~ bd!3> [sd <~!3 [sd,oh]>]>*2",
    "<oh,[bd <~!3 bd>] sd>*2",
]).pickOut({
    bd: s('linndrum_bd').lpf(2000).room(.2).velocity(.8),
    sd: s('linndrum_sd').room(.2).velocity(.75),
    hh: s('linndrum_hh').hpf(7000).speed(1.5).velocity(.4),
    oh: s('linndrum_oh').speed(1.3).hpf(3000).velocity(.3).clip(1.2),
})

all(x => x.room(.1)
    // .ribbon(2*4,1*8)
)
