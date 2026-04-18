// "Ideal (middle bit)"
// song @by Cardiacs
// script @by eefano
setcpm(218)
// The barre chord in the E shape
const root= "<A _ _ _ G _ _ _ F _ _ _ G _ A _ _ _ G _ F _ G _ _ _ A _ G _ F _ G _ _ _ A _ G _ _ _ F _ _ _ G _ _ _ A _ _ _ G _ F _>"
// The picking pattern
const stru= "<x x - - x x - - x x - - x x x x - - x x x x x x - - x x x x x x x - - x x x x - - x x - - x x - - x x - - x x x x x>"
// The string to pluck (0=E 1=A 2=D 3=G 4=B 5=E)
const patt= "<3 2 _ _ 3 2 _ _ 4 3 _ _ 1 2 3 2 _ _ 3 2 4 3 1 2 _ _ 3 2 3 2 4 3 1 _ _ 2 3 2 3 _ _ 2 4 _ _ 3 1 _ _ 2 3 _ _ 2 3 2 4 3>"
// Semitone distance from the root note for each string
const stri = "0,7,12,16,19,24"
const bass = x=>x.s("gm_electric_bass_pick:7").dist("1.5:.6").color('cyan')
const guit = x=>x.s("gm_overdriven_guitar:2").gain(.8).color('yellow')
const keyb = x=>x.s("gm_reed_organ:5").gain(.7).lpf(4000).color('magenta')
const saxo = x=>x.s("gm_baritone_sax").gain(.7)

$: "<[0,1,3]@4 [4,5,6] [3,5,7,2] [4,5,8,2] [3,5,9,2] [[10,[[4,5,2] 11@66]]@82 -@33]@2>/58".pickRestart({
  0:stri.add(root).arp(patt).struct(stru).add("12").apply(keyb)
 ,1:stri.add(root).arp(patt).struct(stru).add("[-12,0]").apply(guit)
 ,2:stri.add(root).arp(patt).add("-24").apply(saxo)   
 ,3:root.add("-24").struct(stru).apply(bass)
 ,4:"A1".clip(.85).apply(bass)
 ,5:stri.add(root).arp(patt).add("[-12,0,12]").apply(keyb)
 ,6:"A2/4".apply(guit)
 ,7:stri.add(root).arp("[0,1]").struct(root).add(-12).apply(guit)
 ,8:"[A2,A3]".apply(guit)
 ,9:stri.add(root).arp("[0,1,2]").struct(root).add(-12).apply(guit)
 ,10:stri.add("<A G F G>/4").arp("<3 2 - - 3 2 - - 4 3 - - 1 2 - ->").add("-12,0").apply(guit)
 ,11:"<A1!5 G1!5 F1!5 G1!5>/2".apply(bass)
}).note().transpose("<0 1 0 1 0 1 0 1 0 0>/58")

$: "<0 _ [0,1] _ [2,3]@4 [2 5@82 -@33]@2 >/58".pickRestart([
  s("<sd mt@57>").struct(stru).velocity(.8),
  s("<hh/2>").restart("<x x@31 x@26>").velocity(.5),
  s(`<sd [bd,cr] bd sd _ bd bd sd _ bd bd sd _  sd _ bd bd sd _ bd _ sd bd sd _  sd _  bd _ sd _ sd
         [bd,cr] _  sd _ bd bd sd _ sd _  bd bd sd _ bd _  sd _ bd _ sd _  bd bd sd bd >`).velocity(.7),
  s("<oh/2>").restart("<x x@31 x@26>").speed(0.95).velocity(.5), 
  s("<[bd,cr] _ sd _ bd bd sd bd bd _ sd _ bd bd sd _ bd _ sd _ bd bd sd bd bd _ sd _ bd bd sd bd bd _ sd _ bd bd sd bd>").velocity(.5)
  ]).gain(.8)

all(
  x=>x.room(.35).fast(2)
)