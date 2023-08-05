// "Jitterbug" by Cardiacs
const m1 = `f#4@3 d4@4 g4@6 g#4@4 f4@3 d#4@3 e4@4 c#4@6 b3@4 g#3@3 g#4@5 a4@4 f#4@3 d#4@3 f#4@4 g4@6 a4@4 a#4@6 d#4@3.9 ~@0.1 d#4@3`.slow(82/8);
const m2 = `f4@3 d4@4 d#4@5 e4@3 g4@4 e4@6 f#4@4 c4@2.9 ~@0.1 c4@3 g#3@4 a#3@4 b3@6 c#4@4 g4@6 a4@4 a#4@6 d#4@3.9 ~@0.1`.slow(73/8);
const m3 = `d#4@3 f#4@3.5 ~@0.5`.slow(7/8);
const m4 = `c#4@4 f#4@4 `.slow(8/8);
const m5 = `e4@4 g4@7.9 ~@0.1 f4@4 f#4@4.9 ~@0.1 d#4@3 e4@4 c#4@6.9 ~@0.1 f#4@2 f4@3.9 ~@0.1`.slow(41/8);
const melody = arrange([82/8,m1],[73/8,m2],[7/8,m3],[82/8,m1],[8/8,m4],[73/8,m2],[41/8,m5]);

const h1 = `D@2 G@2 C D#@2 G#@2 C# B@2 E@2 A F#m@2 B@2 G#@2 C#@2 A@2 D Cm@2 F#@2 D# Em@2 A@2 F# D#m@2 G#@2`.slow(40/4);
const h2 = `Cm F@2`.slow(3/4);
const h3 = `Bm@2 B@2 C@2 G@2 C A@2 D@2 Am C@2 G#@2 F#@2 E B@2 C#m@2 D# Em@2 A@2 F# D#m@2 G#@2`.slow(35/4);
const h4 = `Cm F#@2`.slow(3/4);
const h5 = `Cm F#@4 F@2`.slow(7/4);
const h6 = `C#m@2 D#@4 C#@2 F#@2 B@2 E@2 C#m@2 F#@2 A#@2`.slow(20/4);
const chords = arrange([40/4,h1],[3/4,h2],[35/4,h3],[3/4,h4],[40/4,h1],[7/4,h5],[35/4,h3],[20/4,h6]);

stack(  
 chords.voicings('triads').transpose(12).arp(stack("0","1".late(.1),"2".late(.2)).fast(4))
  .note().s("gm_pad_choir").echo(2,1/6,.7).room(0.5).gain(0.7), 
 chords.rootNotes(2).note().s("gm_lead_2_sawtooth").attack(0.2).sustain(1.2).room(0.4).lpf(1000).gain(0.4),
 melody.note().s("gm_lead_1_square").attack(0.02).sustain(1.5).room(0.4).lpf(1200).gain(0.8),
 s("<rd*4>").bank('LinnDrum').gain(0.05).room(0.4)
).cpm(120/4)