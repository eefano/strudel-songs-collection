// "Big Ship (Coda)"
// song @by Cardiacs
// script @by eefano
setDefaultVoicings('legacy')
const progr = "<Am!2 D F Am D@2 Am!2 A# Am E@2 C F Am D@4>".fast(2);
const anchr = "<A5 F5 F5 F5 F5 G5@2 A5 F5 G#5 F5 E5@2 E5 F5 F5 G5@4>".fast(2);

stack(
 n("-2 -1 0 2 0 1").chord(progr).anchor("G5").voicing().s('gm_violin').clip(1).gain(0.3).room(0.1)
, chord(progr).anchor(anchr).voicing().s('gm_drawbar_organ').clip(1).gain(0.9).room(0.3)
, chord(progr).rootNotes(1).struct("x*2").s('gm_electric_bass_finger').clip(1).gain(1)
  
, s("[bd!2 ~ bd]*2").bank("AkaiLinn").lpf(200).gain(0.35)
, s("[~ <[sd ~ ~ sd] sd>]*2").bank("AkaiLinn").hpf(250).lpf(4000).gain(0.30)
, s("oh*4").gain(0.15) 

).cpm(120/4).room(0.3)//.pianoroll()
