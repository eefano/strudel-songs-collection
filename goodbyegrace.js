// "Goodbye Grace" Solo
// song @by Cardiacs
// script @by eefano
setcpm(180)

const c = `<B _ F#m D B A G B _ Em A D B Em A _ F#m D B A G B _ Em A D B Em A _ F#m _ [F#m B] B _ _
          Em A D B A [A Em] F# _ [Em D] [D F#m] B ~>/2`

$: chord(c).anchor("e5").voicing().struct("<[~ x]!72 [x ~]!24>").s("tri").att(.02).gain(.4).clip(.6).rel(.02)
$: n("0").chord(c).mode('root').anchor("e2").voicing().s("pulse").lpf(1000).gain(1).clip(.6).rel(.02)

$: n(`<2# _ 0 -3 -1 1 2 4 2# 0 -1 1 2 5 0 ~ 0 0 5 5 -1 ~ 5 4 2# 0 -2 3 -1 ~ 
           -1 -1 -1 1 2 4 2# 0 -1 1 2 5 0 ~ 0 0 5 5 -1 ~ 5 4 2# 0 -2 3 -1 ~ -1!2 ~ -1!3 -1 -3 -3@2 -3@4 
       5 5 -1 -1 5 4 2# 0 -1 3 3 -2 -3 -1# 1 4 5 4 2 1 7 0 ~ ~>`)
  .scale("b3:minor").layer(x => x.transpose("<~@68 12@28>").velocity(.3), x => x.velocity(.55))
  .s("saw").att(.025).rel(.01).gain(.95).delay(.15).dt(.4).dfb(.1)

all(x => x.room(.3))
