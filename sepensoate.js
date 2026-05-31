// "Se penso a te"
// song @by Franco Bracardi
// badly scripted @by eefano
setcpm(110)

$: n(`<-@2 4@2 7@3 6 4@11 2 [1 0]@3 [-1 0] 4@5 [3 2]@3 
       1@2 1@2 9@3 8 4@10 4@2 9@3 8 9@8>*2`)
  .scale("c5:major")
  .s('piano')
  .gain(.8)

$: n("<~ [0,2]>*2,<[4,6] [[4,6]@3 [4,6]] [- [4,6]@3] [4,6]>"
  .add("<~ 0 0 4 4 4 4 0>/4").mask("<~ x@7>/4"))
  .scale("c3:major").s('piano').clip(1).release(.08).gain(.5)

$: s("shaker_small:3").struct("<x - - x>*4").begin(.2).gain(4)
$: s("woodblock").struct("<x@3 x x@3 x - x - x x@4>*4")