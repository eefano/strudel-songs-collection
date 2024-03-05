// "HAPPY BIRTHDAY BURNSIE"
// song @by Ramones
// script @by eefano
const chrds = "F@3 C@6 F@6 Bb@3 F@2 C F@3".slow(8);

stack(
"C4*2 [D4 C4]@3 F4 E4 ~@2 C4*2 [D4 C4]@3 G4 F4 ~@2 C4*2 [C5 A4]@3 ~ [E4 D4]@3 Bb4*2 [A4 F4]@3 G4 F4 ~@2".slow(8).early(1/4).note().s("gm_distortion_guitar").gain(1).color('green'),

n("0,2").chord(chrds).anchor("E3").mode('root').struct("[[x ~]*2 x*2]*2").voicing().s("gm_distortion_guitar").clip(0.95).gain(0.7).color('yellow'),
n("0").chord(chrds).anchor("E2").mode('root').voicing().s("gm_electric_bass_finger").lpf(190).gain(1).color('blue'),

  s("<[~@5 crow crow ~]!2 ~ [~@3 crow crow ~@3 ]>").slow(2).gain(1.2),
  
  s("oh*4, <bd!3 [bd*2 ~]>*2 , [~ sd]*2").bank("Linn9000").gain(0.15)
              
).cpm(200/4).room(0.3)//.scope()//.pianoroll()
