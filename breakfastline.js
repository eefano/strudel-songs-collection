// "Theme from The Breakfast Line"
// song @by Cardiacs
// script @by eefano
const maj = "[0,4,7]"
const imaj = "[0,4,-5]"
const melody =`[
    c#6@2 f5 c6@3 a#5 a5@2 g5@3 c#5 e5@2 d#5@2 f#5 a5@3 a5@3
    a5 g5 f5 d#5 c#5 b4 a5@3 a5@3 f5 g5 a5 a#5 g#5 g5 f5 g5 a5 b5 d5 g5 
    c#5@2 b4 f5@3 c#5 d#5 f5 g5 c#5@2 c5@3 c#5@3 c#5@6
    c#5 g#5 g5 a#4 f5 d#5 c#5 c5 g#5 c#5 c5 b4 c#5@2 b4 a5@3 c#5 b4@2 a5@6 
    b5 g5@2 e5 a5 b5 b5@6 b5 a#5 g5 a5@3 b5 g5 d5 c#5 a5@2 b5 g5 d#5 c#5 a5@2
    g5@2 d#5 f5 d#5 c#5 b4 a4 g4 a4 b4 c#5 d#5 f5 g5 ]/24`.clip(0.93)
stack( 
   // melody   
  melody.note().transpose(  0).s('gm_overdriven_guitar').pan(0.45).gain(0.70),   
  melody.note().transpose(-12).s('gm_overdriven_guitar').pan(0.55).gain(0.80),   
  // chords
  "<C#4 D#4 F4 G4 A3 B3>*2".add(imaj)
  .note().s('gm_string_ensemble_2').gain(0.6),
  // bass
  "<C#2 D#2 C2 D2 A1 B1>*2".clip(0.90)
  .note().s('gm_electric_bass_finger').gain(0.7), 
  // drums
  s("<[bd ~ bd sd ~ bd]!23 [sd*6]>").bank("AkaiLinn").gain(0.30),
  s("hh*6").gain(0.10) 
).cpm(76/2).room(0.6)//.pianoroll()
 