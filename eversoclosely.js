// "The Everso Closely Guarded Line (Coda)" - Work In Progress
// song @by Cardiacs
// script @by eefano
const epic = "<D Dm Am D Gm C F Am A#>*9";
const mels ={0:"d4@2 a d4 g c4 f a d4"
            ,1:"a@7 c4@3 d4@6 e4@2 c4@7 d4@2"
            ,2:"a@7 e4 c4 [d4@3 e4]@2 f#4 ~ g4@2 [c4@3 d4]@2 e4 [c4@5 ~]@4 c5@2 ~ d5@2"
            ,3:"a@2 f#4 f4@2 a ~ e4@2 d4@2 a ~ g4@2 c4@2 e4 ~ f4@2 c5@2 e4 ~ d4@2"
            ,4:"a d4 f#4 [a4 e5 c5]@6 d5 a4 f#4 [a4 g4]@4 c5@3 a4 f4 [e4 c4]@4 d4@2"
            ,5:"a d4 f#4 [a4 c5 a4]@6 d5 a4 f#4 [a4 g4]@4 c5@3 a4 f4 [e4 c4]@4 d4@2"
            ,6:"f#4 f4 e4 f#4 g4 e4 f4 [a@2 c4] [[a#@3 c4]@2 d4]"
            ,7:"[f#4 f4]@6 <e4 [e4 e4@2]>@3 [d4@3 e4]@2 f#4 [g4 a#4 c5 a4]@8 f4 e4 <[c5@2 ~ a#4@2] [c4@3 a#@2]>@5"
            ,8:"[~@25 d4@29]/2"
            ,9:"<0,1,2,3,4,5,6,7>*9"}
const mzj = register('mzj', (lookup, pat) => (pat.fmap((i) => lookup[i]).trigzeroJoin())); 
const moj = register('moj', (lookup, pat) => (pat.fmap((i) => lookup[i]).outerJoin())); 
stack
("<0 1 2 3 4 0 1 2 3 [4@26 ~] 0 1 2 3 [[4@25 ~@29],8]@2 >".mzj(mels).sub(12).note().s("gm_overdriven_guitar").gain(0.75).midichan(1)
,"<~ ~ ~ ~ 5 5 6 7@2 [2@4 ~] 5 5 6 7 [[5@25 ~@29],8]@2>".mzj(mels).note().s("gm_tenor_sax").midichan(2).color("yellow")
,"<1@14 [[4@25 ~@29],8]@2>".mzj(mels).add(24).note().s("gm_ocarina").gain(0.3).color("red")
,"<9@14 ~@2>".mzj(mels).n().chord(epic).anchor("C4").voicing().s("<gm_reed_organ@10 gm_church_organ:1@4 ~@2>").gain("<0.25@10 0.4@4 ~@2>").color("green").midichan(3)
,"<0@14 [[4@25 ~@29],8]@2>".mzj(mels).sub(24).note().s("gm_electric_bass_finger").lpf(300).gain(0.6).color("blue")
,"<[0@2 1@2 0 2@4] 0!12 3@2>".mzj(
  ["<rd*3 , <<<bd!4 sd> sd> ~ bd>*3 , cr/9>*9"
  ,"[[sd [bd,cr] ~]!2@3]*9/2"
  ,"<[sd,[~ sd@10]] [[bd,cr] ~]!2@2 bd [sd,[~ sd@10]] mt lt >*9*3"
   
  ,"< [<[sd,[~ sd@10]]!2 ~> <[bd,cr]!2 [sd,[~ sd@10]]> [bd,cr]!2 ~ [bd,cr] ~ [bd,cr,cr] ~]*3 ~*4 >" 
  ]).moj({rd:/*note(51).*/s('rd').velocity(0.1).pan(0.4),
               bd:/*note(35).*/s('bd').velocity(0.5),
                sd:/*note(38).*/s('sd').velocity(0.5),
                cr:/*note(49).*/s('cr').velocity(0.1).pan(0.6),
                mt:s('mt').velocity(0.4).pan(0.6),
                lt:s('lt').velocity(0.4).pan(0.8)
}).bank("Linn9000").gain(0.7).color("cyan").midichan(10)
).cpm(93.2*6/8/9).room(0.6)//.midi()//.pianoroll()
 