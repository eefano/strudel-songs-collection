// "Cabinet" (work in progress)
// song @by Spratleys Japs
// script @by eefano
setDefaultVoicings('legacy')
function arr(p,l) { return [l,p.slow(l)]; }

const h1 = arr(`D@8 A F@3`,24/2);
const h2 = arr(`D@5 E C@3 A@2 B G@2 E@7 F# D@2 B C# A@2 F#@3 G# E@2`,68/2);
const h3 = arr(`C#@8 D# B@2 G# A# F#@2 D#@3 F C#@3 A# C G#@2 F@3 G D#@3 C@2 D A#@2 G@3 A F@2`,88/2);

const chords = arrange(h1,h2,h3);


stack(
  chord(chords).rootNotes(3).s('triangle').lpf(400).gain(0.6),
  chord(chords).anchor("E5").voicing().s('gm_drawbar_organ').gain(0.35),

  s("sleighbells").struct("x*6").gain(3),
  s("[bd sd]").gain(0.4).room(2),
  s("rd*6").gain(0.01)
 
).cpm(133/8).pianoroll()