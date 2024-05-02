// "Endless Tarantella"
// script @by eefano
setcps(140/60)

//let pizza = run(16).slow(16) 
let pizza = rand.range(0,16).segment(16).slow(16)

iamme: pizza.pick(["4 ~ 4","7 ~ 7","4","4 ~ 4","5 ~ 5","5 6 5","4","4 ~ 5","4@2 3","3 ~ 4","3@2 2","2 ~ 3","4 5 4","3 2 1","0","7 ~ 7"])
  .scale("a:minor").s('gm_clarinet').note()

let pasta = pizza.pick([0,0,0,0,1,1,0,0,2,2,0,0,2,2,0,0]).fast(2)

funiculi: pasta.pick(["[0 ~] [-3 ~]","[3 ~] [-2 ~]","[1 ~] [-3 ~]"]).slow(2)
  .scale("a2:minor").s('gm_tuba').note().lpf(800)

funicula: pasta.pick(["[~@2 [0,2,4]]!2","[~@2 [1,3,5]]!2","[~@2 [4,-1,1]]!2"]).slow(2)
  .scale("a3:minor").s('gm_harmonica').note()

uagliu: s("tambourine")
