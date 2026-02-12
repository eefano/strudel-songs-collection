// "Three Friends" (work in progress)
// song @by Gentle Giant
// script @by eefano
// total length: 83
setcpm(126)  

$:chord(`<Em@4 A@2 Em@4 A@2 D@4 Em@2 Am@2 Em@2 A@2 F#m@4 G@2 [Am@5 Em@12 Bm@7]@12
          [G@5 Am@7]@6 Em@2 ~@8 Em ~ D ~ Am@2 D@2 Em@3 F#m G@2 Bm@2 A@2 D@4 Am@2 Bm>`)
  .anchor("e6").voicing()
  .layer(x=>x.s("gm_drawbar_organ").hpf(300).gain(.35).attack(.05).release(.2).pan(.6),
            x=>x.s("gm_church_organ:2").gain(.3).transpose(-12).release(.3).pan(.4))

$: n(`<0 [~ 0] 4 7 3 [~ 4] 0 [~ 4] 7 [[6@3 ~] 3@3]@2 [-4@3 ~] [-1@3 ~]@2 [~ 1@3]@2 2 -5 
      -4 [~ 2] [0 -7@3]@2 3 [4 2] 3 -4 [~ 4] 6 5 4 [3 2] 1 [3 0@3]@2 [~ -7] 0 [1 2 _ 3]@2 
      [4 -3 _ -2 _ -1]@3 [0 -7] -1 -3 [~ -4] [~ -5] [~ -6 _ -5]@2 [-7@3 ~]@2 0 1 [2 3] 
      -4 -3 -2 [-1 0] -7 [~@2 0@3 ~@3]@2 [~ 1 ~ 2]@2 [3 -4] -3 [4 3 _ 4]@2 [0 7 _ 6 _ 4]@3 
      5 [6 4] [5 3 _ 4]@2 [2 3] [1 2] [0 1] [~ 6] [-1@3 ~]@2 [~ 3] [4 2 _ 3]@2 [1 2]>`)
  .scale("e3:dorian")
  .layer(x=>x.s("gm_overdriven_guitar:3").lpf(3000).gain(.5),
         x=>x.s("gm_electric_bass_finger:2").lpf(200).gain(1.2).transpose(-12))

$: n(`<[0,2,4]@2 [0,2,4]@2 [[-2,0,3]@3 ~]@2 [[0,2,4]@5 [0,2,4]@3]@4 [-2,0,3]!2 ~ [-4,-1,1]@2 
       [-4,-1,-1] [-5,-3,-3] [-3,-1,-1] [-4,-2b,-2b]@2 [-5,-3,-1]@2 [-4,-2,-2]@2 ~@59 >`)
  .scale("e4:dorian").s("gm_choir_aahs:6").clip(.98).gain(.8).attack(.05).release(.07).hpf(600)

$: s("<0@20 1@2 0@2 2 0@3 3@4 1@2 0@3 4@13 0@4 7@4 0@4 7@2 5@2 0@3 3@2 6@3 7@3 3 6*2 6 0@2 [1 7]>"
     .pickRestart(["<[cr,bd]@3 bd sd@4 <[bd@3 sd] [[~ sd] bd]>@4>*2",
  "<[sd,[~ sd@7]] [cr,bd]@3>*2","[cr,sd]", "<~ sd ~ sd [cr,bd]@2 ~ bd>*2",
  "<~ sd!2 [bd,cr]*3@6 sd [cr,bd]@2 bd@2 sd@3 sd ~ sd ~ sd [[bd,cr]@3 bd]@4>*2",
  "<sd!2 ~ sd>*2","<bd sd [~ sd]>","<bd@3 bd sd@4>*2"])).gain(.25)    

$: s('hh').gain(.25)
all(x=>x.room(.7)  //.ribbon(64,40)
)
