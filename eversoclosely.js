// "The Everso Closely Guarded Line (Coda)" - Work In Progress
// song @by Cardiacs
// script @by eefano
const epic = "<D Dm Am D Gm C F Am A#>*9";
const scal = "<d:major a:minor@2 a:major a:minor@4 a#:major>*9"
const mels =["7@2 0 3 -1 2 -2 0 2"
            ,"4@7 2@3 3@6 4@2 2@7 2@2"
            ,"4@7 4 2 [3@3 4]@2 5 ~ 6@2 [2@3 3]@2 4 [2@5 ~]@4 9@2 ~ 9@2"
            ,"4@2 9 5@2 0 ~ 4@2 3@2 0 ~ 6@2 2@2 4 ~ 5@2 9@2 4 ~ 2@2"
            ,"4 7 9 7@2 11@2 9@2 [10@2 7]@2 5 7@2 6@2 9@3 7 5 4@2 2@2 2@2"
            ,"4 7 9 7@2 9@2 7@2 10 7 5 7@2 6@2 9@3 7 5 4@2 2@2 2@2"
            ,"9 5 4 5 6 4 5 [0@2 2] [[0@3 1]@2 2]"
            ,"9@3 5@3 <4 [4 4@2]>@3 [3@3 4]@2 5 6@2 a#4@2 9@2 7@2 5 4 <[9@2 ~ 7@2] [2@3 0@2]>@5"
            ,"[a d4 f#4 a4@2 e5@2 c5@2 d5 a4 f#4 a4@2 g4@2 c5@3 a4 f4 [e4 c4]@4 d4@29]/2"
            ,"<0,1,2,3,4,5,6,7>*9"]
const mux = register('mux', (lookup, pat) => (pat.fmap((i) => lookup[i])));
stack
("<0 1 2 3 4 0 1 2 3 [4@26 ~] 0 1 2 3 8@2 >".mux(mels).trigzeroJoin().scale(scal).sub(12).note()
 .s("gm_overdriven_guitar").gain(0.7).color("yellow").midichan(1)
,"<~ ~ ~ ~ 5 5 6 7@2 [2@4 ~] 5 5 6 7 8@2>".mux(mels).trigzeroJoin().scale(scal).note()
 .s("gm_tenor_sax").midichan(2)
,"<1@14 8@2>".mux(mels).trigzeroJoin().scale(scal).add(24).note().s("gm_ocarina").gain(0.3)
,"<9@14 ~@2>".mux(mels).trigzeroJoin().n().chord(epic).anchor("C4").voicing()
 .s("<gm_reed_organ@10 gm_church_organ@4 ~@2>").gain("<0.25@10 0.5@4 ~@2>").color("green").midichan(3)

,"<0@14 8@2>".mux(mels).trigzeroJoin().scale(scal).sub(24).note().s("gm_electric_bass_finger").lpf(300).color("blue").gain(0.6)
,"<0@14 2@2>".mux(
  ["<rd*3 , <[[bd ~ bd] [~ ~ bd]]!3@2 [bd ~ bd] [~ bd bd]!2> , <[~ sd]!3@2 ~ sd!2> , cr/9>*9"
  ,"<rd*2 , <[[bd ~ bd] [bd ~ ~]]!3@2 [bd ~ bd] [~ bd bd]!2> , <[sd sd]!3@2 ~ sd!2> , cr/9>*9"
  ,"< [<[sd,[~ sd@10]]!2 ~> <[bd,cr]!2 [sd,[~ sd@10]]> [bd,cr]!2 ~ [bd,cr] ~ [bd,cr,cr] ~]*3 ~*4 >" 
  ]).trigzeroJoin().mux({rd:/*note(51).*/s('rd').velocity(0.1).pan(0.4),
                bd:/*note(35).*/s('bd').velocity(0.5),
                sd:/*note(38).*/s('sd').velocity(0.5),
                cr:/*note(49).*/s('cr').velocity(0.1).pan(0.6)}).outerJoin().bank("Linn9000").gain(0.7).color("cyan").midichan(10)
).cpm(93.2*6/8/9).room(0.6)//.midi()//.pianoroll()
 