
stack(
  n(stack("0@2 ~",
          "~ [1 ~]!2",
          "~ [2 ~]!2",
          "~ [3 ~]!2").fast(2))
     .chord("[Dm Am]!2 [F C]!2 ".slow(8)).anchor("[B3 G3]!2 [C4 B3]!2".slow(8)).voicing().velocity(0.5).fast(8)
     ,
  "[3@5.5 2@0.5 1@3 0@3] [3@3.5 [4 3 2 1 2]@2.5 1@3 0@3] [2@5.5 1@0.5 -3@6]!2"
     .scale('a minor').transpose(12).note()
  
).s("gm_accordion").clip(1).attack(0.1).release(0.1).gain(0.6).slow(15).pianoroll().room(1.5)

