// "Bye Bye Spirit" (Work In Progress)
// song @by The Sea Nymphs
// script @by eefano
setDefaultVoicings('legacy')
setcps(140/60*3/4/3)

const ch = ["<Cm A# D# D E F C A E G# C# Cm F Cm F>", 
            "<A@8 ~ Em A G C B ~ A G C B ~ A G D Em ~ G D Em ~ ~>"]
const bs = ["<c2 a#1 d#2 d2 e2 f2 c2 a1 e2 g#1 c#2 c2 f2 c2 f2>"
           ,"<a1 g1 f#1 f1 a1 g1 f#1 f1 ~ e2 a1 g1 c2 b1@2 a1 g1 c2 b1@2 a1 g1 f#1 e2@2 g1 f#1 e2@2 ~>"]
const me = ["<g4@2 ~ a#4@2 ~ g4@2 ~ f#4 d4 a3 g#3 b3 e4 a3 c4 f4 e4@4 ~@2 e4 b3 g#3 g#3 c4 g#4 f4 c#4@2 d#4 d4 c4 a3@2 ~ g4@3 a3@3>*3"
           ,`<[a3 b3 c#4] g3 c#4 g3 [a3 b3 c#4] [g3@2 b3] c#4 g3 ~ 
              [e4 ~ e4] [a3 ~ a3] [b3 ~ b3] [[g3@4 f#3]@2 e3] b3 ~ 
              [a3 ~ a3] [b3 ~ b3] [[g3@4 f#3]@2 e3] b3 ~ g3 b3@2 ~ g3 b3@2 g3 ~ ~ >`]

piano: "<0@30 1@30>".pickRestart(ch).chord().anchor("e4".add("<~ -2 2>*3")).voicing().struct("<~ x x>*3").piano().room(0.8).gain(0.4)

bass: "<0@30 1@30>".pickRestart(bs).note().piano().room(.8).gain(0.6)

bowed: n("<0 1 2 2 1 0>*3").chord("<~@15 0@15 ~@30>".pickRestart(ch)).anchor("g5").voicing().s('gm_pad_bowed').sustain(0.4).room(0.7).gain(0.5)

voice: "<0@30 1@30>".pickRestart(me).transpose(12).s('triangle').note().room(0.6).attack(0.05).release(0.2).gain(0.4).vmod(0.10).v(5)

