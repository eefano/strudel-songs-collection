// Swimming with the Snake (Tim Smith) - Work In Progress

const rando1 = `4 5 6 3 5 6 5 2 3 4 5 2 6 ~ 7 6 
4 2 5 3 6 5 3 7 4 5 6 3 7 ~ 9 4 6 7 3 5 3 6 5 1 4 5 3 4 2 3 4 5
7 8 9 7 8 9 10 6 3 7 6 4 5 6 7 8 9 3 5 6 7 8 3 5 6 7 5 6 7 9 8@2`

const rando2 = `0 1 2 -1 0 1 -2 2 1 5 4 -3 0 1 2 -2
2 1 0 1 2 0 1 0 1 -1 0 -2 0 -1 -2 -1 -2 -3 -2 -1 0 -1 0 -2 -1 -2 1 0 ~ 0 -2 0
1 3 0 1 -1 2 1 0 -1 -2 -1 0 1 -3 -1 0 1 -2@2 -1 0 1 -1 -2 1 3 4 5 -1 2 3 1`
  
const halo = x => 
  x.slow(20).scale("c#:minor").transpose(12).note().s("gm_pad_warm")
  .clip(1).release(0.05).room(0.5)

const part = stack(rando1.apply(halo).gain(0.2), rando2.apply(halo).gain(0.1))


const ba1 = "0@8 -1@4 -2@2 -3@2 -2@8".slow(24)
const ba2 = "-2@2 -1@2 0@2".slow(6)
const ba3 = "0@8 -1@4 -2@2 -3@2 -2@6".slow(22)
const ba4 = "-1 -2 -3 2 -2 -5 [-4 -3 -2 -1 0 2 -4 -3]@12 -2@8".slow(26)

const al2 = "[5,2] ~ [5,2] [3,0] ~ [3,0] [4,1] ~ [4,1] [0,-3] ~ [0,-3]".slow(6).echo(2,0.6,0.3)

const vr1 = "~@0.5 11 13!2 11@4 ~ 11 13!2 11 9 10 11 9@2.5 8@2 7@3 ~".slow(24)
const vr3 = "~@0.5 11 13!2 11@4 ~ 11 13!2 11 9 10 11 ~@0.5 9@3 ~@3".slow(22)
const vr4 = "10 13 11 9 10 11 9@1.5!2 7@1.5!2 ~@14".slow(26)
const vs1 = stack(vr1,vr1.sub(2))
const vs3 = stack(vr3,vr3.sub(2))
const vs4 = stack(vr4,vr4,sub(2))

const tr1 = "0 3 1 4 2 5 -1 2 0 3 1 4 2 5 3 6 4 1 2 -1 3 0 4 1".slow(6)

const bass = arrange([48,ba1],[24,ba2],[24,ba1],[22,ba3],[26,ba4],[24,ba1],[22,ba3],[26,ba4])
const alik = arrange([48,"~"],[24,al2],[24,"~"],[22,"~"],[26,"~"],[24,"~"],[22,"~"],[26,"~"])
const voce = arrange([48,"~"],[24,"~"],[24,vr1],[22,vr3],[26,vr4],[24,vs1],[22,vs3],[26,vs4])
const oboe = arrange([48,"~"],[24,"~"],[24,"~"],[22,"~"],[26,"~"],[24,"~"],[22,"~"],[26,tr1])

stack(
  part.pan(0.2),
  part.pan(0.8).late(3/4),
  voce.scale("c#:minor").transpose(0).note().s("gm_harmonica").clip(1).release(0.2).gain(0.50),
  bass.scale("c#:minor").transpose(-12).note().s("gm_synth_strings_2").clip(1).gain(1),
  alik.scale("c#:minor").transpose(24).note().s("gm_recorder").clip(1).release(0.2).gain(0.4),
  oboe.scale("c#:minor").transpose(12).note().s("gm_oboe").clip(1).gain(0.65),
  s("shaker_small").struct("[x ~ ~ x]").gain("4.0 ~ ~ 2.0"),
  s("handbells").struct("x*2 x").gain(rand.range(0.1,0.4))
  
).cpm(95)//.pianoroll()
