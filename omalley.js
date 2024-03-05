// "O'Malley, Former Underdog" (work in progress)
// song @by Deerhoof
// script @by eefano
const crdpart = "<~@6 0@17 1@4 0@17 1@4 2@10>".pickRestart(
["[ C@2 D@2 [[C ~]!3 D@2 [D ~] D@2]@2 G@2 D@3 Am G D A D@2 ]/17"
,"[ Em@2 D@2 ]/4"
,"[ [G A] [[C ~]!3 D@2 [D ~] D@2]!3 D ]/10"
,"[ G [D@6 G@10] ]/8"
]);
stack("~"
,"<0@6 1@17 2@4 1@17 2@4 3@2 ~@8>".pickRestart(
["[<~ 0 1 2 3 4 5 6 7 4 5 6 7 8 9 10 11 7 8 9 10 11 12 13> ~]*4".sub(7)
,"[ ~@2 5 6 7@2 6 5 6 ~ 4 ~@3 8 ~@11 7 8 9@2 8 7 8 ~ 6 ~@3 11@4 10 9 10 ~ 8 ~ 9@2 8 7 8 ~ 6 ~ 7 6 5 ~ 6 ~ 4 ~@5 ]/17"
,"[ 7@3 8 9@2 12@2 11@3 8 6@4 ]/4"
,"[ 7@2 6@2 5 6 5 4 ]/2"
,"[ 7 ~@7 6 ~@7 5 ~@2 5 ~ 5 4 ~@9 ]/8"
]).n().scale("g3:major").s("gm_lead_1_square").room(0.4).delay(0.4).dfb(0.3).dt(60/128).gain(0.65)

,crdpart.chord().anchor("A4").voicing().s("gm_lead_8_bass_lead").room(0.4).color("blue").gain(0.5)

,s("hh*2").bank("RolandTR909").room(0.2).color("yellow").gain(0.2)
).cpm(147/2)
