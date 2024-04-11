// "Aztec Challenge"
// song @by Paul Norman
// script @by eefano
setcps(180/60)
let parts = 
{a1:n("<0>/32")
,a2:n("<-7>/32")
,a3:n("<-14@5 [4 7]*5 4@2 >/4")
,b:n("<0 ~@3 0 ~ 0 ~>*4".sub(7))
,c1:n("<0@2 2 1 1b@2 3 2>")
,c2:n("<<0 1b> 5 4 3 4 5 4 3>*2")
,d1:n("<0@2 2 1 1b@2 3 2>/2")
,d2:n("<<-7 -6b> -2 -3 -4 -3 -2 -3 -4>")
,e1:n("<0 ~ 0 1 0 ~ 0 1 0 ~ 0 1 2 1 0 -1 1 ~ 1 2 1 ~ 1 2 1 ~ 1 2 1 0 -1 -2#>*2")
,e2:n("<-2@2 4b ~ 2@2 4b 5 >*2")
,e3:n("<2@3 3 3#@3 4 7@2 6 5# 3#@3 4 7@2 6 5# 3#@3 1 0@8>/2")
}
sid1: "<a1@2 ~ b c1@2 b a1@2 e1@3 e2 e1@3 e2 e1@3 e2 e1@3 e2>/16".pickRestart(parts).scale('a1:minor').s('gm_lead_2_sawtooth').lpf(4000).color('yellow').gain(0.9)._scope()
sid2: "<a2@2 b@2 c2@2 d1 a2@2 e1@3 e2 e1@3 e2 e1@3 e2 e1@3 e2>/16".pickRestart(parts).scale('a2:minor').s('sawtooth').lpf(3000).color('cyan')._scope()
sid3: "<a3@2 ~@2 b@2 d2 a3@2 ~@4 e3@4 e3@4 e3@4>/16".pickRestart(parts).scale('a4:minor').s("<triangle@17 sawtooth@8>/16").color('magenta')._scope()
