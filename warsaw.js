// "Warsaw" (work in progress)
// song @by pilotredsun
// script @by eefano
setcpm(160)
const nk = x=>n(x).scale(['A#3','minor'])

const arpj = "<<5 4 2 1> 7>"; 
const main = `<6 [5 4] [3@3 ~] [2 3] 4 [3 2] 1 [~ [0 1]] [2 1] [0 -1] 0 3 2 4 [1@3 ~]@2
      [~ 6] [5 6] [4@3 ~] [1@3 ~] [~ 3] [2 1] [-3@3 ~]@2 [0 ~] [0 -1] 0 [~ [3 4]] [5 4] [3 2] 1 -3 >`;
const bass = "<-2 -3 0 2>/4"
const chrd = "<[-2,0,2] [-3,-1,0] [0,2,-3] [2,-3,-1]>/4"
const brid = "<~ 9 8 9 8 ~ 6 ~ ~ 7 8 7 2 ~ 3 ~ ~ 5 6 5 4 3 2 3 4 ~@7>*2"
const bas2 = "<6 6 2 3 5 6 2 3 6 6 2 3 5 5 6 6>/2".struct("x ~")
const brd2 = "<0# -1 -2 -1 -5 -4@2 2 0# -2 -1 -5 -4@2 -7# 2>"
const bas3 = "<-4 -3 -2 -5>/4"
const chr2 = "<[0,3,4] [1,3,4] [2,3,4] [-1,2,3]>/4"
const chr3 = "<[-2,0,4] [-1,1,4] [0,2,4] [-1,2,3]>/4"

const deep = x=>x.s("saw").lpf(700).adsr([.02,0,1,.02]).pan(.5).gain(.8)
const pads = x=>x.s("saw").gain(.15).lpf(2600).adsr([.05,0,1,.05])

orch: `< 0@2 [0,1]@2 [0,1,2,5]@2 [0,1,2,3,5]@2 [1,2,3]@2 [1,2,5]@2 [0,2,3]@2 ~ 
         [4,5,6]@2 7@2 [0,1,9]@2 [0,1,8,9]@2 [8,9,10]@2 [2,11,12] 
         [0,1,2,5,12]@2 [0,1,2,3,5,12]@2 [4,5,6]@2 7@2 [8,9,10,1]@2 [8,9,10,1,0,5]@2
         [9,10,0] [8,9,10,0] ~@3 >/16`.pickRestart(
{0: nk(arpj).s('gm_acoustic_guitar_nylon').gain(1).release(1)
,1: nk(main.add(7)).s("tri").gain(1)
,2: nk(bass.sub(14)).s("saw").lpf(1400).clip(.2).adsr([.02,0,1,1.8]).pan(.5).gain(.8)
,3: nk(chrd.add(7)).apply(pads)
,4: nk(brid).s("tri").gain(1)
,5: nk(main).s("square").gain(.5).clip(.6).lpf(600).lpa(.05).lpe(-100)
,6: nk(bas2.sub(14)).apply(deep)
,7: nk(brd2).s("gm_pad_halo:3").penv(.4).patt(10000).lpf(1400).clip(.2).adsr([0,.15,.6,1.7]).gain(1.2)
,8: nk(bas3.sub(14)).apply(deep)
,9: nk(bas3.sub(7).struct("<x@3 x@3 x@2>*2")).s("gm_pad_poly").gain(1.3).lpf(2000)
,10:nk(chr2.add(7)).apply(pads)
,11:nk(chr3.add(7)).apply(pads)
,12:nk(bass.sub(7)).apply(deep)
})
  
drums: `<0 [0,1] 1@8 [0,1,2]@2 [1,2]@2 [3,4] 
         [1,2]@2 [5,6]@2 [7,2]@2 [0,1,2]@2 [1,3]@2 1 
         1@4 8@2 8 [8,9] 8@4 [1,2]@2 [8,4]@2 [1 ~@31] >/16`.pickRestart(
{0: "<h0, <~ [h0 <~!3 h0>]>, <~@3 [~ c0]!2 ~ [~ c0] ~>>"
,1: "<hh*2, <bd [sd bd] [~ bd] sd bd sd [~ <bd!3 sd>] [sd sd*2]>>"
,2: "<~ cp>/2"
,3: "< [cb cb*2] cb*6@3 [cb*2 cb] [cb cb*2] cb*4@2 >"
,4: "<hh*2, bx [sx bx] bx [sx bx] [~ bx] [sx bx] [bx [~ bx]] [sx bx] >"
,5: `< [cb [cb cb*2] cb*2 cb]*2@8 cb*4@2 [cb*2 cb] cb*10@5 
     cb cb*14@7 cb [cb cb*2] cb*2 cb cb*4@2 [cb*2 cb] cb*2 >`
,6: `< [bx sx [~ sx] sx]*2@8 bx sx [~ sx] [~ bx] [~ sx]*2 [sx bx] [bx sx]*3@6 
    [~ sx]*2 [sx bx] [bx sx]*2@4 [~ sx] sx bx sx [~ sx] [~ bx,h1*2]>`
,7: "< <~ h1>, < bx ~!30 [sd sd*2]> >"
,8: "<[k0 k1]@3 ~@5,rd*2,oh [ ~ oh]!2 ~ oh!2 [~ oh]!2, <bd [sd bd] [~ bd] sd bd*2 [sd bd] [~ <bd!3 sd>] [sd sd*2]>>"
,9: "<yy*3 ~ ~ [rd,rd,rd]>/4"

}).pickOut(
{h0: s("hh").gain(.2)
,c0: s("cp").gain(.7).begin(0.1).speed(1.2)
,hh: s("tr808_hh").gain(.3)
,bd: s("bd").gain(.7)
,sd: s("sd").gain(.7).lpf(7000).hpf(100)
,cp: s("cp").gain(.5).begin(0.02).speed(.9)
,cb: s("9000_cb").gain(.3).hpf(1000).speed(.9).clip(.5).release(.1)
,bx: s("linndrum_bd").gain(.6)
,sx: s("dr110_sd").speed(.8).gain(.9)
,h1: s("linndrum_hh").gain(.3)
,k0: s("cr").pan(.2).gain(.3)
,k1: s("cr").pan(.8).gain(.3)
,oh: s("oh").speed(1.1).gain(.4)
,rd: s("rd").speed(1.01).gain(".6 .55")
,yy: s("sleighbells").pan("<.4 .6>").speed(.4).gain(4)
})

all(x=>x.room(.15)
 // .ribbon(40*16,16*3)
 // ._scope()
)