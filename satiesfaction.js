// "low Effort, high Satie'sfaction"
// song @by eefano

setcps(185 / 60)
stack(
  n("<0 1 2 [1 3 4] 5 4 [6 2 3] 1 4 0>/3".add("<7@24 14>/17")),
  n("<[3,5,9] [2,5,9] [2,4,9]>/3".sub(7)).gain("<.35 .45 .25 .35>"),
  n("<[5@3 4] 5>/8".sub(14).gain("<.7@9 .8>/10"))
)
  .scale("<b3:lydian c#4:locrian>/48").s("piano")
  .postgain(sine.mul(.3).add(1.2).segment(48).slow(48 * 7))
  .room(".8").clip(1)
