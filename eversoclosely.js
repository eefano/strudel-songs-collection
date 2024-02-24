const epic = "<D Dm Am D Gm C F Am A#>";
const scal = "<a:major a:minor@2 a:major a:minor@5>"
const mels =["[3@2 0 3 -1 2 -2 0 3 ]/9"
            ,"[0@7 2@3 3@6 4@2 2@7 3@2]/9"
            ,"[0@7 4 2 [3@3 4]@2 5 ~ 6@2 [2@3 3]@2 4 [2@5 ~]@4 9@2 ~ 10@2]/9"
            ,"[0@2 f#4 5@2 0 ~ 4@2 3@2 0 ~ 6@2 2@2 4 ~ 5@2 9@2 4 ~ 3@2]/9"
            ,"[0 3 5 7@2 11@2 9@2 [10@2 7]@2 5 7@2 6@2 9@3 7 5 4@2 2@2 3@2]/9"
            ,"[0 3 5 7@2 9@2 7@2 10 7 5 7@2 6@2 9@3 7 5 4@2 2@2 3@2]/9"
            ,"[5 5 4 5 6 4 5 [0@2 2] [[a#@3 2]@2 3] ]/9"
            ,"[5@3 5@3 <4 [4 4@2]>@3 [3@3 4]@2 5 6@2 a#4@2 9@2 7@2 5 4 <[9@2 ~ a#4@2] [2@3 a#3@2]>@5 ]/9"
            ]
const pickRestart = register('pickRestart', (arr, pat) => pat.pick(arr.map((x)=>x.restart(pat.collect().fmap(v=>v+1)))))
stack
("<0 1 2 3 4 0 1 2 3 4      >/9".pickRestart(mels).scale(scal).sub(12).note().clip(0.95).s("gm_overdriven_guitar").gain(1).color("yellow")
,"<~ ~ ~ ~ 5 5 6 7@2 [2@4 ~]>/9".pickRestart(mels).scale(scal).note().s("gm_tenor_sax")
,mels[1].scale(scal).add(24).note().s("gm_ocarina").gain(0.3)
    //,m3.scale(scal).note().s("gm_oboe").gain(1.1)
   //])
,n("<0,1,2,3,4,5,6,7>").chord(epic).anchor("C4").voicing().s("gm_reed_organ").gain(0.25)
,
stack(
  s("<rd*3>").gain(0.1),
  s("<[[bd ~ bd] [~ ~ bd]]!3@2 [bd ~ bd] [~ bd bd]!2>").gain(0.5),
  s("<[~ sd]!3@2 ~ sd!2>").gain(0.5),
  s("cr/9").gain(0.1)
).bank("Linn9000").velocity(0.5)

).cpm(93.2*6/8).room(0.6)
 