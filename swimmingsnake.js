// "Swimming With The Snake" - Work In Progress
// song @by Tim Smith of Cardiacs
// script @by eefano
const rando1 = `4 5 6 3 5 6 5 2 3 4 5 2 6 ~ 7 6 
4 2 5 3 6 5 3 7 4 5 6 3 7 ~ 9 4 6 7 3 5 3 6 5 1 4 5 3 4 2 3 4 5
7 8 9 7 8 9 10 6 3 7 6 4 5 6 7 8 9 3 5 6 7 8 3 5 6 7 5 6 7 9 8@2`
const rando2 = `0 1 2 -1 0 1 -2 2 1 5 4 -3 0 1 2 -2
2 1 0 1 2 0 1 0 1 -1 0 -2 0 -1 -2 -1 -2 -3 -2 -1 0 -1 0 -2 -1 -2 1 0 ~ 0 -2 0
1 3 0 1 -1 2 1 0 -1 -2 -1 0 1 -3 -1 0 1 -2@2 -1 0 1 -1 -2 1 3 4 5 -1 2 3 1`
const halo = x => 
  x.slow(20).scale("c#:minor").add(12).note()
const part = stack(rando1.apply(halo).gain(0.2), rando2.apply(halo).gain(0.1))
const pats =
{ba1: "[0@8 -1@4 -2@2 -3@2 -2@8]/24"
,ba2: "[-2 -1 0]/6"
,ba4: "[-1 -2 -3 2 -2 -5 [-4 -3 -2 -1 0 2 -4 -3]@12 -2@8]/26"
,al2: "[[5,2] ~ [5,2] [3,0] ~ [3,0] [4,1] ~ [4,1] [0,-3] ~ [0,-3]]/6".echo(2,0.6,0.3)
,vr1: "[~@0.5 11 13!2 11@4 ~ 11 13!2 11 9 10 11 <[ 9@2.5 8@2 7@3 ~] [~@0.5 9@3 ~@5]>@8.5 ]/24"
,vr4: "[10 13 11 9 10 11 9@1.5!2 7@1.5!2 ~@14]/26"
,tr1: "[0 3 1 4 2 5 -1 2 0 3 1 4 2 5 3 6 4 1 2 -1 3 0 4 1]/6"
}
stack(part.layer(x=>x.pan(0.2),x=>x.pan(0.8).late(3/4)).s("gm_pad_warm").release(0.05).room(0.5).color("white")
      
,"<ba1@48 ba2@24 ba1@24 ba1@22 ba4@26 ba1@24 ba1@22 ba4@26>"
 .pickRestart(pats).scale("c#:minor").sub(12).note().s("gm_synth_strings_2").gain(1).color("green")
,"<~@48 al2@24 ~@24 ~@22 ~@26 ~@46 ~@26>".pickRestart(pats).scale("c#:minor").add(24).note().s("gm_recorder").release(0.2).gain(0.4).color("red")
,stack("<~@48 ~@24 vr1@46 vr4@26 vr1@46 vr4@26>".pickRestart(pats),
       "<~@48 ~@24 ~@46 ~@26 vr1@46 vr4@26>".pickRestart(pats).sub(2))
 .scale("c#:minor").transpose(0).note().s("sawtooth").hpf(1300).attack(.1).release(0.2).gain(0.40).color("yellow")
,"<~@48 ~@24 ~@46 ~@26 ~@46 tr1@26>".pickRestart(pats).scale("c#:minor").transpose(12).note().s("gm_oboe").gain(0.65).color("red")
,s("shaker_small").struct("[x ~ ~ x]").gain("4.0 ~ ~ 2.0").color("brown")
,s("handbells").struct("x*2 x").gain(rand.range(0.1,0.4)).color("brown")
  
).cpm(95)//.pianoroll()
