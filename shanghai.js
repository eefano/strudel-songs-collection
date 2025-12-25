// "Shanghai" (work in progress)
// song @by King Gizzard
// script @by eefano

setcps(81 / 60)

shangai: n("<0 1 2 ~ 4 5!2 ~ 4 2 1 5 8 7 9!2 7 8 5 1 2 4 ~ 5!2 4 ~ 2 1 0 -7!8>*4").scale('ab4:major').clip(.5).s("triangle").room(.8)

chords: n("<[0,2,4]!4>".add("<0 1 0 1 -2 0>/8")).scale("<ab3:major@5 bb3:major@1>/8").piano().gain(.5)

bass: n("<0@7 -4 0@6 0@4 -4 0@9 3@2 4@2>*4".add("<0 1 0 1 5 1>/8")).scale('ab1:major').clip(.95).s("gm_electric_bass_finger").lpf(800)

hh: s("<hh*4>").bank('9000').speed(1.5).gain(.2)
bd: s("<[bd@3 <~ bd>] ~>").bank('9000').gain(.7)
sd: s("<~ sd>").bank('9000').gain(.7)