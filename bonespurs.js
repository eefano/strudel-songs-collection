// "Bonespurs" (work in progress)
// @by eefano

setcps(90/60/3)

$: "<[-3,0] [-4,0] [-2,0]>/4".layer(
     x=>x.sub(7).struct("<x*4>").n().s('supersaw').clip(1).lpf("<300>/12").lpa(0).lpe("<1 1.5 2 2!3>/12").lpd(.15),
     x=>x.add(7).s('triangle').gain("<0 .1 .15 .2!3>/12").adsr([.5,0,1,.5]).hpf(500)
)
$: "<[0 2 5 0 3 -1 2 3 -1 -2 3 2]>".s('sine').gain("<0 0 .3 .6!3>/12")

$: n(irand(7).add(6).struct("<~@2 [x x] [x ~]>")).s('square').hpf(800).lpf(2000)
  .gain(.3).adsr([.01,.2,.1,.4]).delay(0.2).dfb(.2).mask("<~@3 1!3>/12")

$: s("[bd [~ <~ bd>] sd]").bank('linndrum').lpf("<600 800 1000 1200!3>/12").gain(.7)
$: s("rd*3").hpf(8000).gain(.1)

all(x=>x.room(.8).scale("f3:minor"))