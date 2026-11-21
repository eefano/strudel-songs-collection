setcpm(115/4)   // 1 cycle = 1 bar

// ---------- THE MATERIAL (semitones above the root) ----------
const riffA = note("0 0 12 0 0 10 0 0 8 0 0 6 0 0 6 7")   // full riff
const riffB = note("0 0 12 0 0 10 0 0 8 0 0 6 ~ ~ ~ ~")   // riff that stops short
const fill  = note("36 34 31 29 32 36 41 36 32 29 32 41 36 34 32 ~") // melodic fill

// ---------- THE STRUCTURE ----------
// 8-bar phrase: A B A B A B A + fill
const bars = "<0 1 0 1 0 1 0 2>".pick([riffA, riffB, fill])
// the root moves every 4 bars: E -> A -> E -> B
const part = bars.add(note("<0 5 0 7>/4"))

// ---------- THE BAND ----------
$: part
  .add(note("0,7"))            // root + fifth = power chord
  .add(note(40))               // base pitch: E2
  .s("sawtooth")
  .distort(2)
  .decay(.12).sustain(0)
  .gain(rand.range(.4, .6))
  .lpf(sine.range(1000, 2500).slow(8)).lpq(10)

$: part
  .add(note(28))               // E1, two octaves below the lead
  .s("sawtooth")
  .lpf(300)
  .decay(.15).sustain(.1)
  .gain(.7)

$: stack(
  s("bd*8").gain(.8),
  s("~ sd ~ sd").gain(.8),
  s("hh*8").gain(.35),
  s("cr").struct("<x ~ ~ ~ ~ ~ ~ ~>").gain(.5)   // crash on the first bar of each phrase
).bank("RolandTR909")

// ---------- MONSTERS (synthesized) ----------
// Imp/demon growl: low saw, wobbling and distorted, pitch drops on each hit
$: note("<e1 g1 d1 e1>")
  .s("sawtooth")
  .struct("x/2").degradeBy(.4)
  .penv(-7).pdecay(.5)
  .vib(22).vibmod(1.5)
  .lpf(sine.range(300, 1200).slow(2)).lpq(8)
  .distort(3)
  .attack(.05).decay(.7).sustain(0)
  .room(.6).size(4)
  .gain(.5)

// Pinky snarl / hiss: filtered noise
$: s("pink")
  .struct("~ x ~ ~").slow(3).degradeBy(.5)
  .bpf(sine.range(500, 2500).fast(5)).bpq(4)
  .decay(.35).sustain(0)
  .room(.4)
  .gain(.6)
