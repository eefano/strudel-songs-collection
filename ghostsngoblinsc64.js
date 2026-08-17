// "Ghosts'n'Goblins C64" (work in regress)
// song @by Mark Cooksey 
// script @by eefano
setcpm(130)
register('pkr',(arg,pat)=>pat.pickRestart(arg))
const so = "<0@6 1@12 2@24 3@4 4@16 2@24 3@4 4@16>/4"
  
$: so.pkr(["<[<C F> Dm E Am]*2>/3/8","<[<E!2 Dm E> Am]/2*8 _>/3/8","~"]).chord().anchor(so.pkr(["d5","d6"])).voicing()
  .s("sine").superimpose( 
                  x=>x.transpose(12).velocity(slider(0.3145,0,.5)),
                  x=>x.transpose(24).velocity(slider(0.0625,0,.25)),
                  x=>x.transpose(36).velocity(slider(0.043125,0,.125)),
                  x=>x.transpose(48).velocity(slider(0.033375,0,.0625)),
                ).adsr(so.pkr([[0,.5,.1,2],[0,0,1,0]]))
  .penv(so.pkr([0,12])).patt(so.pkr([0,.9])).clip(so.pkr([.5,.9])).vib(so.pkr([0,2])).vmod(.1).gain(.25)

$: so.pkr(["<4 5 [4 3] 2 2 3 [2 1] 0 ~@16>/3","~"]).n().add("0,-7")
  .s("tri").scale("a4:minor").lpf(2000).clip(.3).dec(.9).rel(.6).gain(.8)

$: so.pkr(["<2 4 5 7 4 2 7 6 5 2 3 5 4 6 7 4>*2/3",
           "<[<[-3 1 4 _]!2 [3 7 10 _] [-3 1 4 _]> [0 4 7 _]]*8@64>*2/3",
           "<0 0 2 2 3 3 3# 4>*2",
           "<0 0 2 2 3 3 [3# 4] [3 2]>*2"]).n().scale("a1:minor")
  .transpose(so.pkr([0,0,"<0!4 5 0>/16",0,"<0!2 5 2>/8"]))
  .s("saw").clip(.98).lpf(300).lpenv(100).lpa(0).lps(.0).lpd(0.1).gain(.9)

$: so.pkr(["~","~",
  "<7@5 4 5 3 4@5 2 3 1 2@5 0 1 -1# 0@7 ~>*2","~",
   `<[4@9 3 4 5 4 3 2 -1# 1@4 0@6 0 2 1 0 -3 -5 -1@4 -2@6 -2 -1# -1 -2 -4 -5 -6 _ -3@4 -1#@4 1@6],
    <~ [2@9 1 2 3 2 -1 -3 -3 -3@4 -5@6 -3!4 -5 -7 -4@4 -4@6 -4!4 -7 -7 -8# _ -6@4 -3@4 -1#@6]>>/16/2`])
  .n().scale("a4:minor").transpose(so.pkr([0,0,"<~ ~ 0 0 5 0>/16",0]))
  .s("square").clip(.99).lpf(2000).lpenv(100).lpa(.5).vib(5).vmod(.2).att(.01).gain(.4)

$: so.pkr(["~","~",
           "<<[bd,bd,<rim oh:1>] [bd,bd,<cb!2 perc!2>]*2> [sd,sd,cp:2]>"]).s().mask(so.pkr([0,0,"<~ x!5>/16",0,1]))
  .bank("tr808").gain(.9)

all(x=>x.room(.5).roomsize(1.5))
 